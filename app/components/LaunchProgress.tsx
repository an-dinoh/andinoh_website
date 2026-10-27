import { LAUNCH_PROGRESS } from "@/app/content/site";

/** The launch bar. The number lives in app/content/site.ts. */
export default function LaunchProgress({ className = "" }: { className?: string }) {
  const pct = Math.max(0, Math.min(100, LAUNCH_PROGRESS));
  return (
    <div className={`w-full ${className}`}>
      <div className="mb-2.5 flex justify-between text-sm text-muted">
        <span>Launch progress</span>
        <span className="tabular font-medium text-ink">{pct}%</span>
      </div>
      <div role="progressbar" aria-label="Launch progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} className="h-1 rounded-full bg-track">
        <div className="h-1 rounded-full bg-gold" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
