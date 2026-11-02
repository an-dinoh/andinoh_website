"use client";

import { useId, useRef, useState } from "react";
import { CheckCircle, Danger, Spinner } from "@/app/components/icons";
import { WAITLIST_OFFER } from "@/app/content/site";

type UserType = "customer" | "hotel";
type Field = "name" | "email";
interface FormError {
  message: string;
  /** The input the message is about, if any; it gets focus and aria-invalid. */
  field?: Field;
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
/** Stop waiting after this long, rather than leave the spinner going forever. */
const REQUEST_TIMEOUT_MS = 15000;

const input =
  "h-14 w-full rounded-full border border-input-border bg-input-bg px-6 text-base text-ink placeholder:text-muted transition-colors " +
  "focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 " +
  "aria-[invalid=true]:border-danger aria-[invalid=true]:focus:ring-danger/15";

/** What to tell the visitor for a failed request, from the server's answer when it gave one. */
function messageFor(status: number, serverMessage: unknown): string {
  if (typeof serverMessage === "string" && serverMessage) return serverMessage;
  if (status === 429) return "Too many tries. Please wait a minute and try again.";
  if (status >= 500) return "Something went wrong on our side. Please try again in a moment.";
  return "We couldn’t add you just now. Please try again.";
}

/**
 * The waitlist signup. "inline" is the home page's single row (stacked on phones);
 * "card" is the stacked form on the waitlist page.
 */
export default function WaitlistForm({ defaultType = "customer", variant = "inline" }: { defaultType?: UserType; variant?: "inline" | "card" }) {
  const uid = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<UserType>(defaultType);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // Hidden from people; bots fill it in.
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FormError | null>(null);
  const [done, setDone] = useState<null | { already: boolean }>(null);

  const isHotel = type === "hotel";
  const inline = variant === "inline";
  const errorId = `${uid}-error`;

  const showError = (e: FormError) => {
    setError(e);
    if (e.field === "name") nameRef.current?.focus();
    if (e.field === "email") emailRef.current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!name.trim()) return showError({ message: isHotel ? "Enter your hotel’s name." : "Enter your name.", field: "name" });
    if (!isValidEmail(email)) return showError({ message: "Enter a valid email address.", field: "email" });
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      return showError({ message: "You’re offline. Check your connection and try again." });
    }

    setLoading(true);
    setError(null);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), user_type: type, website }),
        signal: controller.signal,
      });
      // An error page from a proxy or the host isn't JSON; fall back to a message from the status.
      const data: { error?: unknown; field?: unknown; already?: unknown } = await res.json().catch(() => ({}));
      if (!res.ok) {
        const field = data.field === "name" || data.field === "email" ? data.field : undefined;
        showError({ message: messageFor(res.status, data.error), field });
        return;
      }
      setDone({ already: data.already === true });
    } catch (err) {
      const timedOut = err instanceof DOMException && err.name === "AbortError";
      showError({
        message: timedOut
          ? "That’s taking too long. Please try again in a moment."
          : "We couldn’t reach Andinoh. Check your connection and try again.",
      });
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div role="status" className={`animate-pop flex flex-col items-center gap-3 text-center ${inline ? "py-4" : "py-8"}`}>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success-bg text-success">
          <CheckCircle className="h-7 w-7" />
        </span>
        <p className="font-display text-2xl font-medium tracking-[-0.02em]">
          {done.already ? "You’re already on the list." : "You’re on the list."}
        </p>
        <p className="max-w-sm text-[15px] leading-relaxed text-sub">
          {isHotel
            ? "Thanks. We’ll email you about getting your hotel verified."
            : `We’ll email you the day bookings open. Your ${WAITLIST_OFFER.short.toLowerCase()} is linked to this email.`}
        </p>
        <button
          type="button"
          onClick={() => { setDone(null); setName(""); setEmail(""); }}
          className="mt-1 rounded-md text-[15px] font-medium text-accent hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          Add another email
        </button>
      </div>
    );
  }

  const segment = (value: UserType, label: string) => (
    <button
      type="button"
      role="radio"
      aria-checked={type === value}
      onClick={() => { setType(value); setError(null); }}
      className={`h-10 flex-1 whitespace-nowrap rounded-full px-3 text-[15px] transition-colors sm:px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${
        type === value ? "bg-seg-on font-medium text-seg-on-ink shadow-sm" : "text-muted hover:text-ink"
      } ${inline ? "sm:flex-none" : ""}`}
    >
      {label}
    </button>
  );

  // Props that tie an input to the error message when the message is about that input.
  const errorProps = (field: Field) =>
    error?.field === field ? { "aria-invalid": true as const, "aria-describedby": errorId } : {};
  // Editing the field an error is about clears the error.
  const clearIf = (field: Field) => { if (error && (error.field === field || !error.field)) setError(null); };

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={loading || undefined} className={`relative flex w-full flex-col gap-3 ${inline ? "items-center sm:gap-5" : ""}`}>
      <div role="radiogroup" aria-label="I’m joining as" className={`flex w-full rounded-full bg-seg-track p-1 ${inline ? "sm:w-auto" : "mb-1"}`}>
        {segment("customer", "Guest")}
        {segment("hotel", "Hotel partner")}
      </div>

      <div className={`flex w-full flex-col gap-3 ${inline ? "sm:max-w-[680px] sm:flex-row" : ""}`}>
        <label htmlFor={`${uid}-name`} className="sr-only">{isHotel ? "Hotel name" : "Your name"}</label>
        <input
          ref={nameRef}
          id={`${uid}-name`}
          type="text"
          autoComplete={isHotel ? "organization" : "name"}
          placeholder={isHotel ? "Hotel name" : "Your name"}
          value={name}
          maxLength={120}
          onChange={(e) => { setName(e.target.value); clearIf("name"); }}
          className={`${input} ${inline ? "sm:min-w-0 sm:flex-1" : ""}`}
          {...errorProps("name")}
        />
        <label htmlFor={`${uid}-email`} className="sr-only">Email</label>
        <input
          ref={emailRef}
          id={`${uid}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Email"
          value={email}
          maxLength={254}
          onChange={(e) => { setEmail(e.target.value); clearIf("email"); }}
          className={`${input} ${inline ? "sm:min-w-0 sm:flex-[1.3]" : ""}`}
          {...errorProps("email")}
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-medium text-white transition-colors hover:bg-brand-hover disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {loading && <Spinner className="h-5 w-5 animate-spin" />}
          {loading ? "Joining…" : inline ? (
            <>
              <span className="sm:hidden">Join the waitlist</span>
              <span className="hidden sm:inline">Join</span>
            </>
          ) : isHotel ? "Join as a hotel partner" : "Join the waitlist"}
        </button>
      </div>

      {/* Honeypot. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      {error && (
        <p id={errorId} role="alert" className="flex w-full items-start gap-2 rounded-2xl bg-danger-bg px-4 py-3 text-left text-sm text-danger sm:max-w-[680px]">
          <Danger className="mt-0.5 h-4 w-4 shrink-0" /> {error.message}
        </p>
      )}

      <p className="text-center text-[13px] text-muted">We only email you about the launch.</p>
    </form>
  );
}
