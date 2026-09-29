"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "Discover",
    phase: "Foundation",
    color: "#5569ff",
    icon: "◈",
    desc: "Learning the fundamentals of web development.",
    detail: "Every journey begins with curiosity. I started by learning HTML and CSS — understanding how web pages are structured, styled, and how the browser renders content. This phase is about building a solid foundation and discovering what web development is really about.",
    tags: ["HTML", "CSS", "Web Fundamentals", "Browser Concepts"],
  },
  {
    number: "02",
    title: "Build",
    phase: "Application",
    color: "#a78bfa",
    icon: "⬡",
    desc: "Turning concepts into practical projects.",
    detail: "Knowledge becomes meaningful when applied. This phase is about building real projects — creating actual web pages and interfaces, applying what I've learned, making mistakes, and discovering new problems to solve. Every project teaches something new.",
    tags: ["Projects", "Practical Experience", "Interface Building", "Iteration"],
  },
  {
    number: "03",
    title: "Experiment",
    phase: "Exploration",
    color: "#22d3ee",
    icon: "◉",
    desc: "Exploring technologies and testing new ideas.",
    detail: "With the basics established, the next step is exploration. Experimenting with JavaScript, databases, APIs, and backend concepts. Testing ideas, breaking things, and understanding why they break. This is where learning accelerates and curiosity leads the way.",
    tags: ["JavaScript", "APIs", "Databases", "Backend Basics"],
  },
  {
    number: "04",
    title: "Improve",
    phase: "Refinement",
    color: "#f59e0b",
    icon: "◇",
    desc: "Learning from mistakes and continuously improving.",
    detail: "Good development is built on iteration. Every project leaves lessons behind — better approaches, cleaner code, smarter architecture. This phase is about reviewing what was built, understanding what could be done better, and approaching the next challenge with improved skills.",
    tags: ["Code Quality", "Clean Code", "Debugging", "Best Practices"],
  },
  {
    number: "05",
    title: "Create",
    phase: "Vision",
    color: "#34d399",
    icon: "✦",
    desc: "Working toward complete real-world applications.",
    detail: "The goal is to build complete, production-ready web applications. Full-stack projects that combine beautiful interfaces with reliable backends, clean databases, and thoughtful user experiences. This is where all the learning, building, experimenting, and improving leads.",
    tags: ["Full-Stack", "Complete Applications", "Real-World Projects", "Impact"],
  },
];

export default function Journey() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="journey" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] orb orb-cyan opacity-10 pointer-events-none" />

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
            <span className="section-label">My Journey</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Learn →{" "}
            <span className="gradient-text">Build</span>
            {" "}→ Experiment
            <br />
            →{" "}
            <span className="text-white/60">Improve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl leading-relaxed"
          >
            My journey as a developer is built around continuous learning and practical experience. Every project gives me
            an opportunity to explore something new and improve with every step.
          </motion.p>
        </div>

        {/* Interactive timeline */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Stage selector */}
          <div className="space-y-2">
            {stages.map((stage, i) => (
              <motion.button
                key={stage.number}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                  active === i
                    ? "glass-strong border"
                    : "glass border border-transparent hover:border-white/8"
                }`}
                style={active === i ? { borderColor: `${stage.color}40`, boxShadow: `0 0 30px ${stage.color}20` } : {}}
              >
                {/* Number */}
                <span
                  className="text-2xl font-bold font-mono flex-shrink-0 transition-colors duration-300"
                  style={{ color: active === i ? stage.color : "rgba(255,255,255,0.15)" }}
                >
                  {stage.number}
                </span>
                <div>
                  <div
                    className="text-sm font-semibold transition-colors duration-200"
                    style={{ color: active === i ? "white" : "rgba(255,255,255,0.5)" }}
                  >
                    {stage.title}
                  </div>
                  <div className="text-xs text-gray-600">{stage.phase}</div>
                </div>
                {/* Active indicator */}
                {active === i && (
                  <motion.div
                    layoutId="stage-dot"
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ background: stage.color }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="glass-strong rounded-3xl p-8 lg:p-10 border border-white/8 relative overflow-hidden"
            >
              {/* BG accent */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${stages[active].color} 0%, transparent 70%)` }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${stages[active].color}15`, border: `1px solid ${stages[active].color}30` }}
                  >
                    {stages[active].icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider mb-1" style={{ color: stages[active].color }}>
                      {stages[active].number} — {stages[active].phase}
                    </div>
                    <h3
                      className="text-3xl font-bold text-white"
                      style={{ fontFamily: "var(--font-space)" }}
                    >
                      {stages[active].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-base mb-4 italic">{stages[active].desc}</p>
                <p className="text-gray-400 leading-relaxed mb-8">{stages[active].detail}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {stages[active].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{
                        background: `${stages[active].color}10`,
                        border: `1px solid ${stages[active].color}25`,
                        color: stages[active].color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/5">
                  {stages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === active ? "24px" : "6px",
                        height: "6px",
                        background: i === active ? stages[active].color : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                  <span className="ml-auto text-xs text-gray-600 font-mono">
                    {active + 1} / {stages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
