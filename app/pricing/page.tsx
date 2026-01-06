"use client";

import { Check, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const tiers = [
  {
    name: "Starter",
    price: "$200",
    description: "Perfect for small businesses needing a simple online presence",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Fast, secure hosting",
      "1 round of revisions",
      "1 week delivery",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$1,500",
    description: "Ideal for growing businesses with more content needs",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form with email integration",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "Social media integration",
      "3 rounds of revisions",
      "30 days post-launch support",
      "3-4 week delivery",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Premium",
    price: "$3,000+",
    description: "For businesses requiring custom features and functionality",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce capabilities",
      "CMS integration",
      "Advanced animations",
      "Performance optimization",
      "Unlimited revisions",
      "60 days post-launch support",
      "Priority communication",
      "Custom timeline",
    ],
    popular: false,
    cta: "Contact Me",
  },
];

const addons = [
  { name: "Blog Setup", price: "$200", description: "Write and publish articles easily with categories" },
  { name: "E-commerce Integration", price: "$500+", description: "Sell products and accept payments online" },
  { name: "Custom Animations", price: "$300+", description: "Eye-catching motion effects and interactions" },
  { name: "Monthly Maintenance", price: "$50/mo", description: "Updates, backups, and peace of mind" },
];

// Magnetic hover hook
function useMagneticHover() {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.05;
      const deltaY = (e.clientY - centerY) * 0.05;
      setTransform({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { ref, transform };
}

// Pricing Card Component with magnetic hover
function PricingCard({ tier, index }: { tier: typeof tiers[0]; index: number }) {
  const { ref, transform } = useMagneticHover();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-full rounded-2xl transition-all duration-300 group glass-card overflow-hidden ${
        tier.popular
          ? "border-2 border-[#3b82f6]"
          : "border border-white/10"
      }`}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Shimmer effect for popular tier */}
      {tier.popular && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 -translate-x-full animate-shimmer"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255, 109, 90, 0.1), transparent)",
            }}
          />
        </div>
      )}

      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-2xl transition-all duration-300 ${
        isHovered ? "border-[#3b82f6] shadow-[0_0_10px_rgba(255,109,90,0.5)]" : "border-white/20"
      }`} />
      <div className={`absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 rounded-tr-2xl transition-all duration-300 ${
        isHovered ? "border-[#3b82f6] shadow-[0_0_10px_rgba(255,109,90,0.5)]" : "border-white/20"
      }`} />
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 rounded-bl-2xl transition-all duration-300 ${
        isHovered ? "border-[#3b82f6] shadow-[0_0_10px_rgba(255,109,90,0.5)]" : "border-white/20"
      }`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-2xl transition-all duration-300 ${
        isHovered ? "border-[#3b82f6] shadow-[0_0_10px_rgba(255,109,90,0.5)]" : "border-white/20"
      }`} />

      {/* Bottom glow line on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, #3b82f6, #60a5fa, #3b82f6, transparent)",
          boxShadow: isHovered ? "0 0 20px rgba(255, 109, 90, 0.5)" : "none",
        }}
      />

      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-black text-sm font-semibold rounded-full shadow-lg shadow-[#3b82f6]/30">
            <Zap size={14} />
            Most Popular
          </span>
        </div>
      )}
      <div className="p-8 relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            {tier.name}
          </h3>
          <div className="text-5xl font-bold text-white mb-2">
            {tier.price}
          </div>
          <p className="text-gray-400 text-sm">{tier.description}</p>
        </div>

        {/* Gradient divider */}
        <div
          className="h-[1px] mb-8"
          style={{
            background: "linear-gradient(90deg, transparent, #3b82f6, #60a5fa, #3b82f6, transparent)",
          }}
        />

        <ul className="space-y-4 mb-8">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`block w-full text-center py-4 rounded-xl font-semibold transition-all ${
            tier.popular
              ? "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#2563eb] text-black shadow-lg shadow-[#3b82f6]/20"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
          }`}
        >
          {tier.cta}
        </Link>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Floating decorative dots */}
      <div className="absolute top-32 left-[10%] w-2 h-2 rounded-full bg-[#3b82f6]/40 animate-float-slow" />
      <div className="absolute top-48 right-[15%] w-3 h-3 rounded-full bg-[#60a5fa]/30 animate-float-medium" />
      <div className="absolute top-64 left-[20%] w-1.5 h-1.5 rounded-full bg-[#60a5fa]/50 animate-float-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-80 right-[25%] w-2 h-2 rounded-full bg-[#93c5fd]/40 animate-float-medium" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-[500px] left-[8%] w-2.5 h-2.5 rounded-full bg-[#3b82f6]/35 animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[600px] right-[12%] w-1.5 h-1.5 rounded-full bg-[#60a5fa]/45 animate-float-medium" style={{ animationDelay: "1.5s" }} />

      {/* Ambient glow orbs */}
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[350px] h-[350px] bg-[#60a5fa]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-1/3 w-[300px] h-[300px] bg-[#60a5fa]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <section className="px-4 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Section label with glow dot */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(255,109,90,0.8)]" />
            <span className="text-[#3b82f6] text-sm font-medium uppercase tracking-wider">Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #3b82f6 100%)",
              }}
            >
              Transparent Pricing
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose a package that fits your needs
            or contact me for a custom quote.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 mb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-4 mb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Section label with glow dot */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(255,109,90,0.8)]" />
              <span className="text-[#3b82f6] text-sm font-medium uppercase tracking-wider">Extras</span>
            </div>
            <h2 className="text-3xl font-black mb-4 uppercase">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #3b82f6 100%)",
                }}
              >
                Add-ons & Extras
              </span>
            </h2>
            <p className="text-gray-400">
              Enhance your website with additional features
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="p-6 glass-card border border-white/10 rounded-xl hover:border-[#3b82f6]/30 transition-all h-full flex justify-between items-center group relative overflow-hidden"
              >
                {/* Bottom glow line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, #3b82f6, #60a5fa, #3b82f6, transparent)",
                    boxShadow: "0 0 15px rgba(255, 109, 90, 0.4)",
                  }}
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-white mb-1">{addon.name}</h3>
                  <p className="text-gray-400 text-sm">{addon.description}</p>
                </div>
                <div className="text-[#3b82f6] font-bold whitespace-nowrap ml-4 flex-shrink-0">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden group">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-2xl border-white/20 group-hover:border-[#3b82f6]/50 transition-all duration-300" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 rounded-tr-2xl border-white/20 group-hover:border-[#3b82f6]/50 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 rounded-bl-2xl border-white/20 group-hover:border-[#3b82f6]/50 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-2xl border-white/20 group-hover:border-[#3b82f6]/50 transition-all duration-300" />

            <h2 className="text-2xl font-bold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-400 mb-6">
              Not sure which package is right for you? Let&apos;s talk about your
              project and find the perfect fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#2563eb] text-black font-semibold rounded-xl transition-colors shadow-lg shadow-[#3b82f6]/20"
            >
              Schedule a Free Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




