import { ReactNode } from "react";

interface PageHeaderProps {
  /** Small label text above the title (e.g., "Portfolio", "Contact") */
  label: string;
  /** Main page title - can include gradient text using the title/titleAccent split */
  title: string;
  /** Optional accent part of title that gets gradient styling */
  titleAccent?: string;
  /** Optional description text below the title */
  description?: string;
  /** Center align (default) or left align */
  align?: "center" | "left";
  /** Optional children for custom content below description */
  children?: ReactNode;
}

/**
 * Consistent page header component with glow dot, gradient title, and divider.
 * Used across all pages for a unified look.
 */
export function PageHeader({
  label,
  title,
  titleAccent,
  description,
  align = "center",
  children,
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const labelAlignClass = align === "center" ? "justify-center" : "justify-start";

  return (
    <section className="px-4 md:px-6 mb-16 relative">
      {/* Ambient glow orb */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#60a5fa]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className={`max-w-4xl ${alignClass} animate-fade-in relative`}>
        {/* Section label with glow dot */}
        <div className={`flex items-center gap-2 mb-4 ${labelAlignClass}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]" />
          </span>
          <span className="text-sm font-medium text-[#3b82f6] uppercase tracking-widest">
            {label}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          {titleAccent ? (
            <>
              <span className="text-white">{title} </span>
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </>
          ) : (
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
              {title}
            </span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{description}</p>
        )}

        {children}
      </div>

      {/* Gradient divider */}
      <div className="max-w-md mx-auto mt-10 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />
    </section>
  );
}

export default PageHeader;




