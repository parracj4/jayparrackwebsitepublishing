"use client";

import { useEffect, useRef } from "react";

export default function ScrollBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / docHeight, 1);

      // Interpolate HSL values based on scroll
      // Start: hsl(240, 20%, 3%) - deep blue-black
      // Middle: hsl(270, 30%, 5%) - subtle purple
      // End: hsl(200, 25%, 4%) - subtle teal
      let hue, sat, light;

      if (progress < 0.5) {
        const t = progress * 2;
        hue = 240 + (270 - 240) * t;
        sat = 20 + (30 - 20) * t;
        light = 3 + (5 - 3) * t;
      } else {
        const t = (progress - 0.5) * 2;
        hue = 270 + (200 - 270) * t;
        sat = 30 + (25 - 30) * t;
        light = 5 + (4 - 5) * t;
      }

      bgRef.current.style.backgroundColor = `hsl(${hue}, ${sat}%, ${light}%)`;
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 transition-colors duration-300"
      style={{ backgroundColor: "hsl(240, 20%, 3%)" }}
    />
  );
}




