"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme, themeBackgrounds } from "@/context/ThemeContext";

interface ThemedPageWrapperProps {
  children: React.ReactNode;
}

export default function ThemedPageWrapper({ children }: ThemedPageWrapperProps) {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeBackgrounds[theme]} text-white`}>
      {/* Navigation - matches main page exactly */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="nav-glass rounded-full px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="font-bold text-lg tracking-tight">Studio</a>

            {/* Desktop menu - centered */}
            <div className="hidden md:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
              <a href="/portfolio" className="px-4 py-2 rounded-full text-sm font-medium opacity-70 hover:opacity-100 hover:bg-white/10 transition-all">Work</a>
              <a href="/pricing" className="px-4 py-2 rounded-full text-sm font-medium opacity-70 hover:opacity-100 hover:bg-white/10 transition-all">Pricing</a>
              <a href="/process" className="px-4 py-2 rounded-full text-sm font-medium opacity-70 hover:opacity-100 hover:bg-white/10 transition-all">Process</a>
              <a href="/about" className="px-4 py-2 rounded-full text-sm font-medium opacity-70 hover:opacity-100 hover:bg-white/10 transition-all">About</a>
              <a href="/blog" className="px-4 py-2 rounded-full text-sm font-medium opacity-70 hover:opacity-100 hover:bg-white/10 transition-all">Blog</a>
            </div>

            {/* CTA button - right side */}
            <a href="/contact" className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all">
              Contact
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 -mr-2 opacity-70 hover:opacity-100 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="nav-glass md:hidden mt-2 rounded-2xl overflow-hidden">
              <div className="p-4 flex flex-col gap-1">
                <a href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">Work</a>
                <a href="/pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">Pricing</a>
                <a href="/process" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">Process</a>
                <a href="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">About</a>
                <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">Blog</a>
                <div className="mt-2 pt-2 border-t border-white/10">
                  <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-sm font-semibold text-center bg-white text-black hover:bg-white/90 transition-all">Contact</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-24">
        {children}
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Studio</h3>
              <p className="text-white/50 text-sm">Building extraordinary digital experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white/70">Services</h4>
              <div className="flex flex-col gap-2 text-sm text-white/50">
                <a href="/pricing" className="hover:text-white/80 transition-colors">Pricing</a>
                <a href="/process" className="hover:text-white/80 transition-colors">Process</a>
                <a href="/portfolio" className="hover:text-white/80 transition-colors">Portfolio</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white/70">Company</h4>
              <div className="flex flex-col gap-2 text-sm text-white/50">
                <a href="/about" className="hover:text-white/80 transition-colors">About</a>
                <a href="/blog" className="hover:text-white/80 transition-colors">Blog</a>
                <a href="/contact" className="hover:text-white/80 transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white/70">Legal</h4>
              <div className="flex flex-col gap-2 text-sm text-white/50">
                <a href="/privacy" className="hover:text-white/80 transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-white/80 transition-colors">Terms</a>
                <a href="/agreement" className="hover:text-white/80 transition-colors">Agreement</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
