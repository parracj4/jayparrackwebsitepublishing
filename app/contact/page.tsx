"use client";

import { useState } from "react";
import { Send, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handling
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Floating Decorative Dots */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-[#3b82f6] rounded-full animate-float-slow opacity-60" />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-[#60a5fa] rounded-full animate-float-medium opacity-50" />
        <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-[#3b82f6] rounded-full animate-float-slow opacity-40" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#60a5fa]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-md mx-auto text-center animate-fade-in relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
            <Send className="w-10 h-10 text-[#3b82f6]" />
          </div>
          <h2 className="text-3xl font-black uppercase text-white mb-4 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">Message Sent!</h2>
          <p className="text-gray-400 mb-8">
            Thanks for reaching out! I&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] transition-colors"
          >
            Back to Home
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Floating Decorative Dots */}
      <div className="absolute top-32 left-[8%] w-2 h-2 bg-[#3b82f6] rounded-full animate-float-slow opacity-60" />
      <div className="absolute top-48 right-[12%] w-1.5 h-1.5 bg-[#60a5fa] rounded-full animate-float-medium opacity-50" />
      <div className="absolute top-[60%] left-[5%] w-1 h-1 bg-[#3b82f6] rounded-full animate-float-medium opacity-40" />
      <div className="absolute top-[40%] right-[8%] w-2.5 h-2.5 bg-[#60a5fa] rounded-full animate-float-slow opacity-30" />
      <div className="absolute bottom-40 left-[15%] w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-float-slow opacity-50" />
      <div className="absolute bottom-60 right-[18%] w-1 h-1 bg-[#60a5fa] rounded-full animate-float-medium opacity-40" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#3b82f6]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[50%] right-0 w-[400px] h-[400px] bg-[#60a5fa]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-[#3b82f6]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <section className="px-4 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Section Label with Glow Dot */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#3b82f6] rounded-full shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6] animate-pulse" />
            <span className="text-sm uppercase tracking-widest text-[#3b82f6] font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">Let&apos;s Talk</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below or reach out
            directly.
          </p>
          {/* Gradient Divider */}
          <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent" />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                    >
                      <option value="">Select a project type</option>
                      <option value="starter">Starter - Landing page</option>
                      <option value="professional">Professional - Multi-page</option>
                      <option value="premium">Premium - Custom features</option>
                      <option value="other">Other / Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all resize-none"
                    placeholder="What are you looking to build? Any specific features, goals, or timeline?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#2563eb] disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#3b82f6]/25 hover:shadow-[#3b82f6]/40"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Email Card with Glass Styling and Corner Accents */}
                <a
                  href="mailto:jay@example.com"
                  className="group relative flex items-center gap-4 p-6 glass-card magnetic-hover rounded-xl overflow-hidden"
                >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3b82f6]/30 rounded-tl-xl group-hover:border-[#3b82f6] group-hover:shadow-[0_0_10px_#3b82f6] transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#60a5fa]/30 rounded-br-xl group-hover:border-[#60a5fa] group-hover:shadow-[0_0_10px_#60a5fa] transition-all duration-300" />

                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">jay@example.com</div>
                  </div>
                </a>

                {/* Phone Card with Glass Styling and Corner Accents */}
                <a
                  href="tel:+15551234567"
                  className="group relative flex items-center gap-4 p-6 glass-card magnetic-hover rounded-xl overflow-hidden"
                >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3b82f6]/30 rounded-tl-xl group-hover:border-[#3b82f6] group-hover:shadow-[0_0_10px_#3b82f6] transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#60a5fa]/30 rounded-br-xl group-hover:border-[#60a5fa] group-hover:shadow-[0_0_10px_#60a5fa] transition-all duration-300" />

                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-medium">(555) 123-4567</div>
                  </div>
                </a>

                {/* Response Time Card with Glass Styling and Corner Accents */}
                <div className="group relative flex items-center gap-4 p-6 glass-card rounded-xl overflow-hidden">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3b82f6]/30 rounded-tl-xl group-hover:border-[#3b82f6] group-hover:shadow-[0_0_10px_#3b82f6] transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#60a5fa]/30 rounded-br-xl group-hover:border-[#60a5fa] group-hover:shadow-[0_0_10px_#60a5fa] transition-all duration-300" />

                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Response Time</div>
                    <div className="text-white font-medium">Within 24 hours</div>
                  </div>
                </div>

                {/* Gradient Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />

                {/* Prefer a Call Card with Shimmer Effect */}
                <div className="group relative p-6 bg-gradient-to-br from-[#3b82f6]/10 to-[#60a5fa]/10 border border-[#3b82f6]/20 rounded-2xl overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#3b82f6]/40 rounded-tl-2xl group-hover:border-[#3b82f6] group-hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#60a5fa]/40 rounded-br-2xl group-hover:border-[#60a5fa] group-hover:shadow-[0_0_15px_#60a5fa] transition-all duration-300" />

                  <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                    Prefer a Call?
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 relative z-10">
                    Schedule a free 30-minute discovery call to discuss your
                    project in detail.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#93c5fd] font-medium transition-colors relative z-10"
                  >
                    Schedule Call
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




