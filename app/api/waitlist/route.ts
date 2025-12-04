import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, email, user_type } = await req.json();

    // ---- Input Validation ----
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

    if (name && typeof name !== "string") {
      return NextResponse.json(
        { error: "Invalid name" },
        { status: 400 }
      );
    }

    if (user_type && !["customer", "hotel"].includes(user_type)) {
      return NextResponse.json(
        { error: "Invalid user type" },
        { status: 400 }
      );
    }

    // ---- Attempt Insert ----
    const { error } = await supabase
      .from("waitlist")
      .insert({ name: name || null, email, user_type: user_type || null })
      .single();

    // ---- Handle Duplicate Email ----
    if (error && error.code === "23505") {
      return NextResponse.json(
        { message: "You are already on the waitlist" },
        { status: 200 }
      );
    }

    // ---- Other Supabase Errors ----
    if (error) {
      return NextResponse.json(
        { error: "Something went wrong. Please try again later." },
        { status: 500 }
      );
    }

    // ---- Success ----
    return NextResponse.json(
      { message: "Welcome aboard! You've been successfully added to the waitlist. We'll notify you as soon as we launch!" },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Waitlist API - Use POST to submit' },
    { status: 200 }
  );
}
