import { Code2, Zap, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const techStack = [
  { name: "Next.js", color: "bg-white/10" },
  { name: "React", color: "bg-[#3b82f6]/10" },
  { name: "TypeScript", color: "bg-[#60a5fa]/10" },
  { name: "Tailwind CSS", color: "bg-[#3b82f6]/10" },
  { name: "Cloudflare", color: "bg-[#3b82f6]/10" },
  { name: "GitHub", color: "bg-white/10" },
];

const values = [
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
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Floating Decorative Dots */}
      <div className="absolute top-32 left-[10%] w-2 h-2 rounded-full bg-[#3b82f6]/60 animate-float-slow" />
      <div className="absolute top-48 right-[15%] w-3 h-3 rounded-full bg-[#60a5fa]/40 animate-float-medium" />
      <div className="absolute top-[40%] left-[5%] w-2 h-2 rounded-full bg-[#3b82f6]/50 animate-float-medium" />
      <div className="absolute top-[60%] right-[8%] w-2 h-2 rounded-full bg-[#60a5fa]/60 animate-float-slow" />
      <div className="absolute bottom-[30%] left-[12%] w-3 h-3 rounded-full bg-[#3b82f6]/40 animate-float-slow" />
      <div className="absolute bottom-[20%] right-[20%] w-2 h-2 rounded-full bg-[#60a5fa]/50 animate-float-medium" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-[#60a5fa]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/3 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="px-4 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <span className="text-sm uppercase tracking-widest text-[#3b82f6] font-medium">
              Get to Know Me
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building websites that help businesses succeed online.
          </p>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />
      </div>

      {/* Bio Section */}
      <section className="px-4 mb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up relative group">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6]/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer pointer-events-none" />

              <h2 className="text-3xl font-bold text-white">
                Hi, I&apos;m Jay Parrack
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
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

            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">JP</span>
                  </div>
                  <p className="text-gray-400">Web Developer & Designer</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3b82f6]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#60a5fa]/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#60a5fa]/50 to-transparent" />
      </div>

      {/* Tech Stack */}
      <section className="px-4 mb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse shadow-[0_0_8px_#60a5fa]" />
              <span className="text-sm uppercase tracking-widest text-[#60a5fa] font-medium">
                Technologies
              </span>
            </div>
            <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-gray-400">Modern tools for modern websites</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`px-5 py-3 ${tech.color} border border-white/10 rounded-full text-gray-200 font-medium hover:scale-105 hover:border-[#3b82f6]/50 hover:shadow-[0_0_20px_rgba(255,109,90,0.15)] transition-all duration-300`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />
      </div>

      {/* Values */}
      <section className="px-4 mb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse shadow-[0_0_8px_#3b82f6]" />
              <span className="text-sm uppercase tracking-widest text-[#3b82f6] font-medium">
                My Values
              </span>
            </div>
            <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                What I Believe In
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative p-6 sm:p-8 glass-card magnetic-hover h-full flex flex-col overflow-hidden"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3b82f6]/0 group-hover:border-[#3b82f6]/60 transition-all duration-500 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#60a5fa]/0 group-hover:border-[#60a5fa]/60 transition-all duration-500 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#60a5fa]/0 group-hover:border-[#60a5fa]/60 transition-all duration-500 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#3b82f6]/0 group-hover:border-[#3b82f6]/60 transition-all duration-500 rounded-br-xl" />

                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 text-[#3b82f6] flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(255,109,90,0.3)] transition-shadow duration-300">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-400 flex-grow relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#60a5fa]/50 to-transparent" />
      </div>

      {/* CTA */}
      <section className="px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative glass-card p-8 sm:p-12 overflow-hidden group">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#3b82f6]/0 group-hover:border-[#3b82f6]/60 transition-all duration-500 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#60a5fa]/0 group-hover:border-[#60a5fa]/60 transition-all duration-500 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#60a5fa]/0 group-hover:border-[#60a5fa]/60 transition-all duration-500 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#3b82f6]/0 group-hover:border-[#3b82f6]/60 transition-all duration-500 rounded-br-2xl" />

            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto relative z-10">
              Ready to discuss your project? I&apos;d love to hear about what
              you&apos;re building.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#2563eb] text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,109,90,0.3)] hover:shadow-[0_0_30px_rgba(255,109,90,0.5)] relative z-10"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




