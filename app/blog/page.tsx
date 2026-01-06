import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

// Placeholder blog posts - will be replaced with MDX content
const posts = [
  {
    slug: "why-nextjs-for-small-business",
    title: "Why I Use Next.js for Small Business Websites",
    excerpt:
      "Exploring the benefits of modern web technology for small business owners and why it matters for your bottom line.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Development",
  },
  {
    slug: "website-speed-matters",
    title: "Why Website Speed Matters More Than You Think",
    excerpt:
      "How a slow website costs you customers and what we can do about it.",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Performance",
  },
  {
    slug: "choosing-the-right-domain",
    title: "How to Choose the Right Domain Name",
    excerpt:
      "Tips for picking a memorable, professional domain name for your business.",
    date: "2024-01-05",
    readTime: "3 min read",
    category: "Basics",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Floating Decorative Dots */}
      <div className="absolute top-32 left-[10%] w-2 h-2 bg-[#3b82f6]/30 rounded-full animate-float-slow" />
      <div className="absolute top-48 right-[15%] w-3 h-3 bg-[#60a5fa]/20 rounded-full animate-float-medium" />
      <div className="absolute top-64 left-[20%] w-1.5 h-1.5 bg-[#3b82f6]/40 rounded-full animate-float-slow" />
      <div className="absolute top-96 right-[25%] w-2 h-2 bg-[#60a5fa]/30 rounded-full animate-float-medium" />
      <div className="absolute bottom-48 left-[8%] w-2.5 h-2.5 bg-[#3b82f6]/25 rounded-full animate-float-slow" />
      <div className="absolute bottom-32 right-[12%] w-2 h-2 bg-[#60a5fa]/35 rounded-full animate-float-medium" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-40 left-1/4 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#60a5fa]/3 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="px-4 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Section Label with Glow Dot */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse shadow-[0_0_10px_rgba(255,109,90,0.6)]" />
            <span className="text-[#3b82f6] text-sm font-medium uppercase tracking-wider">
              Articles & Insights
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Thoughts on web development, design, and building great websites
            for small businesses.
          </p>

          {/* Gradient Divider */}
          <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent" />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 mb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group relative p-6 sm:p-8 glass-card magnetic-hover rounded-xl overflow-hidden">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3b82f6]/30 rounded-tl-xl group-hover:border-[#3b82f6]/60 transition-colors duration-300" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#60a5fa]/30 rounded-tr-xl group-hover:border-[#60a5fa]/60 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#60a5fa]/30 rounded-bl-xl group-hover:border-[#60a5fa]/60 transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#3b82f6]/30 rounded-br-xl group-hover:border-[#3b82f6]/60 transition-colors duration-300" />

                  {/* Bottom Glow Line on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] text-sm font-medium rounded-full border border-[#3b82f6]/20">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[#3b82f6] font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />
      </div>

      {/* Coming Soon */}
      <section className="px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card rounded-2xl p-8 text-center overflow-hidden group">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#3b82f6]/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#60a5fa]/30 rounded-br-2xl" />

            <h2 className="text-2xl font-bold text-white mb-3 relative z-10">
              More Content Coming Soon
            </h2>
            <p className="text-gray-400 relative z-10">
              I&apos;m working on more articles about web development, design tips,
              and behind-the-scenes looks at building websites.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}




