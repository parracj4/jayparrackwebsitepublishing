interface GradientDividerProps {
  /** Maximum width class (default: max-w-4xl) */
  maxWidth?: string;
  /** Additional margin classes */
  className?: string;
}

/**
 * Horizontal gradient divider line.
 * Provides consistent visual separation between sections.
 */
export function GradientDivider({
  maxWidth = "max-w-4xl",
  className = "",
}: GradientDividerProps) {
  return (
    <div
      className={`${maxWidth} mx-auto h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent ${className}`}
    />
  );
}

export default GradientDivider;




