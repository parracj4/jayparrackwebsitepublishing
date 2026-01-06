import { ArrowRight, Zap, Shield, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#0f1419] text-white overflow-hidden">
      {/* ============================================
          HERO - MASSIVE TYPOGRAPHY + n8n GLOW
          ============================================ */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-12 relative">
        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#60a5fa]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Floating decorative elements */}
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-[#3b82f6] float-slow opacity-60" />
        <div className="absolute top-60 right-40 w-1 h-1 rounded-full bg-[#60a5fa] float-medium opacity-40" />
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 rounded-full bg-[#3b82f6] float-medium opacity-50" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-white float-slow opacity-30" />

        {/* Vertical accent line with glow dot */}
        <div className="absolute top-28 left-6 md:left-12 lg:left-20 flex flex-col items-center gap-2">
          <div className="glow-dot" />
          <div className="w-px h-20 bg-gradient-to-b from-[#3b82f6] to-transparent" />
        </div>

        {/* Small intro */}
        <div className="mb-6 ml-8 md:ml-12 animate-fade-in">
          <span className="text-sm uppercase tracking-[0.3em] text-[#a8b5c4] font-medium">
            Web Development Studio
          </span>
        </div>

        {/* Main headline */}
        <div className="relative">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight uppercase">
            <span className="block text-white animate-slide-in text-glow-blue">Build</span>
            <span className="block animated-gradient-text animate-slide-in animation-delay-100">Different</span>
          </h1>

          {/* Horizontal accent */}
          <div className="absolute -right-6 md:-right-12 top-1/2 w-20 md:w-40 h-px bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] animate-line-grow animation-delay-300" />
        </div>

        {/* Subtext */}
        <div className="mt-8 ml-auto mr-6 md:mr-20 max-w-md text-right animate-fade-in animation-delay-400">
          <p className="text-lg md:text-xl text-[#a8b5c4] leading-relaxed">
            Custom websites. No templates.
            <span className="text-white"> Built to convert.</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3 animate-fade-in animation-delay-600">
          <Link
            href="/contact"
            className="btn-accent inline-flex items-center gap-3 px-7 py-3.5 text-sm uppercase tracking-[0.15em] rounded-lg gradient-border"
          >
            Start Project
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="btn-ghost inline-flex items-center gap-3 px-7 py-3.5 text-sm uppercase tracking-[0.15em] rounded-lg magnetic-hover"
          >
            View Work
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Scroll indicator with pulse */}
        <div className="absolute bottom-8 right-6 md:right-12 flex items-center gap-3 text-[#a8b5c4]/50">
          <span className="text-xs uppercase tracking-[0.2em] rotate-90 origin-center">Scroll</span>
          <div className="relative">
            <div className="w-px h-16 bg-gradient-to-b from-[#a3a3a3]/50 to-transparent" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#3b82f6] pulse-ring" />
          </div>
        </div>
      </section>

      {/* ============================================
          MARQUEE STRIP
          ============================================ */}
      <section className="py-4 border-y border-white/5 overflow-hidden bg-[#1a1f26]">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {["Lightning Fast", "Mobile Ready", "Secure Hosting", "Custom Built", "SEO Optimized", "Always Online", "No Templates", "Built to Convert"].map((item, index) => (
                <span key={index} className="flex items-center gap-8 px-8 text-base uppercase tracking-widest text-white/20">
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/30" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          STATS - GLASSMORPHIC CARDS
          ============================================ */}
      <section className="py-12 px-6 md:px-12 lg:px-20 relative">
        <div className="gradient-divider mb-12" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: "100%", label: "Custom Built" },
              { value: "<1s", label: "Load Time" },
              { value: "100", label: "Lighthouse" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-5 md:p-6 text-center group hover:glow-blue transition-all duration-500 magnetic-hover corner-accents relative"
              >
                <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wide text-[#a8b5c4]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gradient-divider mt-12" />
      </section>

      {/* ============================================
          SERVICES - GLASS CARDS
          ============================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#60a5fa]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Floating elements */}
        <div className="absolute top-20 right-32 w-1 h-1 rounded-full bg-[#60a5fa] float-slow opacity-40" />
        <div className="absolute bottom-32 right-20 w-1.5 h-1.5 rounded-full bg-[#3b82f6] float-medium opacity-50" />

        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-10">
            <span className="text-sm uppercase tracking-widest text-[#3b82f6] mb-3 block">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tight">
              I Build
              <span className="text-white/20"> Websites </span>
              <span className="animated-gradient-text">That Work</span>
            </h2>
          </div>

          {/* Service cards grid */}
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: Code2, num: "01", title: "Custom Built", desc: "Your site is coded from scratch. No cookie-cutter templates.", color: "#3b82f6" },
              { icon: Zap, num: "02", title: "Blazing Fast", desc: "Pages load in under a second. Visitors stay, not bounce.", color: "#60a5fa" },
              { icon: Shield, num: "03", title: "Secure & Protected", desc: "Encrypted connections, protected from attacks. Your data is safe.", color: "#3b82f6" },
              { icon: Sparkles, num: "04", title: "Looks Great Everywhere", desc: "Perfect on phones, tablets, and desktops. Every screen size.", color: "#60a5fa" },
            ].map((item) => (
              <div
                key={item.num}
                className="glass-card rounded-xl p-6 md:p-8 group hover:border-white/20 transition-all duration-500 relative overflow-hidden magnetic-hover shimmer"
              >
                {/* Ghost number */}
                <span className="absolute -top-2 -right-2 text-[80px] font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors select-none">
                  {item.num}
                </span>

                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon with pulse */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 relative"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    <item.icon size={22} strokeWidth={1.5} />
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: `0 0 20px ${item.color}40` }}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors animated-underline inline-block">
                      {item.title}
                    </h3>
                    <p className="text-[#a8b5c4] text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Hover glow line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-b-xl"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS - NUMBERED STEPS
          ============================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 relative">
        <div className="gradient-divider mb-12" />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="text-sm uppercase tracking-widest text-[#3b82f6] mb-3 block">
                Process
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                How It <span className="text-white/20">Works</span>
              </h2>
            </div>
            <Link
              href="/process"
              className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-sm uppercase tracking-wide rounded-lg w-fit magnetic-hover"
            >
              Full Process
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#3b82f6]/20 via-[#60a5fa]/20 to-[#3b82f6]/20" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { num: "01", title: "Discover", desc: "Understand your goals" },
                { num: "02", title: "Design", desc: "Plan the experience" },
                { num: "03", title: "Build", desc: "Code your custom site" },
                { num: "04", title: "Launch", desc: "Go live worldwide" },
              ].map((step, index) => (
                <div
                  key={step.num}
                  className="glass-card rounded-xl p-5 md:p-6 group hover:border-white/20 transition-all duration-500 magnetic-hover relative"
                >
                  {/* Step indicator dot */}
                  <div
                    className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 bg-[#0f1419]"
                    style={{ borderColor: index % 2 === 0 ? '#3b82f6' : '#60a5fa' }}
                  />

                  <span
                    className="text-4xl font-black block mb-3 transition-colors"
                    style={{ color: index % 2 === 0 ? '#3b82f6' : '#60a5fa', opacity: 0.2 }}
                  >
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#a8b5c4] text-base">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gradient-divider mt-12" />
      </section>

      {/* ============================================
          PORTFOLIO TEASER
          ============================================ */}
      <section className="py-10 px-6 md:px-12 lg:px-20">
        <Link href="/portfolio" className="group block">
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-[#3b82f6]/30 transition-all duration-500 magnetic-hover relative overflow-hidden">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer" />

            <div className="relative z-10">
              <span className="text-sm uppercase tracking-widest text-[#a8b5c4] mb-2 block">
                Featured Work
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-[#3b82f6] transition-colors">
                View Portfolio
              </h2>
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6] group-hover:glow-blue transition-all duration-500 pulse-ring">
              <ArrowRight size={28} className="text-[#3b82f6] group-hover:text-black group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </Link>
      </section>

      {/* ============================================
          FINAL CTA - DRAMATIC
          ============================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative">
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-1 h-1 rounded-full bg-[#3b82f6] float-slow opacity-40" />
        <div className="absolute bottom-20 right-32 w-1.5 h-1.5 rounded-full bg-[#60a5fa] float-medium opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-white float-medium opacity-20" />

        <div className="max-w-4xl mx-auto text-center relative">
          <span className="text-sm uppercase tracking-widest text-[#a8b5c4] mb-6 block">
            Ready?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            <span className="block text-white text-glow-blue">Let&apos;s Build</span>
            <span className="block animated-gradient-text">Something Great</span>
          </h2>

          <p className="text-[#a8b5c4] text-lg md:text-xl mb-10 max-w-md mx-auto">
            Your next website is one conversation away.
          </p>

          <Link
            href="/contact"
            className="btn-accent inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-[0.2em] rounded-xl glow-blue gradient-border relative"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start the Conversation
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}




