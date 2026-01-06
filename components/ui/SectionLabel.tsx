interface SectionLabelProps {
  /** Label text */
  children: string;
  /** Show animated ping effect on the dot */
  ping?: boolean;
  /** Center or left alignment */
  align?: "center" | "left";
}

/**
 * Small label with glowing dot indicator.
 * Used for section headers and labels.
 */
export function SectionLabel({
  children,
  ping = true,
  align = "center",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-2 mb-4 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="relative flex h-2 w-2">
        {ping && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6] shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6]" />
      </span>
      <span className="text-sm font-medium text-[#3b82f6] uppercase tracking-widest">
        {children}
      </span>
    </div>
  );
}

export default SectionLabel;




