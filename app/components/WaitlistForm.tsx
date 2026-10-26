"use client";

import { useId, useState } from "react";
import { ArrowRight, CheckCircle, Danger, Lock } from "@/app/components/icons";
import { Button } from "@/app/components/ui";
import { WAITLIST_OFFER } from "@/app/content/site";

type UserType = "customer" | "hotel";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const inputClass =
  "h-11 w-full rounded-xl border border-line-strong bg-surface px-3.5 text-sm text-ink placeholder:text-subtle transition-colors " +
  "focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10";

export default function WaitlistForm({ defaultType = "customer" }: { defaultType?: UserType }) {
  const uid = useId();
  const [type, setType] = useState<UserType>(defaultType);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // Hidden from people; bots fill it in.
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<null | { already: boolean }>(null);

  const isHotel = type === "hotel";
  const canSubmit = name.trim() !== "" && isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), user_type: type, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "We couldn’t add you just now. Please try again.");
        return;
      }
      setDone({ already: Boolean(data.already) });
    } catch {
      setError("We couldn’t reach Andinoh. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="animate-pop flex flex-col items-center gap-3 py-6 text-center" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-success-50 text-success">
          <CheckCircle className="h-7 w-7" />
        </span>
        <h3 className="text-lg font-semibold text-ink">{done.already ? "You’re already on the list" : "You’re on the list"}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          {isHotel
            ? "Thanks. Our partnerships team will email you about getting your hotel verified before launch."
            : `We’ll email you the moment Andinoh opens. Your ${WAITLIST_OFFER.headline.toLowerCase()} is linked to this email.`}
        </p>
        <Button variant="ghost" size="sm" onClick={() => { setDone(null); setName(""); setEmail(""); }}>
          Add another email
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div role="radiogroup" aria-label="I’m joining as" className="grid grid-cols-2 gap-1 rounded-xl bg-surface-2 p-1 ring-1 ring-inset ring-line">
        {([
          ["customer", "Guest"],
          ["hotel", "Hotel partner"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={type === value}
            onClick={() => setType(value)}
            className={`h-9 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
              type === value ? "bg-raised text-ink shadow-sm" : "text-muted hover:text-ink-2"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-name`} className="text-[13px] font-medium text-ink-2">
          {isHotel ? "Hotel name" : "Your name"}
        </label>
        <input
          id={`${uid}-name`}
          type="text"
          autoComplete={isHotel ? "organization" : "name"}
          placeholder={isHotel ? "e.g. Lagoon View Suites" : "e.g. Ada Okafor"}
          value={name}
          maxLength={120}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-email`} className="text-[13px] font-medium text-ink-2">
          {isHotel ? "Work email" : "Email"}
        </label>
        <input
          id={`${uid}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          maxLength={254}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      {error && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-danger-50 px-3 py-2.5 text-sm text-danger-fg ring-1 ring-inset ring-danger-ring">
          <Danger className="mt-0.5 h-4 w-4 shrink-0" /> {error}
        </p>
      )}

      <Button type="submit" size="lg" fullWidth loading={loading} disabled={!canSubmit} iconRight={ArrowRight}>
        {loading ? "Joining…" : isHotel ? "Join as a hotel partner" : "Join the waitlist"}
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted">
        <Lock className="h-3.5 w-3.5" /> We only email you about Andinoh’s launch. No spam.
      </p>
    </form>
  );
}
