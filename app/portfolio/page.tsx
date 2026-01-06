"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Jon Parrack Insurance",
    category: "Business",
    description: "Local insurance agency website serving Mason County for nearly 40 years. Features services, team info, and contact details.",
    image: "/images/piawv homepage.webp",
    url: "https://www.piawv.com/point-pleasant",
    tech: ["Next.js", "Tailwind CSS", "Cloudflare"],
  },
  {
    id: 2,
    title: "Tax Reverse",
    category: "Business",
    description: "Tax services website helping clients navigate tax solutions and strategies.",
    image: "/images/Taxreverse homepage.webp",
    url: "https://taxreverse.com",
    tech: ["Next.js", "Tailwind CSS", "Cloudflare"],
  },
  {
    id: 3,
    title: "Rolling Ball Creations",
    category: "Business",
    description: "Creative business showcasing unique rolling ball sculptures and kinetic art.",
    image: "/images/rollingballcreations homepage.webp",
    url: "https://rollingballcreations.com",
    tech: ["Next.js", "Tailwind CSS", "Cloudflare"],
  },
  {
    id: 4,
    title: "WV Land Heirs",
    category: "Business",
    description: "Resource for West Virginia land heirs navigating property and inheritance matters.",
    image: "/images/wvlandheirs homepage.webp",
    url: "https://wvlandheirs.com",
    tech: ["Next.js", "Tailwind CSS", "Cloudflare"],
  },
  {
    id: 5,
    title: "Commissions Calculator",
    category: "Tool",
    description: "Web application for calculating sales commissions quickly and accurately.",
    image: "/images/commissions-calculator homepage.webp",
    url: "https://commissions-calculator.com",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
];

const categories = ["All", "Business", "Tool"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Floating Decorative Dots */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-[#3b82f6] rounded-full opacity-40 animate-float-slow" />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-[#60a5fa] rounded-full opacity-30 animate-float-medium" />
        <div className="absolute top-60 left-[20%] w-1 h-1 bg-[#3b82f6] rounded-full opacity-50 animate-float-slow" />
        <div className="absolute top-[30%] right-[25%] w-2 h-2 bg-[#60a5fa] rounded-full opacity-25 animate-float-medium" />
        <div className="absolute top-[45%] left-[8%] w-1.5 h-1.5 bg-[#3b82f6] rounded-full opacity-35 animate-float-slow" />
        <div className="absolute top-[55%] right-[10%] w-1 h-1 bg-[#60a5fa] rounded-full opacity-45 animate-float-medium" />
        <div className="absolute top-[70%] left-[25%] w-2 h-2 bg-[#3b82f6] rounded-full opacity-20 animate-float-slow" />
        <div className="absolute top-[80%] right-[20%] w-1.5 h-1.5 bg-[#60a5fa] rounded-full opacity-40 animate-float-medium" />
      </div>

      {/* Header */}
      <section className="px-4 mb-16 relative">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#60a5fa]/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center animate-fade-in relative">
          {/* Section Label with Glow Dot */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
            </span>
            <span className="text-sm font-medium text-[#3b82f6] uppercase tracking-widest">Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">My Work</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of websites I&apos;ve built for clients. Each project is
            custom-designed and developed from scratch.
          </p>
        </div>

        {/* Gradient Divider */}
        <div className="max-w-md mx-auto mt-10 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm border ${
                  activeCategory === category
                    ? "bg-[#3b82f6] text-black border-[#3b82f6] shadow-[0_0_20px_rgba(255,109,90,0.4)]"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-[#3b82f6]/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,109,90,0.15)] magnetic-hover"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-[#3b82f6] transition-colors duration-300 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-transparent group-hover:border-[#60a5fa] transition-colors duration-300 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-transparent group-hover:border-[#60a5fa] transition-colors duration-300 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-transparent group-hover:border-[#3b82f6] transition-colors duration-300 rounded-br-2xl" />

                {/* Bottom Glow Line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 relative overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-black font-semibold rounded-lg hover:bg-[#2563eb] transition-colors shadow-[0_0_20px_rgba(255,109,90,0.4)]"
                    >
                      View Site
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-medium text-[#3b82f6] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded text-xs text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-2xl mx-auto mb-20 h-px bg-gradient-to-r from-transparent via-[#60a5fa]/50 to-transparent" />

      {/* CTA */}
      <section className="px-4 relative">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#3b82f6]/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#60a5fa]/10 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3b82f6]/10 via-[#60a5fa]/10 to-[#3b82f6]/10 border border-white/10 p-8 sm:p-12 group">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3b82f6]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#60a5fa]/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want Something Like This?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Let&apos;s create something amazing together. Get in touch to
                discuss your project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-black font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(255,109,90,0.3)] hover:shadow-[0_0_40px_rgba(255,109,90,0.5)]"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




