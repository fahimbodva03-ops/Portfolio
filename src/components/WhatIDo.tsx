"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Frontend Development",
    color: "#5569ff",
    status: "Active Focus",
    desc: "I enjoy creating clean, responsive, and user-friendly interfaces that provide a smooth experience across different devices and screen sizes. My frontend journey began with HTML and CSS, and I'm continuously developing my understanding of modern frontend development.",
    tools: ["HTML", "CSS", "Responsive Design", "JavaScript"],
    detail: "Building structured, visually appealing, and accessible web interfaces.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "Backend Development",
    color: "#a78bfa",
    status: "Currently Learning",
    desc: "I'm building my understanding of the technologies that power applications behind the interface — including servers, APIs, databases, authentication, and application logic. My goal is to understand how all of these pieces work together to create reliable and scalable web applications.",
    tools: ["APIs", "Databases", "SQL", "Authentication"],
    detail: "Learning how servers, APIs, and databases power modern applications.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Problem Solving",
    color: "#22d3ee",
    status: "Core Skill",
    desc: "Development is not simply about writing code. It is about understanding a problem, breaking it into smaller parts, finding an effective solution, and continuously improving that solution. I enjoy approaching challenges with curiosity and using each problem as an opportunity to learn something new.",
    tools: ["Logical Thinking", "Debugging", "Iteration", "Research"],
    detail: "Breaking complex problems into manageable, solvable parts.",
  },
];

export default function WhatIDo() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="whatido" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] orb orb-blue opacity-10 pointer-events-none" />

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
            <span className="section-label">What I Do</span>
            <span className="w-8 h-px bg-cyan-400 opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Areas of <span className="gradient-text">Focus</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative overflow-hidden rounded-3xl glass border border-white/5 p-7 cursor-default group transition-all duration-500"
              style={{
                borderColor: hoveredCard === i ? `${service.color}30` : undefined,
                boxShadow: hoveredCard === i ? `0 30px 80px ${service.color}15, 0 0 0 1px ${service.color}20` : undefined,
                transform: hoveredCard === i ? "translateY(-8px)" : undefined,
              }}
            >
              {/* BG accent */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${service.color}12 0%, transparent 70%)` }}
              />

              {/* Top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)`,
                  opacity: hoveredCard === i ? 1 : 0,
                }}
              />

              <div className="relative z-10">
                {/* Icon + status */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `${service.color}12`,
                      border: `1px solid ${service.color}25`,
                      color: service.color,
                      boxShadow: hoveredCard === i ? `0 0 20px ${service.color}30` : undefined,
                    }}
                  >
                    {service.icon}
                  </div>
                  <span
                    className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background: `${service.color}12`,
                      border: `1px solid ${service.color}25`,
                      color: service.color,
                    }}
                  >
                    {service.status}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {service.title}
                </h3>

                <p className="text-xs mb-4" style={{ color: `${service.color}bb` }}>
                  {service.detail}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] px-2.5 py-1 rounded-lg font-mono"
                      style={{
                        background: `${service.color}08`,
                        border: `1px solid ${service.color}20`,
                        color: `${service.color}aa`,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
