"use client";

import { useState } from "react";
import { Palette } from "lucide-react";

export type ThemeId = "minimal" | "bold" | "warm" | "tech" | "playful";

interface Theme {
  id: ThemeId;
  name: string;
  preview: string; // color for the preview dot
}

const themes: Theme[] = [
  { id: "minimal", name: "Minimal Luxury", preview: "#1a1a1a" },
  { id: "bold", name: "Bold & Dark", preview: "#0a0a0a" },
  { id: "warm", name: "Warm & Organic", preview: "#8b5a2b" },
  { id: "tech", name: "Tech Future", preview: "#0066ff" },
  { id: "playful", name: "Creative Pop", preview: "#ff3366" },
];

interface ThemeSwitcherProps {
  currentTheme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme selector panel */}
      <div
        className={`absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 border-b border-gray-100">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
            Sample My Work
          </p>
        </div>
        <div className="p-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                onThemeChange(theme.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                currentTheme === theme.id
                  ? "bg-gray-100"
                  : "hover:bg-gray-50"
              }`}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: theme.preview }}
              />
              <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                {theme.name}
              </span>
              {currentTheme === theme.id && (
                <div className="ml-auto w-2 h-2 rounded-full bg-green-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-gray-900 text-white rotate-180"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Palette size={22} />
      </button>
    </div>
  );
}
