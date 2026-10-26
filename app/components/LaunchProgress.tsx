import { LAUNCH_PROGRESS } from "@/app/content/site";

/** The launch bar, for the deep blue band. The number lives in app/content/site.ts. */
export default function LaunchProgress() {
  const pct = Math.max(0, Math.min(100, LAUNCH_PROGRESS));
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-medium text-white/80">Launch progress</p>
        <p className="tabular font-display text-3xl font-semibold text-white">{pct}%</p>
      </div>
      <div
        role="progressbar"
        aria-label="Launch progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        className="h-3 w-full overflow-hidden rounded-full bg-white/15"
      >
        <div className="h-full rounded-full bg-secondary" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-sm text-white/70">Loading… Andinoh is coming soon.</p>
    </div>
  );
}
