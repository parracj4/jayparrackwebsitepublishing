"use client";

import { useState, useMemo } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

const PROJECTS = [
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

const CATEGORIES = ["All", "Business", "Tool"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() =>
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">My Work</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              A selection of websites I&apos;ve built for clients. Each project is
              custom-designed and developed from scratch.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? "bg-white text-black"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
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
                  className="group glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div className="aspect-video bg-white/5 relative overflow-hidden flex-shrink-0">
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
                      >
                        View Site
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/50"
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
                <p className="text-white/50">No projects in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Want Something Like This?
              </h2>
              <p className="text-white/50 mb-6 max-w-xl mx-auto">
                Let&apos;s create something amazing together. Get in touch to
                discuss your project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
