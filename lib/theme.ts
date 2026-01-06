/**
 * Theme Configuration
 *
 * Central source of truth for all colors, shadows, and design tokens.
 * MODERN SLATE + ELECTRIC BLUE - Clean, professional, readable
 */

export const theme = {
  colors: {
    // Primary palette - Electric Blue
    accent: "#3b82f6",
    accentHover: "#2563eb",
    accentLight: "#60a5fa",
    secondary: "#1d4ed8",
    secondaryLight: "#93c5fd",

    // Backgrounds - Modern Slate
    bg: "#0f1419",
    bgElevated: "#1a1f26",
    bgCard: "#242b33",

    // Text
    text: "#f1f5f9",
    textMuted: "#a8b5c4",
    textSubtle: "#64748b",

    // Borders
    border: "rgba(148, 163, 184, 0.15)",
    borderHover: "rgba(148, 163, 184, 0.25)",
  },

  // Box shadows
  shadows: {
    glowBlue: "0 0 60px rgba(59, 130, 246, 0.3)",
    glowBlueStrong: "0 0 40px rgba(59, 130, 246, 0.5)",
    glowDot: "0 0 12px #3b82f6, 0 0 24px #3b82f6",
  },

  // Gradients
  gradients: {
    text: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
    textAnimated: "linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6)",
    divider: "linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.2), transparent)",
  },
} as const;

// Tailwind class helpers for consistent styling
export const tw = {
  // Accent colors with Tailwind arbitrary values
  accent: "bg-[#3b82f6]",
  accentHover: "hover:bg-[#2563eb]",
  accentText: "text-[#3b82f6]",
  secondary: "bg-[#60a5fa]",
  secondaryText: "text-[#60a5fa]",

  // Background colors
  bg: "bg-[#0f1419]",
  bgCard: "bg-[#242b33]",

  // Text colors
  textMuted: "text-[#a8b5c4]",

  // Common patterns
  gradientText: "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent",
  gradientTextVia: "bg-gradient-to-r from-[#3b82f6] via-[#93c5fd] to-[#3b82f6] bg-clip-text text-transparent",

  // Glow effects
  glowBlue: "shadow-[0_0_40px_rgba(59,130,246,0.3)]",
  glowBlueStrong: "shadow-[0_0_40px_rgba(59,130,246,0.5)]",
  glowDot: "shadow-[0_0_12px_#3b82f6,0_0_24px_#3b82f6]",

  // Border colors
  borderAccent: "border-[#3b82f6]",
  borderAccentFaint: "border-[#3b82f6]/30",
} as const;

// Animation delay classes
export const animationDelays = [100, 200, 300, 400, 500, 600, 800, 1000] as const;
