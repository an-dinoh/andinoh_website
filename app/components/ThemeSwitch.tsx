"use client";

import { Monitor, Moon, Sun, type Icon } from "@/app/components/icons";
import { useTheme, type ThemePreference } from "@/app/context/ThemeContext";

const OPTIONS: { value: ThemePreference; label: string; icon: Icon }[] = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

/** The footer's theme choice. "System" (the default) follows the visitor's device setting. */
export default function ThemeSwitch() {
  const { preference, setPreference } = useTheme();
  return (
    <div role="radiogroup" aria-label="Theme" className="inline-flex w-fit rounded-full border border-line bg-bg p-1">
      {OPTIONS.map(({ value, label, icon: Ico }) => {
        const on = preference === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => setPreference(value)}
            className={`inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${
              on ? "bg-seg-on font-medium text-seg-on-ink shadow-sm ring-1 ring-line" : "text-muted hover:text-ink"
            }`}
          >
            <Ico className="h-4 w-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
