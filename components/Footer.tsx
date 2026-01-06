import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/agreement", label: "Agreement" },
];

const socialLinks = [
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1419] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-base font-bold tracking-[0.2em] uppercase text-white">
                Jay Parrack
              </span>
            </Link>
            <p className="text-[#a8b5c4]/60 text-base leading-relaxed mb-8 max-w-xs">
              Custom websites built with modern technology.
              Fast, secure, designed to convert.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#a8b5c4]/50 hover:bg-[#3b82f6]/10 hover:text-[#3b82f6] transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#a8b5c4]/50 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a8b5c4]/70 hover:text-white text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#a8b5c4]/50 mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a8b5c4]/70 hover:text-white text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#a8b5c4]/50 mb-6">
              Get Started
            </h3>
            <p className="text-[#a8b5c4]/70 text-base mb-6">
              Ready to build something great?
            </p>
            <Link
              href="/contact"
              className="btn-accent inline-flex px-6 py-3 text-sm uppercase tracking-wide rounded-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="gradient-divider mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#a8b5c4]/30 text-sm">
            {currentYear} Jay Parrack. All rights reserved.
          </p>
          <Link
            href="/payment"
            className="text-[#3b82f6]/50 hover:text-[#3b82f6] text-sm uppercase tracking-wide transition-colors"
          >
            Pay Invoice
          </Link>
        </div>
      </div>
    </footer>
  );
}




