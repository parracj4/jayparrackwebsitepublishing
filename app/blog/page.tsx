"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

const POSTS = [
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
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Articles & Insights</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Blog</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Thoughts on web development, design, and building great websites
              for small businesses.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="px-4 mb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {POSTS.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group p-6 sm:p-8 glass-card rounded-xl">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-white/10 text-white/70 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-white/40">
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
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/50 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-white/70 font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                More Content Coming Soon
              </h2>
              <p className="text-white/50">
                I&apos;m working on more articles about web development, design tips,
                and behind-the-scenes looks at building websites.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ThemedPageWrapper>
  );
}
