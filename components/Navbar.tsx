"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? "bg-[#0f1419]/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-white/5 transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <span className="text-base font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#3b82f6] transition-colors">
                Jay Parrack
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 group"
                >
                  <span
                    className={`text-sm uppercase tracking-wide transition-colors ${
                      pathname === link.href
                        ? "text-white"
                        : "text-[#a8b5c4] group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#3b82f6] transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Pay Invoice - Desktop */}
            <Link
              href="/payment"
              className="hidden md:inline-flex btn-accent items-center gap-2 px-6 py-2.5 text-sm uppercase tracking-wide rounded-lg"
            >
              Pay Invoice
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#a8b5c4] hover:text-white p-2 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0f1419]"
          onClick={() => setIsOpen(false)}
        />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative h-full flex flex-col items-center justify-center px-8">
          <nav className="space-y-1 text-center">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className={`transition-all duration-300 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  className={`block py-4 text-4xl font-black uppercase tracking-tight transition-colors ${
                    pathname === link.href
                      ? "text-[#3b82f6]"
                      : "text-white/20 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <div
            className={`mt-16 transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms" }}
          >
            <Link
              href="/payment"
              className="btn-accent inline-flex px-10 py-4 text-sm uppercase tracking-[0.2em] rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Pay Invoice
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}




