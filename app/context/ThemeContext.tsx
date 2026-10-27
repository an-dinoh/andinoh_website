"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Same behaviour as the hotel and admin apps: light, dark or the system's setting, saved per browser.
export type ThemePreference = "light" | "dark" | "system";
export type Theme = "light" | "dark";

export const THEME_KEY = "andinoh-site:theme";

/**
 * Runs in <head> before the first paint so a saved dark theme never flashes white.
 * Kept as a string because it runs before React loads.
 */
// It also marks <html class="js">, so scroll animations only hide content when JavaScript is running.
export const THEME_BOOT_SCRIPT = `(function(){document.documentElement.classList.add('js');try{var p=localStorage.getItem('${THEME_KEY}');var d=p==='dark'||((!p||p==='system')&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();`;

interface ThemeContextType {
  /** What's showing (the device's choice when preference is "system"). */
  theme: Theme;
  /** What the visitor chose; "system" (the default) follows the device. */
  preference: ThemePreference;
  setPreference: (p: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "light", preference: "system", setPreference: () => {} });

function readPreference(): ThemePreference {
  try {
    const p = localStorage.getItem(THEME_KEY);
    return p === "light" || p === "dark" ? p : "system";
  } catch { return "system"; }
}

const systemTheme = (): Theme =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPref] = useState<ThemePreference>("system");
  const [system, setSystem] = useState<Theme>("light");
  // False until the saved preference is read. Until then the head script's theme stands; writing the
  // default "light" on the first pass would flash dark pages white for a frame.
  const [ready, setReady] = useState(false);

  // Browser-only state: read once mounted (the head script has already applied it to the page).
  useEffect(() => {
    setPref(readPreference()); // eslint-disable-line react-hooks/set-state-in-effect
    setSystem(systemTheme());
    setReady(true);
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    const onChange = () => setSystem(mq.matches ? "dark" : "light");
    mq?.addEventListener?.("change", onChange);
    return () => mq?.removeEventListener?.("change", onChange);
  }, []);

  const theme: Theme = preference === "system" ? system : preference;

  useEffect(() => {
    if (ready) document.documentElement.setAttribute("data-theme", theme);
  }, [ready, theme]);

  const setPreference = useCallback((p: ThemePreference) => {
    setPref(p);
    try {
      if (p === "system") localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, p);
    } catch { /* private mode */ }
  }, []);

  return <ThemeContext.Provider value={{ theme, preference, setPreference }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
