import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Show corner accents that glow on hover */
  cornerAccents?: boolean;
  /** Show shimmer effect */
  shimmer?: boolean;
  /** Show bottom glow line on hover */
  glowLine?: boolean;
  /** Padding size */
  padding?: "sm" | "md" | "lg";
  /** Enable magnetic hover effect */
  magnetic?: boolean;
  /** HTML element to render as */
  as?: "div" | "article" | "section";
}

/**
 * Glassmorphic card component with optional effects.
 * Provides consistent card styling across the site.
 */
export function GlassCard({
  children,
  className = "",
  cornerAccents = false,
  shimmer = false,
  glowLine = false,
  padding = "md",
  magnetic = true,
  as: Component = "div",
}: GlassCardProps) {
  const paddingClass = {
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-12",
  }[padding];

  return (
    <Component
      className={`
        glass-card rounded-xl relative overflow-hidden group
        ${magnetic ? "magnetic-hover" : ""}
        ${paddingClass}
        ${className}
      `}
    >
      {/* Shimmer overlay */}
      {shimmer && <div className="absolute inset-0 shimmer pointer-events-none" />}

      {/* Corner accents */}
      {cornerAccents && (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3b82f6]/30 rounded-tl-xl group-hover:border-[#3b82f6]/60 transition-colors duration-300" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#60a5fa]/30 rounded-tr-xl group-hover:border-[#60a5fa]/60 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#60a5fa]/30 rounded-bl-xl group-hover:border-[#60a5fa]/60 transition-colors duration-300" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#3b82f6]/30 rounded-br-xl group-hover:border-[#3b82f6]/60 transition-colors duration-300" />
        </>
      )}

      {/* Bottom glow line */}
      {glowLine && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}

export default GlassCard;




