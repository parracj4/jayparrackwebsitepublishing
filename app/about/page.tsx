"use client";

import { Code2, Zap, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

const TECH_STACK = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Cloudflare" },
  { name: "GitHub" },
];

const VALUES = [
  {
    icon: Code2,
    title: "Quality Code",
    description:
      "Clean, maintainable code that's built to last. No shortcuts, no technical debt.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Every site is optimized for speed. Fast loading means better user experience and SEO.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    description:
      "You'll always know what's happening with your project. No jargon, no surprises.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description:
      "Your success is my success. I'm invested in making sure your website works for you.",
  },
];

export default function AboutPage() {
  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Get to Know Me</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">About Me</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Building websites that help businesses succeed online.
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  Hi, I&apos;m Jay Parrack
                </h2>
                <div className="space-y-4 text-white/70 text-lg">
                  <p>
                    I build websites for small businesses and entrepreneurs who want
                    a professional online presence without the hassle of dealing
                    with big agencies or complicated DIY tools.
                  </p>
                  <p>
                    Every website I create is custom-built using modern technology.
                    No templates, no page builders—just clean, efficient code that
                    makes your site fast and reliable.
                  </p>
                  <p>
                    My process is straightforward: we talk about what you need, I
                    build it, you review it, and we launch. Clear communication
                    every step of the way.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">JP</span>
                    </div>
                    <p className="text-white/50">Web Developer & Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Technologies</p>
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <p className="text-white/50">Modern tools for modern websites</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech.name}
                  className="px-5 py-3 bg-white/5 border border-white/10 rounded-full text-white/70 font-medium hover:bg-white/10 transition-colors"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">My Values</p>
              <h2 className="text-3xl font-bold mb-4">What I Believe In</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="p-6 sm:p-8 glass-card h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white/70 flex-shrink-0">
                      <value.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-white/50 flex-grow">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-white/50 mb-6 max-w-xl mx-auto">
                Ready to discuss your project? I&apos;d love to hear about what
                you&apos;re building.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
