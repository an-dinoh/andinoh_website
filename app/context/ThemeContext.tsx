"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type PrimaryColor = "#0F75BD" | "#0050C8" | "#002968";

interface ThemeContextType {
  primaryColor: PrimaryColor;
  setPrimaryColor: (color: PrimaryColor) => void;
  cyclePrimaryColor: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState<PrimaryColor>("#0F75BD");

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", primaryColor);
  }, [primaryColor]);

  const cyclePrimaryColor = () => {
    if (primaryColor === "#0F75BD") setPrimaryColor("#0050C8");
    else if (primaryColor === "#0050C8") setPrimaryColor("#002968");
    else setPrimaryColor("#0F75BD");
  };

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor, cyclePrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
