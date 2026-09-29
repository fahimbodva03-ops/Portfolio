"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    key: "CLEAN",
    number: "01",
    color: "#5569ff",
    icon: "◈",
    title: "Clean",
    headline: "Readable by default.",
    desc: "Good development starts with clean and understandable code. A project should not only work correctly but also remain easy to understand and maintain. I believe code is communication — not just with machines, but with future developers and future me.",
    detail: "Every function should have a clear purpose. Every variable should have a meaningful name. Every component should have a single responsibility.",
  },
  {
    key: "CREATIVE",
    number: "02",
    color: "#a78bfa",
    icon: "⬡",
    title: "Creative",
    headline: "Different approaches welcome.",
    desc: "Technology gives us the ability to approach the same problem in many different ways. I enjoy experimenting with ideas and finding creative ways to turn concepts into digital experiences. There's always more than one path to a solution.",
    detail: "The most elegant solutions often come from stepping back, questioning assumptions, and trying a completely different approach.",
  },
  {
    key: "PRACTICAL",
    number: "03",
    color: "#22d3ee",
    icon: "◉",
    title: "Practical",
    headline: "Applied over theoretical.",
    desc: "I focus on understanding how technologies are used in real applications rather than learning concepts only in theory. Practical experience teaches things that documentation never can — edge cases, real-world constraints, and the difference between what works in theory and what works in production.",
    detail: "Building real things, even if small and imperfect, teaches far more than studying examples alone.",
  },
  {
    key: "CONTINUOUS",
    number: "04",
    color: "#34d399",
    icon: "✦",
    title: "Continuous",
    headline: "Learning never stops.",
    desc: "The technology landscape changes constantly. I believe a good developer should remain curious, keep learning, and continuously improve their skills. Comfort is the enemy of growth — there's always something new to explore, understand, and apply.",
    detail: "Every project, every mistake, every new concept is an opportunity to become a better developer.",
  },
];

export default function HowIBuild() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="philosophy" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] orb orb-violet opacity-12 pointer-events-none" />

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
            <span className="section-label">How I Build</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-space)" }}
          >
            My Development
            <br />
            <span className="gradient-text">Philosophy</span>
          </motion.h2>
        </div>

        {/* Principle cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              onMouseEnter={() => setHovered(p.key)}
              onMouseLeave={() => setHovered(null)}
              className="relative overflow-hidden rounded-3xl glass border border-white/5 p-7 group transition-all duration-500 cursor-default"
              style={{
                borderColor: hovered === p.key ? `${p.color}25` : undefined,
                transform: hovered === p.key ? "translateY(-6px)" : undefined,
                boxShadow: hovered === p.key ? `0 24px 60px ${p.color}12` : undefined,
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${p.color}15 0%, transparent 70%)`,
                  opacity: hovered === p.key ? 1 : 0.4,
                }}
              />

              <div className="relative z-10">
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-5xl font-bold font-mono opacity-15 transition-opacity duration-300 group-hover:opacity-30"
                    style={{ color: p.color }}
                  >
                    {p.number}
                  </span>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300"
                    style={{
                      background: `${p.color}10`,
                      border: `1px solid ${p.color}25`,
                      color: p.color,
                      boxShadow: hovered === p.key ? `0 0 20px ${p.color}25` : undefined,
                    }}
                  >
                    {p.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-space)", color: p.color }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">{p.headline}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>

                {/* Detail */}
                <div
                  className="border-l-2 pl-4 py-1 transition-colors duration-300"
                  style={{ borderColor: `${p.color}40` }}
                >
                  <p className="text-xs text-gray-500 italic leading-relaxed">{p.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
