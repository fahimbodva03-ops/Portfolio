"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fahimbodva03-ops",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "#ffffff",
    handle: "fahimbodva03-ops",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fahim-bodva-b6a424403/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    color: "#0077b5",
    handle: "fahim-bodva",
  },
  {
    label: "Email",
    href: "mailto:fahimbodva@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#5569ff",
    handle: "fahimbodva@gmail.com",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] orb orb-blue opacity-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] orb orb-violet opacity-10" />
        <div className="absolute inset-0 grid-overlay opacity-10" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
            <span className="section-label">Contact</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Meaningful</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-lg mx-auto leading-relaxed"
          >
            Whether it is a simple website, a full-scale web application, an experimental project, or a completely
            new idea — I&apos;m always interested in exploring what can be created with technology.
          </motion.p>
        </div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="glass-strong rounded-3xl p-8 sm:p-12 border border-white/8 relative overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-500/8 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-500/8 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left: CTA */}
            <div className="flex-1">
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border border-brand-500/25 mb-6">
                <svg className="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I&apos;m always open to conversations about web development, new projects, opportunities, or just
                sharing ideas. Drop a message — I&apos;d love to hear from you.
              </p>

              <motion.a
                href="mailto:fahimbodva@gmail.com"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl btn-primary text-sm font-semibold group"
              >
                <span className="relative z-10">Send a Message</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <p className="text-xs text-gray-600 mt-3 font-mono">
                fahimbodva@gmail.com
              </p>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px self-stretch bg-white/5" />

            {/* Right: Social links */}
            <div className="lg:w-64">
              <p className="text-xs text-gray-600 font-mono tracking-wider uppercase mb-5">Find me on</p>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(link.label)}
                    onMouseLeave={() => setHovered(null)}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/5 hover:border-white/15 transition-all duration-200 group"
                  >
                    <span
                      className="transition-colors duration-200"
                      style={{ color: hovered === link.label ? link.color : "rgba(255,255,255,0.4)" }}
                    >
                      {link.icon}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors leading-tight">{link.label}</span>
                      <span className="text-[10px] text-gray-600 font-mono truncate">{link.handle}</span>
                    </div>
                    <svg
                      className="w-3 h-3 text-gray-600 group-hover:text-gray-400 ml-auto transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Availability badge */}
              <div className="mt-6 glass rounded-xl p-3 border border-emerald-500/15">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-xs text-gray-400">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
