"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Theme = "glass" | "doors" | "stack" | "orbit" | "reveal" | "magic";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("glass");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("studio-theme") as Theme | null;
    if (savedTheme && ["glass", "doors", "stack", "orbit", "reveal", "magic"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("studio-theme", theme);
    }
  }, [theme, mounted]);

  // Don't render children until theme is loaded from localStorage
  // This prevents flash of wrong theme color
  if (!mounted) {
    // Return a minimal dark placeholder to prevent white flash
    return (
      <div className="min-h-screen bg-slate-900" />
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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

// Theme styling helpers
export const themeBackgrounds: Record<Theme, string> = {
  glass: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
  doors: "bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900",
  stack: "bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950",
  orbit: "bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950",
  reveal: "bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950",
  magic: "bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950",
};

export const themeAccentColors: Record<Theme, { primary: string; secondary: string; border: string }> = {
  glass: { primary: "#94a3b8", secondary: "#64748b", border: "rgba(255,255,255,0.1)" },
  doors: { primary: "#fbbf24", secondary: "#f59e0b", border: "rgba(251,191,36,0.3)" },
  stack: { primary: "#8b5cf6", secondary: "#06b6d4", border: "rgba(139,92,246,0.3)" },
  orbit: { primary: "#a78bfa", secondary: "#ec4899", border: "rgba(167,139,250,0.3)" },
  reveal: { primary: "#2dd4bf", secondary: "#14b8a6", border: "rgba(45,212,191,0.3)" },
  magic: { primary: "#c084fc", secondary: "#a855f7", border: "rgba(192,132,252,0.3)" },
};
