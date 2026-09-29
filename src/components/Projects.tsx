"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] orb orb-blue opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
            <span className="section-label">Projects</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            My <span className="gradient-text">Work</span>
          </motion.h2>
        </div>

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative overflow-hidden rounded-3xl glass-strong border border-white/8 p-16 text-center"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 orb orb-blue opacity-20"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/4 right-1/4 w-48 h-48 orb orb-violet opacity-15"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Grid */}
            <div className="absolute inset-0 grid-overlay opacity-30" />
          </div>

          {/* Floating orbit rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-64 h-64 rounded-full border border-brand-500/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full border border-violet-500/8"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 max-w-lg mx-auto">
            {/* Icon */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 mx-auto mb-8 rounded-3xl glass flex items-center justify-center border border-brand-500/25"
            >
              <svg className="w-9 h-9 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </motion.div>

            <h3
              className="text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Projects Are Being Built
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              New experiences coming soon. I&apos;m currently building projects while
              learning — each one an opportunity to apply real skills and explore something new.
            </p>

            <p className="text-gray-500 text-sm mb-10">
              This section will evolve as I complete projects. Every project added here
              will be genuine work — no placeholders, no fake demos.
            </p>

            {/* Status indicators */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {[
                { label: "In Progress", color: "#5569ff", pulse: true },
                { label: "HTML & CSS Projects", color: "#22d3ee", pulse: false },
                { label: "JavaScript Practice", color: "#a78bfa", pulse: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/8"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${item.pulse ? "animate-pulse" : ""}`}
                    style={{ background: item.color }}
                  />
                  <span className="text-xs text-gray-400 font-mono">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href="https://github.com/fahimbodva03-ops"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-outline text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Follow on GitHub
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-sm font-semibold"
              >
                <span className="relative z-10">Get Notified</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
