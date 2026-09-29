"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const learningItems = [
  {
    label: "JavaScript",
    icon: "JS",
    color: "#f7df1e",
    bgColor: "#f7df1e",
    progress: 35,
    desc: "DOM manipulation, events, functions, and async programming fundamentals.",
    status: "Active",
  },
  {
    label: "SQL & Databases",
    icon: "DB",
    color: "#22d3ee",
    bgColor: "#22d3ee",
    progress: 25,
    desc: "Queries, table design, relationships, and data management fundamentals.",
    status: "Active",
  },
  {
    label: "Backend Development",
    icon: "BE",
    color: "#a78bfa",
    bgColor: "#a78bfa",
    progress: 20,
    desc: "Servers, routing, application logic, and how backends power web apps.",
    status: "Exploring",
  },
  {
    label: "APIs",
    icon: "API",
    color: "#34d399",
    bgColor: "#34d399",
    progress: 20,
    desc: "REST API concepts, HTTP methods, request/response cycles.",
    status: "Exploring",
  },
  {
    label: "Modern Web Technologies",
    icon: "⚙",
    color: "#5569ff",
    bgColor: "#5569ff",
    progress: 30,
    desc: "Current tools, frameworks, and development practices in the industry.",
    status: "Exploring",
  },
];

function LearningCard({ item, index, inView }: { item: typeof learningItems[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors group"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 transition-all duration-300 group-hover:scale-105"
          style={{
            background: `${item.bgColor}12`,
            border: `1px solid ${item.bgColor}25`,
            color: item.color,
          }}
        >
          {item.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-semibold text-white">{item.label}</h4>
            <span
              className="text-[10px] font-mono px-2 py-0.5 rounded-full flex-shrink-0"
              style={{
                background: `${item.color}12`,
                border: `1px solid ${item.color}25`,
                color: item.color,
              }}
            >
              {item.status}
            </span>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-gray-600 font-mono">Learning progress</span>
              <span className="text-[10px] font-mono" style={{ color: item.color }}>{item.progress}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${item.color}80, ${item.color})` }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${item.progress}%` } : { width: 0 }}
                transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.4 + index * 0.1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CurrentlyLearning() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="learning" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />
      <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] orb orb-cyan opacity-10 pointer-events-none" />

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
            <span className="section-label">Currently Learning</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span className="gradient-text">Active</span> Learning Path
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-xl"
          >
            These are the technologies I&apos;m actively developing right now. Progress bars show
            current familiarity — not mastery. Every percentage is earned.
          </motion.p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {learningItems.map((item, i) => (
            <LearningCard key={item.label} item={item} index={i} inView={inView} />
          ))}
        </div>

        {/* Foundation note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="glass-strong rounded-2xl p-6 border border-brand-500/15 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center glass border border-brand-500/25">
              <span className="text-lg">🏛️</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">Foundation: HTML & CSS</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              HTML and CSS are my established foundation — the starting point of this journey and the skills I use daily
              as I continue building. Currently at ~70–75% familiarity and continuously improving.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 sm:ml-auto">
            <span className="badge text-[11px]">HTML ~75%</span>
            <span className="badge text-[11px]">CSS ~70%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
