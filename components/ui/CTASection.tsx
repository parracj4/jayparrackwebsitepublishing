import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  /** Small label above the heading */
  label?: string;
  /** Main heading text */
  heading: string;
  /** Optional second line with gradient */
  headingAccent?: string;
  /** Description text */
  description?: string;
  /** Button text */
  buttonText: string;
  /** Button link */
  href: string;
  /** Additional content */
  children?: ReactNode;
}

/**
 * Call-to-action section with ambient glow and shimmer effects.
 * Used at the end of pages to drive user action.
 */
export function CTASection({
  label,
  heading,
  headingAccent,
  description,
  buttonText,
  href,
  children,
}: CTASectionProps) {
  return (
    <section className="px-4 md:px-6 py-16 relative">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-1 h-1 rounded-full bg-[#3b82f6] float-slow opacity-40" />
      <div className="absolute bottom-20 right-32 w-1.5 h-1.5 rounded-full bg-[#60a5fa] float-medium opacity-50" />

      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3b82f6]/10 via-[#60a5fa]/10 to-[#3b82f6]/10 border border-white/10 p-8 sm:p-12 text-center group">
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer" />

          {/* Inner glow orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3b82f6]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#60a5fa]/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            {label && (
              <span className="text-xs uppercase tracking-[0.4em] text-[#a8b5c4] mb-4 block">
                {label}
              </span>
            )}

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4">
              <span className="block text-white">{heading}</span>
              {headingAccent && (
                <span className="block bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {headingAccent}
                </span>
              )}
            </h2>

            {description && (
              <p className="text-[#a8b5c4] mb-8 max-w-xl mx-auto">{description}</p>
            )}

            {children}

            <Link
              href={href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-black font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(255,109,90,0.3)] hover:shadow-[0_0_40px_rgba(255,109,90,0.5)] hover:scale-105"
            >
              {buttonText}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;




