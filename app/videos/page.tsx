"use client";

import { Play, Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

const VIDEOS = [
  {
    id: 1,
    title: "Building a Landing Page from Scratch",
    description: "Watch me build a complete landing page in real-time using Next.js and Tailwind CSS.",
    duration: "45:00",
    date: "2024-01-20",
    thumbnail: null,
    youtubeId: null,
  },
  {
    id: 2,
    title: "Setting Up Cloudflare Hosting",
    description: "A step-by-step guide to deploying your Next.js site on Cloudflare Pages.",
    duration: "15:00",
    date: "2024-01-15",
    thumbnail: null,
    youtubeId: null,
  },
];

export default function VideosPage() {
  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Tutorials</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Videos</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Watch me build websites in real-time. Learn the process and see
              how modern web development works.
            </p>
          </div>
        </section>

        {/* Video Grid */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            {VIDEOS.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    className="glass-card rounded-xl overflow-hidden group relative"
                  >
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-white/5 relative cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play size={28} className="text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-sm text-white">
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-white/40 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(video.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {video.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-white/50">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/50">No videos yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                More Videos Coming Soon
              </h2>
              <p className="text-white/50 mb-6 max-w-xl mx-auto">
                I&apos;m working on a series of tutorials showing the complete
                process of building websites. Subscribe to get notified!
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Subscribe on YouTube
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
