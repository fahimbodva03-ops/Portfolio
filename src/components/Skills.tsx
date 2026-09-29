"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "◈",
    color: "brand",
    skills: [
      { name: "HTML", level: 75, status: "familiar" as const, desc: "Semantic markup, page structure, accessibility basics." },
      { name: "CSS", level: 70, status: "familiar" as const, desc: "Styling, layouts, flexbox, grid, responsive design." },
      { name: "Responsive Design", level: 65, status: "familiar" as const, desc: "Mobile-first design, media queries, adaptive layouts." },
      { name: "JavaScript", level: 35, status: "learning" as const, desc: "DOM manipulation, events, functions, async basics." },
      { name: "UI Development", level: 45, status: "learning" as const, desc: "Building interactive, user-friendly interfaces." },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⬡",
    color: "violet",
    skills: [
      { name: "Backend Concepts", level: 25, status: "learning" as const, desc: "Understanding servers, APIs, and application logic." },
      { name: "APIs", level: 20, status: "learning" as const, desc: "REST API concepts, request/response cycle." },
      { name: "Authentication", level: 15, status: "learning" as const, desc: "Understanding auth flows and security basics." },
      { name: "Server-side Logic", level: 20, status: "learning" as const, desc: "Application logic, data processing, routing." },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "◉",
    color: "cyan",
    skills: [
      { name: "SQL", level: 25, status: "learning" as const, desc: "Basic queries, SELECT, INSERT, UPDATE, DELETE." },
      { name: "Database Design", level: 20, status: "learning" as const, desc: "Tables, relationships, schema planning." },
      { name: "Data Management", level: 25, status: "learning" as const, desc: "CRUD operations, data organization." },
    ],
  },
  {
    id: "dev",
    label: "Development",
    icon: "◇",
    color: "emerald",
    skills: [
      { name: "Problem Solving", level: 60, status: "familiar" as const, desc: "Breaking down problems, logical thinking, iteration." },
      { name: "Clean Code", level: 50, status: "familiar" as const, desc: "Readable, maintainable, well-structured code." },
      { name: "Debugging", level: 45, status: "familiar" as const, desc: "Finding and fixing bugs, browser dev tools." },
      { name: "Continuous Learning", level: 90, status: "familiar" as const, desc: "Self-directed learning, staying curious, improving daily." },
    ],
  },
];

const colorMap = {
  brand: { bar: "from-brand-500 to-brand-400", badge: "badge", glow: "rgba(85,105,255,0.3)", border: "rgba(85,105,255,0.3)", icon: "text-brand-400" },
  violet: { bar: "from-violet-500 to-violet-400", badge: "badge-violet", glow: "rgba(167,139,250,0.3)", border: "rgba(167,139,250,0.3)", icon: "text-violet-400" },
  cyan: { bar: "from-cyan-500 to-cyan-400", badge: "badge-cyan", glow: "rgba(34,211,238,0.3)", border: "rgba(34,211,238,0.3)", icon: "text-cyan-400" },
  emerald: { bar: "from-emerald-500 to-emerald-400", badge: "badge", glow: "rgba(52,211,153,0.3)", border: "rgba(52,211,153,0.3)", icon: "text-emerald-400" },
};

function SkillBar({ skill, color, inView }: { skill: typeof categories[0]["skills"][0]; color: keyof typeof colorMap; inView: boolean }) {
  const colors = colorMap[color];
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white/90">{skill.name}</span>
          <span className={`${skill.status === "familiar" ? "badge" : "badge-cyan"} text-[10px] py-0.5`}>
            {skill.status === "familiar" ? "Familiar" : "Learning"}
          </span>
        </div>
        <span className={`text-xs font-mono ${colors.icon}`}>{skill.level}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${colors.bar} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
        />
      </div>
      <p className="text-[11px] text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {skill.desc}
      </p>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const active = categories.find((c) => c.id === activeCategory)!;
  const colors = colorMap[active.color as keyof typeof colorMap];

  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] orb orb-violet opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
            <span className="section-label">Tech Stack</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Tools I Use.{" "}
            <span className="gradient-text">Technologies</span>
            <br className="hidden sm:block" />
            I&apos;m Learning.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm max-w-lg mx-auto"
          >
            My skill set is continuously evolving. Every new technology is another opportunity to expand what I can build.
          </motion.p>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6 mb-10 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-400" />
            <span className="text-xs text-gray-400 font-mono">Currently Familiar With</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="text-xs text-gray-400 font-mono">Currently Learning / Exploring</span>
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10 justify-center"
        >
          {categories.map((cat) => {
            const c = colorMap[cat.color as keyof typeof colorMap];
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "glass-strong border text-white"
                    : "glass border border-white/5 text-gray-500 hover:text-white hover:border-white/15"
                }`}
                style={isActive ? { borderColor: c.border, boxShadow: `0 0 20px ${c.glow}` } : {}}
              >
                <span className={isActive ? c.icon : "text-gray-600"}>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="grid md:grid-cols-2 gap-6"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors"
              >
                <SkillBar skill={skill} color={active.color as keyof typeof colorMap} inView={inView} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-600 font-mono tracking-wide">
            Skill levels represent current familiarity, not mastery.{" "}
            <span className="text-gray-500">Always growing.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
