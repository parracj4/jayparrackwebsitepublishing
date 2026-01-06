import { ReactNode } from "react";

interface Dot {
  position: string;
  size: string;
  color: "orange" | "purple" | "white";
  speed: "slow" | "medium";
  opacity?: number;
}

interface FloatingDotsProps {
  /** Array of dot configurations */
  dots?: Dot[];
  /** Use a preset configuration */
  preset?: "hero" | "section" | "sparse";
  /** Children to render within the dots container */
  children?: ReactNode;
}

const colorClasses = {
  orange: "bg-[#3b82f6]",
  purple: "bg-[#60a5fa]",
  white: "bg-white",
};

const speedClasses = {
  slow: "float-slow",
  medium: "float-medium",
};

const presets: Record<string, Dot[]> = {
  hero: [
    { position: "top-40 right-20", size: "w-2 h-2", color: "orange", speed: "slow", opacity: 60 },
    { position: "top-60 right-40", size: "w-1 h-1", color: "purple", speed: "medium", opacity: 40 },
    { position: "bottom-40 left-40", size: "w-1.5 h-1.5", color: "orange", speed: "medium", opacity: 50 },
    { position: "top-1/2 right-1/4", size: "w-1 h-1", color: "white", speed: "slow", opacity: 30 },
  ],
  section: [
    { position: "top-20 right-32", size: "w-1 h-1", color: "purple", speed: "slow", opacity: 40 },
    { position: "bottom-32 right-20", size: "w-1.5 h-1.5", color: "orange", speed: "medium", opacity: 50 },
  ],
  sparse: [
    { position: "top-32 left-[10%]", size: "w-2 h-2", color: "orange", speed: "slow", opacity: 40 },
    { position: "top-64 right-[15%]", size: "w-3 h-3", color: "purple", speed: "medium", opacity: 30 },
    { position: "bottom-48 right-[20%]", size: "w-2 h-2", color: "purple", speed: "slow", opacity: 50 },
  ],
};

/**
 * Decorative floating dots for background ambiance.
 * Use presets for common patterns or customize with the dots prop.
 */
export function FloatingDots({ dots, preset, children }: FloatingDotsProps) {
  const dotsToRender = dots || (preset ? presets[preset] : presets.section);

  return (
    <>
      {dotsToRender.map((dot, index) => (
        <div
          key={index}
          className={`absolute ${dot.position} ${dot.size} rounded-full ${colorClasses[dot.color]} ${speedClasses[dot.speed]}`}
          style={{ opacity: (dot.opacity ?? 50) / 100 }}
        />
      ))}
      {children}
    </>
  );
}

export default FloatingDots;




