"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Sparkles, Zap, Rocket, Menu, X } from "lucide-react";
import { useTheme, themeBackgrounds, Theme } from "@/context/ThemeContext";

// Static theme options - defined outside component to prevent recreation
const THEME_OPTIONS: { id: Theme; emoji: string }[] = [
  { id: "glass", emoji: "🪟" },
  { id: "doors", emoji: "🚪" },
  { id: "stack", emoji: "📚" },
  { id: "orbit", emoji: "🫧" },
  { id: "reveal", emoji: "🎭" },
  { id: "magic", emoji: "🪄" },
];

// Pre-generated starfield positions for magic theme (prevents regeneration on each render)
const STARFIELD_POSITIONS = [
  { left: "12%", top: "8%", delay: "0s", opacity: 0.7 },
  { left: "25%", top: "15%", delay: "0.3s", opacity: 0.5 },
  { left: "45%", top: "5%", delay: "0.7s", opacity: 0.8 },
  { left: "68%", top: "12%", delay: "1.1s", opacity: 0.6 },
  { left: "85%", top: "20%", delay: "0.2s", opacity: 0.9 },
  { left: "8%", top: "35%", delay: "1.5s", opacity: 0.4 },
  { left: "32%", top: "42%", delay: "0.9s", opacity: 0.7 },
  { left: "55%", top: "30%", delay: "1.8s", opacity: 0.5 },
  { left: "78%", top: "38%", delay: "0.4s", opacity: 0.8 },
  { left: "92%", top: "45%", delay: "1.2s", opacity: 0.6 },
  { left: "15%", top: "58%", delay: "0.6s", opacity: 0.9 },
  { left: "38%", top: "65%", delay: "1.4s", opacity: 0.5 },
  { left: "62%", top: "55%", delay: "0.1s", opacity: 0.7 },
  { left: "82%", top: "62%", delay: "1.7s", opacity: 0.4 },
  { left: "5%", top: "78%", delay: "0.8s", opacity: 0.8 },
  { left: "28%", top: "85%", delay: "1.0s", opacity: 0.6 },
  { left: "50%", top: "75%", delay: "1.6s", opacity: 0.9 },
  { left: "72%", top: "82%", delay: "0.5s", opacity: 0.5 },
  { left: "88%", top: "88%", delay: "1.3s", opacity: 0.7 },
  { left: "42%", top: "92%", delay: "0.2s", opacity: 0.6 },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  // Magic theme state
  const [magicRevealed, setMagicRevealed] = useState<number[]>([]);

  // Particle system refs (using refs + direct DOM manipulation for performance)
  const particleContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastParticleTime = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<{x: number, y: number, vx: number, vy: number, size: number, hue: number, life: number, el: HTMLDivElement}[]>([]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Particle animation loop - runs via requestAnimationFrame, updates DOM directly
  const animateParticles = useCallback(() => {
    const particles = particlesRef.current;

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15; // gravity
      p.life -= 0.025;
      p.size *= 0.97;

      if (p.life <= 0) {
        p.el.remove();
        particles.splice(i, 1);
      } else {
        p.el.style.left = `${p.x}px`;
        p.el.style.top = `${p.y}px`;
        p.el.style.width = `${p.size}px`;
        p.el.style.height = `${p.size}px`;
        p.el.style.opacity = String(p.life);
      }
    }

    if (particles.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    } else {
      animationFrameRef.current = null;
    }
  }, []);

  // Spawn particles on mouse move (throttled)
  const handleMagicMouseMove = useCallback((e: React.MouseEvent, cardIndex: number) => {
    const now = Date.now();
    if (now - lastParticleTime.current < 50) return; // 20fps throttle
    lastParticleTime.current = now;

    const container = particleContainerRefs.current[cardIndex];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create 2 particles
    for (let i = 0; i < 2; i++) {
      const el = document.createElement('div');
      const size = Math.random() * 8 + 4;
      const hue = Math.random() * 60 + 260; // purple to pink

      el.style.cssText = `
        position: absolute;
        pointer-events: none;
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, hsl(${hue}, 100%, 80%), hsl(${hue}, 100%, 50%));
        box-shadow: 0 0 ${size}px hsl(${hue}, 100%, 60%);
        transform: translate(-50%, -50%);
        z-index: 10;
      `;

      container.appendChild(el);

      particlesRef.current.push({
        x, y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6 - 2,
        size,
        hue,
        life: 1,
        el
      });
    }

    // Limit max particles
    while (particlesRef.current.length > 40) {
      const old = particlesRef.current.shift();
      old?.el.remove();
    }

    // Start animation if not running
    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    }
  }, [animateParticles]);

  // Explosion effect on reveal
  const handleMagicClick = useCallback((cardIndex: number) => {
    if (magicRevealed.includes(cardIndex)) return;

    const container = particleContainerRefs.current[cardIndex];
    if (container) {
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Create explosion particles
      for (let i = 0; i < 25; i++) {
        const el = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const hue = Math.random() * 60 + 260;

        el.style.cssText = `
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          left: ${centerX}px;
          top: ${centerY}px;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, hsl(${hue}, 100%, 80%), hsl(${hue}, 100%, 50%));
          box-shadow: 0 0 ${size}px hsl(${hue}, 100%, 60%);
          transform: translate(-50%, -50%);
          z-index: 10;
        `;

        container.appendChild(el);

        particlesRef.current.push({
          x: centerX, y: centerY,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 0.5) * 16,
          size,
          hue,
          life: 1,
          el
        });
      }

      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(animateParticles);
      }
    }

    setMagicRevealed(prev => [...prev, cardIndex]);
  }, [magicRevealed, animateParticles]);

  // Memoize services array to prevent recreation on every render
  const services = useMemo(() => [
    { title: "Design", desc: "Pixel-perfect interfaces", price: "$2,500", icon: Sparkles, color: "#ec4899" },
    { title: "Develop", desc: "Clean, scalable code", price: "$5,000", icon: Zap, color: "#8b5cf6" },
    { title: "Launch", desc: "Global deployment", price: "$1,500", icon: Rocket, color: "#06b6d4" },
  ], []);

  const toggleReveal = useCallback((index: number) => {
    setRevealedCards(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${themeBackgrounds[theme]} text-white overflow-hidden`}>

      {/* Navigation */}
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
                <a href="/portfolio" className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">Work</a>
                <a href="/pricing" className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">Pricing</a>
                <a href="/process" className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">Process</a>
                <a href="/about" className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">About</a>
                <a href="/blog" className="px-4 py-3 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">Blog</a>
                <div className="mt-2 pt-2 border-t border-white/10">
                  <a href="/contact" className="block px-4 py-3 rounded-xl text-sm font-semibold text-center bg-white text-black hover:bg-white/90 transition-all">Contact</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[45vh] flex items-center justify-center px-6 pt-28 pb-4">
        <div className="max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold">
            {theme === "magic" ? "Cast Your Spell" : "Web Studio"}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Build Something Extraordinary</h1>
        </div>
      </section>

      {/* GLASS */}
      {theme === "glass" && (
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {services.map((item) => (
              <div key={item.title} className="glass-theme-card group p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <item.icon size={32} className="mb-4 text-white/70" />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 mb-4">{item.desc}</p>
                <div className="text-3xl font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* DOORS */}
      {theme === "doors" && (
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div key={item.title} className="doors-perspective relative h-80 cursor-pointer"
                onClick={() => setOpenCard(openCard === i ? null : i)}>
                {/* Content behind door */}
                <div className="doors-content absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center">
                  <item.icon size={40} className="mb-4 text-amber-300" />
                  <div className="text-5xl font-bold text-amber-100 mb-2">{item.price}</div>
                  <p className="text-amber-200/70">{item.desc}</p>
                  {openCard === i && (
                    <p className="text-amber-400/60 text-sm mt-4">Click to close</p>
                  )}
                </div>
                {/* Door panel */}
                <div className={`doors-panel absolute inset-0 rounded-3xl transition-transform duration-700 ${openCard === i ? 'doors-panel-open' : ''}`}>
                  <div className="doors-handle absolute right-4 top-1/2 -translate-y-1/2 w-3 h-16 rounded-full" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-3xl font-bold text-amber-100">{item.title}</h3>
                    <p className="text-amber-400/50 text-sm mt-2">Tap to open</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STACK */}
      {theme === "stack" && (
        <section className="px-6 py-12">
          <div className="max-w-lg mx-auto flex flex-col" style={{ gap: '-8px' }}>
            {services.map((item, i) => {
              const isOpen = openCard === i;
              const cardColors = [
                { bg: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)', accent: '#8b5cf6' },
                { bg: 'linear-gradient(135deg, #1a2634 0%, #243447 100%)', accent: '#06b6d4' },
                { bg: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', accent: '#10b981' },
              ];
              return (
                <div
                  key={item.title}
                  className="cursor-pointer transition-all duration-500 ease-out relative"
                  style={{
                    transform: isOpen ? 'scale(1.02)' : 'scale(1)',
                    zIndex: isOpen ? 10 : 3 - i,
                    marginTop: i === 0 ? 0 : '-12px',
                  }}
                  onClick={() => setOpenCard(isOpen ? null : i)}
                >
                  <div
                    className="rounded-3xl p-7 transition-all duration-500 overflow-hidden"
                    style={{
                      background: cardColors[i].bg,
                      border: `1px solid ${isOpen ? cardColors[i].accent : 'rgba(255,255,255,0.1)'}`,
                      boxShadow: isOpen
                        ? `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px ${cardColors[i].accent}33, 0 -4px 20px ${cardColors[i].accent}22`
                        : `0 10px 40px -10px rgba(0,0,0,0.4), 0 -2px 15px ${cardColors[i].accent}15`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${cardColors[i].accent}22` }}>
                          <item.icon size={20} style={{ color: cardColors[i].accent }} />
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                      <div className="text-2xl font-bold" style={{ color: cardColors[i].accent }}>{item.price}</div>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? '24px' : '0px',
                      }}
                    >
                      <p className="text-white/60 mb-6 text-lg">{item.desc}</p>
                      <button
                        className="px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                        style={{ background: cardColors[i].accent, color: '#fff' }}
                      >
                        Get Started →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-white/40 text-sm mt-6">Click a card to expand</p>
        </section>
      )}

      {/* BUBBLES - Expanding Circles */}
      {theme === "orbit" && (
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative min-h-[200px]">
              {services.map((item, i) => {
                const isSelected = openCard === i;
                const colors = [
                  { bg: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)', glow: 'rgba(124,58,237,0.5)', border: '#a78bfa' },
                  { bg: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', glow: 'rgba(236,72,153,0.5)', border: '#f472b6' },
                  { bg: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)', glow: 'rgba(6,182,212,0.5)', border: '#22d3ee' },
                ];
                const color = colors[i];

                return (
                  <div
                    key={item.title}
                    className="relative cursor-pointer"
                    onClick={() => setOpenCard(isSelected ? null : i)}
                  >
                    {/* Fixed size placeholder to prevent layout shift */}
                    <div className="w-[140px] h-[140px]" />

                    {/* The actual circle - positioned absolutely */}
                    <div
                      className="absolute top-1/2 left-1/2 rounded-full flex flex-col items-center justify-center text-center"
                      style={{
                        width: isSelected ? 'min(320px, 85vw)' : '140px',
                        height: isSelected ? 'min(320px, 85vw)' : '140px',
                        transform: 'translate(-50%, -50%)',
                        background: isSelected ? color.bg : 'rgba(255,255,255,0.05)',
                        border: `3px solid ${isSelected ? color.border : 'rgba(255,255,255,0.15)'}`,
                        boxShadow: isSelected
                          ? `0 0 60px ${color.glow}, 0 0 100px ${color.glow}`
                          : `0 8px 32px rgba(0,0,0,0.3)`,
                        zIndex: isSelected ? 50 : 10 - i,
                        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                      }}
                    >
                      {/* Collapsed state */}
                      <div
                        className="flex flex-col items-center absolute"
                        style={{
                          opacity: isSelected ? 0 : 1,
                          transform: isSelected ? 'scale(0.5)' : 'scale(1)',
                          transition: 'opacity 0.2s ease, transform 0.3s ease',
                        }}
                      >
                        <item.icon size={32} style={{ color: color.border }} className="mb-2" />
                        <span className="font-bold text-white/90 text-sm">{item.title}</span>
                        <span className="text-xs text-white/40 mt-1">Tap</span>
                      </div>

                      {/* Expanded state */}
                      <div
                        className="flex flex-col items-center justify-center px-6 absolute"
                        style={{
                          opacity: isSelected ? 1 : 0,
                          transform: isSelected ? 'scale(1)' : 'scale(0.8)',
                          pointerEvents: isSelected ? 'auto' : 'none',
                          transition: 'opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s',
                        }}
                      >
                        <item.icon size={36} className="text-white/90 mb-3" />
                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                        <div className="text-3xl font-bold text-white mb-2">{item.price}</div>
                        <p className="text-white/70 text-sm mb-4 max-w-[200px]">{item.desc}</p>
                        <button
                          className="px-6 py-2 rounded-full font-semibold text-sm hover:bg-white/30"
                          style={{ background: 'rgba(255,255,255,0.25)', color: '#fff', transition: 'background 0.2s ease' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Get Started →
                        </button>
                        <span className="text-white/40 text-xs mt-3">Tap to close</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* REVEAL */}
      {theme === "reveal" && (
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <div key={item.title} className="relative h-60 rounded-3xl overflow-hidden cursor-pointer" onClick={() => toggleReveal(i)}>
                {/* Revealed content */}
                <div className="reveal-content absolute inset-0 p-6 flex flex-col items-center justify-center">
                  <item.icon size={32} className="mb-2 text-emerald-300" />
                  <div className="text-3xl font-bold mb-1">{item.price}</div>
                  <p className="text-emerald-200 text-sm mb-3">{item.desc}</p>
                  <p className="text-emerald-400/60 text-xs">Click to hide</p>
                </div>
                {/* Cover */}
                <div className={`reveal-cover absolute inset-0 transition-all duration-700 ${revealedCards.includes(i) ? 'opacity-0 scale-110 pointer-events-none' : ''}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-teal-400/50 flex items-center justify-center mb-2 text-xl">?</div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-teal-400/50 text-sm mt-2">Click to reveal</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MAGIC - Particle trail cards */}
      {theme === "magic" && (
        <section className="px-6 py-8">
          <p className="text-center text-violet-300/80 mb-6">Move your wand across the cards. Click to reveal!</p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <div
                key={item.title}
                ref={el => { particleContainerRefs.current[i] = el; }}
                className="relative h-64 rounded-3xl overflow-hidden cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><text y=%2224%22 font-size=%2224%22>🪄</text></svg>'),auto]"
                onMouseMove={(e) => handleMagicMouseMove(e, i)}
                onClick={() => handleMagicClick(i)}
              >
                {/* Revealed content */}
                <div className={`magic-revealed absolute inset-0 p-6 flex flex-col items-center justify-center transition-all duration-500 ${magicRevealed.includes(i) ? 'opacity-100' : 'opacity-0'}`}>
                  <item.icon size={40} className="mb-3 text-violet-200" />
                  <div className="text-4xl font-bold mb-1">{item.price}</div>
                  <h3 className="text-xl font-bold text-violet-200">{item.title}</h3>
                  <p className="text-violet-300/80 text-sm mt-1">{item.desc}</p>
                </div>

                {/* Cover with starfield */}
                <div className={`magic-cover absolute inset-0 transition-all duration-500 ${magicRevealed.includes(i) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  {/* Starfield */}
                  {STARFIELD_POSITIONS.map((star, j) => (
                    <div
                      key={j}
                      className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                      style={{ left: star.left, top: star.top, animationDelay: star.delay, opacity: star.opacity }}
                    />
                  ))}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl mb-3">🪄</div>
                    <h3 className="text-xl font-bold text-violet-200">{item.title}</h3>
                    <p className="text-violet-400/70 text-sm">Wave & click</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {magicRevealed.length > 0 && (
            <button onClick={() => setMagicRevealed([])} className="mt-6 mx-auto block text-violet-400 hover:text-violet-300 text-sm">
              Reset
            </button>
          )}
        </section>
      )}

      {/* Theme Switcher */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="theme-switcher rounded-2xl p-2 flex flex-col gap-1">
          {THEME_OPTIONS.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); setOpenCard(null); setRevealedCards([]); setMagicRevealed([]); }}
              className={`w-10 h-10 rounded-xl text-xl transition-all ${theme === t.id ? "bg-white/20 scale-110" : "hover:bg-white/10"}`}
              title={t.id}
            >
              {t.emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
