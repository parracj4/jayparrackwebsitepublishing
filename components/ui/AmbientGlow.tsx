interface GlowOrb {
  position: string;
  size: string;
  color: "orange" | "purple";
  blur?: string;
}

interface AmbientGlowProps {
  /** Array of glow orb configurations */
  orbs?: GlowOrb[];
  /** Use a preset configuration */
  preset?: "hero" | "section" | "centered" | "diagonal";
}

const colorClasses = {
  orange: "bg-[#3b82f6]/10",
  purple: "bg-[#60a5fa]/10",
};

const presets: Record<string, GlowOrb[]> = {
  hero: [
    { position: "top-1/4 left-1/4", size: "w-[500px] h-[500px]", color: "orange", blur: "blur-[150px]" },
    { position: "bottom-1/4 right-1/4", size: "w-[400px] h-[400px]", color: "purple", blur: "blur-[150px]" },
  ],
  section: [
    { position: "top-1/2 left-0 -translate-y-1/2", size: "w-[500px] h-[500px]", color: "purple", blur: "blur-[150px]" },
  ],
  centered: [
    { position: "top-0 left-1/2 -translate-x-1/2", size: "w-[600px] h-[300px]", color: "orange", blur: "blur-[150px]" },
  ],
  diagonal: [
    { position: "top-1/4 left-1/4", size: "w-96 h-96", color: "orange", blur: "blur-[100px]" },
    { position: "bottom-1/4 right-1/4", size: "w-80 h-80", color: "purple", blur: "blur-[100px]" },
  ],
};

/**
 * Background ambient glow orbs for depth and atmosphere.
 * Use presets for common patterns or customize with the orbs prop.
 */
export function AmbientGlow({ orbs, preset = "section" }: AmbientGlowProps) {
  const orbsToRender = orbs || presets[preset];

  return (
    <>
      {orbsToRender.map((orb, index) => (
        <div
          key={index}
          className={`absolute ${orb.position} ${orb.size} ${colorClasses[orb.color]} rounded-full ${orb.blur || "blur-[150px]"} pointer-events-none`}
        />
      ))}
    </>
  );
}

export default AmbientGlow;




