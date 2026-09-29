"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const year = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 rounded-lg glass flex items-center justify-center border border-brand-500/25">
                <span className="text-xs font-bold gradient-text" style={{ fontFamily: "var(--font-space)" }}>
                  FB
                </span>
              </div>
              <span
                className="text-base font-semibold text-white"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Fahim Bodva
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-1">Aspiring Full-Stack Web Developer</p>
            <p className="text-[11px] text-gray-700 max-w-xs italic leading-relaxed">
              &quot;Learn continuously. Build intentionally. Solve creatively. Grow relentlessly.&quot;
            </p>
          </div>

          {/* Center: Nav links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Journey", href: "#journey" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs text-gray-600 hover:text-white transition-colors font-mono"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/fahimbodva03-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-white transition-colors font-mono"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fahim-bodva-b6a424403/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-white transition-colors font-mono"
            >
              LinkedIn
            </a>
            <a
              href="mailto:fahimbodva@gmail.com"
              className="text-xs text-gray-600 hover:text-white transition-colors font-mono"
            >
              Email
            </a>
          </div>

          {/* Right: Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/8 hover:border-white/20 transition-colors text-xs text-gray-500 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to top
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/5" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-700">
          <span>© {year} Fahim Bodva. All Rights Reserved.</span>
          <span className="font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-60" />
            Built with Next.js · React Three Fiber · Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
