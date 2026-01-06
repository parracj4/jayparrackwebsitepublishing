import { Play, Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// HONDA RACING RED THEME: #3b82f6 (orange) + #60a5fa (purple)

const videos = [
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
    <div className="bg-[#0f1419] min-h-screen pt-24 pb-20 relative">
      {/* Floating elements */}
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-[#3b82f6] float-slow opacity-60" />
      <div className="absolute top-60 left-40 w-1 h-1 rounded-full bg-[#60a5fa] float-medium opacity-40" />
      <div className="absolute bottom-40 right-40 w-1.5 h-1.5 rounded-full bg-[#3b82f6] float-medium opacity-50" />

      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 mb-16 relative">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start gap-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" style={{ boxShadow: '0 0 20px #3b82f6' }} />
              <span className="text-xs uppercase tracking-[0.4em] text-[#a8b5c4]">Tutorials</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">Videos</span>
            </h1>
            <p className="text-lg text-[#a8b5c4] max-w-xl">
              Watch me build websites in real-time. Learn the process and see
              how modern web development works.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px max-w-6xl mx-auto mb-12 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent" />

      {/* Video Grid */}
      <section className="px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-6xl mx-auto">
          {videos.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="glass-card rounded-xl overflow-hidden group magnetic-hover relative"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#3b82f6]/30 group-hover:border-[#3b82f6] transition-colors z-10" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#3b82f6]/30 group-hover:border-[#3b82f6] transition-colors z-10" />

                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 relative cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#3b82f6] flex items-center justify-center group-hover:scale-110 transition-transform pulse-ring">
                        <Play size={28} className="text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-sm text-white">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#a8b5c4]/60 mb-3">
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
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-[#a8b5c4]">{video.description}</p>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-[#3b82f6] to-transparent" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#a8b5c4]">No videos yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden magnetic-hover">
            <div className="absolute inset-0 shimmer" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#60a5fa]/10 rounded-full blur-[100px]" />

            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                More Videos Coming Soon
              </h2>
              <p className="text-[#a8b5c4] mb-8 max-w-xl mx-auto">
                I&apos;m working on a series of tutorials showing the complete
                process of building websites. Subscribe to get notified!
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-sm uppercase tracking-[0.15em] rounded-xl transition-all hover:scale-105"
                style={{ boxShadow: '0 0 40px rgba(255, 109, 90, 0.3)' }}
              >
                Subscribe on YouTube
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




