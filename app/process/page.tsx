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

const steps = [
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
    color: "orange",
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
    color: "purple",
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
    color: "orange",
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
    color: "purple",
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
    color: "orange",
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
    color: "purple",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Floating decorative dots */}
      <div className="absolute top-32 left-[10%] w-2 h-2 rounded-full bg-[#3b82f6]/40 animate-float-slow" />
      <div className="absolute top-64 right-[15%] w-3 h-3 rounded-full bg-[#60a5fa]/30 animate-float-medium" />
      <div className="absolute top-[40%] left-[5%] w-2 h-2 rounded-full bg-[#3b82f6]/50 animate-float-medium" />
      <div className="absolute top-[60%] right-[8%] w-2 h-2 rounded-full bg-[#60a5fa]/40 animate-float-slow" />
      <div className="absolute bottom-[30%] left-[12%] w-3 h-3 rounded-full bg-[#3b82f6]/30 animate-float-medium" />
      <div className="absolute bottom-48 right-[20%] w-2 h-2 rounded-full bg-[#60a5fa]/50 animate-float-slow" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#60a5fa]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Section label with glow dot */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6]" />
            <span className="text-[#3b82f6] text-sm font-medium tracking-wider uppercase">
              Our Process
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6">
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
              How It Works
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A clear, collaborative process from first conversation to launch.
            No surprises, just great results.
          </p>
          {/* Gradient divider */}
          <div className="mt-8 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent" />
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line with gradient */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] hidden sm:block" />

            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step number and icon with connecting dot */}
                  <div className="flex-shrink-0 md:w-1/2 flex md:justify-center">
                    {/* Dot on the connecting line */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#3b82f6] border-2 border-black shadow-[0_0_10px_#3b82f6] hidden sm:block z-20" />
                    <div
                      className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl transition-transform hover:scale-110 magnetic-hover ${
                        step.color === "orange"
                          ? "bg-[#3b82f6]/20 text-[#3b82f6]"
                          : "bg-[#60a5fa]/20 text-[#60a5fa]"
                      }`}
                    >
                      <step.icon size={28} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-black border border-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content - Glass card with corner accents */}
                  <div className="md:w-1/2">
                    <div className="glass-card magnetic-hover group relative rounded-2xl p-6 sm:p-8 hover:-translate-y-1 transition-all">
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3b82f6]/30 rounded-tl-2xl group-hover:border-[#3b82f6]/60 group-hover:shadow-[0_0_15px_rgba(255,109,90,0.3)] transition-all" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#3b82f6]/30 rounded-tr-2xl group-hover:border-[#3b82f6]/60 group-hover:shadow-[0_0_15px_rgba(255,109,90,0.3)] transition-all" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#3b82f6]/30 rounded-bl-2xl group-hover:border-[#3b82f6]/60 group-hover:shadow-[0_0_15px_rgba(255,109,90,0.3)] transition-all" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#3b82f6]/30 rounded-br-2xl group-hover:border-[#3b82f6]/60 group-hover:shadow-[0_0_15px_rgba(255,109,90,0.3)] transition-all" />

                      <h3 className="text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-gray-300"
                          >
                            <CheckCircle2
                              size={16}
                              className={
                                step.color === "orange"
                                  ? "text-[#3b82f6]"
                                  : "text-[#60a5fa]"
                              }
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gradient divider before CTA */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />
      </div>

      {/* CTA with shimmer effect */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3b82f6]/10 via-[#60a5fa]/10 to-[#3b82f6]/10 border border-white/10 p-8 sm:p-12 text-center group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3b82f6]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#60a5fa]/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Let&apos;s schedule a discovery call and discuss how I can help
                bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-black font-semibold rounded-xl transition-colors shadow-[0_0_20px_rgba(255,109,90,0.3)] hover:shadow-[0_0_30px_rgba(255,109,90,0.5)]"
              >
                Schedule Your Call
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




