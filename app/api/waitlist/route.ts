import { NextResponse } from "next/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// The waitlist table only needs insert access for the anon key (enable RLS with an insert-only policy).
let supabase: SupabaseClient | null = null;
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  supabase ??= createClient(url, key, { auth: { persistSession: false } });
  return supabase;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USER_TYPES = ["customer", "hotel"] as const;
/** A signup is a few hundred bytes; anything far bigger is not a real form post. */
const MAX_BODY_BYTES = 4 * 1024;
/** Give up on the database after this long rather than leave the visitor waiting. */
const DB_TIMEOUT_MS = 8000;

/** One error shape for the form: { error, field? }. `field` lets the form put the message next to that input. */
const fail = (status: number, error: string, field?: "name" | "email" | "user_type") =>
  NextResponse.json(field ? { error, field } : { error }, { status, headers: { "Cache-Control": "no-store" } });

const ok = (status: number, message: string, already: boolean) =>
  NextResponse.json({ message, already }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return fail(415, "Invalid request.");
  }
  const length = Number(req.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) return fail(413, "Invalid request.");

  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return fail(400, "Invalid request.");
  }
  // content-length can be missing or wrong, so check what actually arrived too.
  if (raw.length > MAX_BODY_BYTES) return fail(413, "Invalid request.");

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400, "Invalid request.");
  }
  // Valid JSON is not necessarily an object: null, a string or an array would crash the field reads below.
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return fail(400, "Invalid request.");
  }
  const data = body as Record<string, unknown>;

  // Honeypot: people never see this field, so anything in it is a bot. Pretend it worked.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return ok(201, "You’re on the list.", false);
  }

  const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const userType = data.user_type;

  if (!USER_TYPES.includes(userType as (typeof USER_TYPES)[number])) {
    return fail(400, "Choose guest or hotel partner.", "user_type");
  }
  if (!name) {
    return fail(400, userType === "hotel" ? "Enter your hotel’s name." : "Enter your name.", "name");
  }
  if (name.length > 120) {
    return fail(400, "That name is too long.", "name");
  }
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return fail(400, "Enter a valid email address.", "email");
  }

  const db = getSupabase();
  if (!db) {
    console.error("[waitlist] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
    return fail(503, "The waitlist is unavailable right now. Please try again later.");
  }

  try {
    const { error } = await db
      .from("waitlist")
      .insert({ name, email, user_type: userType })
      .abortSignal(AbortSignal.timeout(DB_TIMEOUT_MS));

    if (!error) return ok(201, "You’re on the list.", false);

    // Unique email: they signed up before. Not an error for the visitor.
    if (error.code === "23505") return ok(200, "You’re already on the waitlist.", true);

    // Timed out (the abort surfaces as an error object, not a throw).
    if (error.message?.includes("AbortError") || error.message?.toLowerCase().includes("aborted")) {
      console.error(`[waitlist] database did not answer within ${DB_TIMEOUT_MS} ms`);
      return fail(504, "That took too long. Please try again in a moment.");
    }

    // Row-level security refused the insert: the table's policy is misconfigured, not the visitor's fault.
    if (error.code === "42501") {
      console.error("[waitlist] insert refused by row-level security; check the waitlist table's insert policy");
    } else {
      // Never log the email or name: the code and message are enough to debug.
      console.error("[waitlist] insert failed", { code: error.code, message: error.message });
    }
    return fail(500, "Something went wrong on our side. Please try again in a moment.");
  } catch (err) {
    // supabase-js normally returns errors, but a network failure or a bug can still throw.
    console.error("[waitlist] unexpected error", err instanceof Error ? { name: err.name, message: err.message } : err);
    return fail(500, "Something went wrong on our side. Please try again in a moment.");
  }
}
