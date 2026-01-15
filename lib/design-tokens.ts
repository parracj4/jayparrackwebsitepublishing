/**
 * Design Tokens - Central source of truth for all design values
 * Used for consistent theming across components and pages
 */

export const colors = {
  // Core backgrounds
  bg: {
    primary: '#0a0a0a',
    secondary: '#111111',
    tertiary: '#1a1a1a',
  },

  // Accent - Neon Orange/Red
  accent: {
    primary: '#ff4d00',
    secondary: '#ff6b35',
    tertiary: '#ff8c5a',
    glow: 'rgba(255, 77, 0, 0.4)',
    subtle: 'rgba(255, 77, 0, 0.1)',
  },

  // Text
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.8)',
    muted: 'rgba(255, 255, 255, 0.6)',
    subtle: 'rgba(255, 255, 255, 0.4)',
  },

  // Glass effects
  glass: {
    bg: 'rgba(255, 255, 255, 0.03)',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.12)',
    highlight: 'rgba(255, 255, 255, 0.05)',
  },
} as const;

export const spacing = {
  section: {
    mobile: '4rem',    // py-16
    desktop: '6rem',   // py-24
  },
  container: {
    padding: '1.5rem', // px-6
    maxWidth: '1200px',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  },
} as const;

export const effects = {
  blur: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    full: '9999px',
  },
  transition: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '400ms ease',
  },
} as const;
