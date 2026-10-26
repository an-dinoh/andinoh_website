import { NextResponse } from "next/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// The waitlist table only needs insert access for the anon key (enable RLS with an insert-only policy).
let supabase: SupabaseClient | null = null;
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  supabase ??= createClient(url, key);
  return supabase;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USER_TYPES = ["customer", "hotel"] as const;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: people never see this field, so anything in it is a bot. Pretend it worked.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ message: "You’re on the list.", already: false }, { status: 201 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const userType = body.user_type;

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (name.length > 120) {
    return NextResponse.json({ error: "That name is too long." }, { status: 400 });
  }
  if (!USER_TYPES.includes(userType as (typeof USER_TYPES)[number])) {
    return NextResponse.json({ error: "Choose guest or hotel partner." }, { status: 400 });
  }

  const db = getSupabase();
  if (!db) {
    console.error("[waitlist] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
    return NextResponse.json({ error: "The waitlist is unavailable right now. Please try again later." }, { status: 503 });
  }

  const { error } = await db.from("waitlist").insert({ name: name || null, email, user_type: userType });

  if (error?.code === "23505") {
    return NextResponse.json({ message: "You’re already on the waitlist.", already: true }, { status: 200 });
  }
  if (error) {
    console.error("[waitlist] insert failed", error.code, error.message);
    return NextResponse.json({ error: "Something went wrong on our side. Please try again in a moment." }, { status: 500 });
  }

  return NextResponse.json({ message: "You’re on the list.", already: false }, { status: 201 });
}
