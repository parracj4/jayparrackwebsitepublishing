"use client";

import {
  MessageSquare,
  Palette,
  Code,
  Eye,
  Rocket,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start with a conversation about your business, goals, and vision for your website. I'll ask questions to understand exactly what you need.",
    details: [
      "30-minute video or phone call",
      "Discuss your target audience",
      "Share 2-3 websites you like for inspiration",
      "Define project scope and goals",
    ],
  },
  {
    icon: Palette,
    title: "Design Direction",
    description:
      "Based on the websites you love and our discussion, I'll establish the design direction—colors, layout style, and overall feel—before building.",
    details: [
      "Review your inspiration sites",
      "Define color palette and typography",
      "Discuss layout preferences",
      "Align on the visual direction",
    ],
  },
  {
    icon: Code,
    title: "Rapid Development",
    description:
      "Using AI-assisted development, I build your website quickly without sacrificing quality. Expect a rough draft within days, not weeks.",
    details: [
      "Custom Next.js development",
      "Rough draft typically in 3 business days",
      "Responsive mobile-first design",
      "Regular progress updates",
    ],
  },
  {
    icon: Eye,
    title: "Review & Revisions",
    description:
      "You review the site on a staging URL and provide feedback. I make revisions until you're completely satisfied with the result.",
    details: [
      "Private staging link",
      "Detailed feedback rounds",
      "Quick turnaround on changes",
      "Final approval before launch",
    ],
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Your site goes live! I handle the technical deployment to Cloudflare, set up your domain, and ensure everything runs smoothly.",
    details: [
      "Cloudflare deployment",
      "Domain configuration",
      "SSL certificate setup",
      "Performance verification",
    ],
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "After launch, I'm here to help with updates, questions, or any issues. Your success is my priority.",
    details: [
      "Post-launch support period",
      "Content update assistance",
      "Performance monitoring",
      "Future enhancement planning",
    ],
  },
];

export default function ProcessPage() {
  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Our Process</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">How It Works</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              A clear, collaborative process from first conversation to launch.
              No surprises, just great results.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical connecting line - centered */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/20 hidden sm:block" />

              <div className="space-y-8 md:space-y-12">
                {STEPS.map((step, index) => {
                  const isEven = index % 2 === 0;
                  const CardContent = (
                    <div className="glass-card rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-4">{step.description}</p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-white/70 text-sm"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-white/50 flex-shrink-0"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );

                  return (
                    <div
                      key={step.title}
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                        isEven ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Card side */}
                      <div className="hidden md:block md:w-[calc(50%-40px)]">
                        {CardContent}
                      </div>

                      {/* Center - Icon on timeline */}
                      <div className="flex-shrink-0 w-20 flex justify-center relative z-10">
                        <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/20 text-white/70">
                          <step.icon size={24} />
                          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-xs font-bold text-white">
                            {index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Empty spacer side (desktop) + Mobile card */}
                      <div className="md:w-[calc(50%-40px)]">
                        {/* Mobile: always show card */}
                        <div className="md:hidden">
                          {CardContent}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Start?
              </h2>
              <p className="text-white/50 mb-6 max-w-xl mx-auto">
                Let&apos;s schedule a discovery call and discuss how I can help
                bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Schedule Your Call
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
