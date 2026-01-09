"use client";

import { useState, useCallback } from "react";
import { Send, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import ThemedPageWrapper from "@/components/ThemedPageWrapper";

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

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handling
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setIsSubmitting(false);
  }, [formData]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  if (submitted) {
    return (
      <ThemedPageWrapper>
        <div className="pb-20 min-h-[70vh] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="max-w-md mx-auto text-center relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <Send className="w-10 h-10 text-white/70" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
            <p className="text-white/50 mb-8">
              Thanks for reaching out! I&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              Back to Home
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </ThemedPageWrapper>
    );
  }

  return (
    <ThemedPageWrapper>
      <div className="pb-20 relative overflow-hidden">
        {/* Header */}
        <section className="px-4 mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let&apos;s Talk</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Ready to start your project? Fill out the form below or reach out
              directly.
            </p>
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
                        className="block text-sm font-medium text-white/70 mb-2"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/70 mb-2"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-white/70 mb-2"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
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
                        className="block text-sm font-medium text-white/70 mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
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
                      className="block text-sm font-medium text-white/70 mb-2"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                      placeholder="What are you looking to build? Any specific features, goals, or timeline?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
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
                  {/* Email Card */}
                  <a
                    href="mailto:jay@example.com"
                    className="flex items-center gap-4 p-6 glass-card rounded-xl"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white/70">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-white/50">Email</div>
                      <div className="text-white font-medium">jay@example.com</div>
                    </div>
                  </a>

                  {/* Phone Card */}
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-4 p-6 glass-card rounded-xl"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white/70">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-white/50">Phone</div>
                      <div className="text-white font-medium">(555) 123-4567</div>
                    </div>
                  </a>

                  {/* Response Time Card */}
                  <div className="flex items-center gap-4 p-6 glass-card rounded-xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white/70">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-white/50">Response Time</div>
                      <div className="text-white font-medium">Within 24 hours</div>
                    </div>
                  </div>

                  {/* Prefer a Call Card */}
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Prefer a Call?
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      Schedule a free 30-minute discovery call to discuss your
                      project in detail.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
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
    </ThemedPageWrapper>
  );
}
