"use client";

import { Check, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

const TIERS = [
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

const ADDONS = [
  { name: "Blog Setup", price: "$200", description: "Write and publish articles easily with categories" },
  { name: "E-commerce Integration", price: "$500+", description: "Sell products and accept payments online" },
  { name: "Custom Animations", price: "$300+", description: "Eye-catching motion effects and interactions" },
  { name: "Monthly Maintenance", price: "$50/mo", description: "Updates, backups, and peace of mind" },
];

export default function PricingPage() {
  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Transparent Pricing</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              No hidden fees, no surprises. Choose a package that fits your needs
              or contact me for a custom quote.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 pt-4">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative h-full rounded-2xl glass-card ${
                    tier.popular ? "border-2 border-white/30" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-white text-black text-sm font-semibold rounded-full shadow-lg">
                        <Zap size={14} />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`p-8 ${tier.popular ? "pt-10" : ""}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {tier.name}
                      </h3>
                      <div className="text-5xl font-bold text-white mb-2">
                        {tier.price}
                      </div>
                      <p className="text-white/50 text-sm">{tier.description}</p>
                    </div>

                    <div className="h-px mb-8 bg-white/10" />

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block w-full text-center py-4 rounded-xl font-semibold transition-all ${
                        tier.popular
                          ? "bg-white text-black hover:bg-white/90"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Extras</p>
              <h2 className="text-3xl font-bold mb-4">Add-ons & Extras</h2>
              <p className="text-white/50">
                Enhance your website with additional features
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  className="p-6 glass-card rounded-xl h-full flex justify-between items-center"
                >
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white mb-1">{addon.name}</h3>
                    <p className="text-white/50 text-sm">{addon.description}</p>
                  </div>
                  <div className="text-white font-bold whitespace-nowrap ml-4 flex-shrink-0">
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
            <div className="glass-card rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Have Questions?
              </h2>
              <p className="text-white/50 mb-6">
                Not sure which package is right for you? Let&apos;s talk about your
                project and find the perfect fit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Schedule a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
