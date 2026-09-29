"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const goals = [
  { icon: "🏗️", title: "Build Complete Applications", desc: "Full-stack web applications that are modern, scalable, and reliable from frontend to backend." },
  { icon: "🎯", title: "Solve Real Problems", desc: "Work on projects that challenge me technically and creatively while creating real value for users." },
  { icon: "🌱", title: "Deepen Understanding", desc: "Continuously explore advanced technologies and software development principles." },
  { icon: "🤝", title: "Collaborate & Contribute", desc: "Work with talented people and contribute to projects that make a meaningful difference." },
];

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="vision" ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px divider-glow" />

      {/* Large parallax orbs */}
      <motion.div
        style={{ y }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
      >
        <div className="w-full h-full orb orb-blue opacity-15" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
      >
        <div className="w-full h-full orb orb-violet opacity-15" />
      </motion.div>

      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4 justify-center"
        >
          <span className="w-8 h-px bg-cyan-400 opacity-60" />
          <span className="section-label">My Vision</span>
          <span className="w-8 h-px bg-cyan-400 opacity-60" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-8"
        >
          <h2
            className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] mb-6"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span className="text-white/40 block text-4xl sm:text-5xl md:text-6xl mb-2">Building For</span>
            <span className="gradient-text text-glow">What&apos;s Next.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-gray-300 text-lg leading-relaxed text-center mb-5"
          >
            My long-term goal is to become a highly skilled Full-Stack Web Developer capable of
            designing and developing complete, modern, scalable, reliable, and user-focused web applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="text-gray-500 text-base leading-relaxed text-center"
          >
            As I grow, I want to deepen my understanding of software development, explore advanced technologies,
            collaborate with talented people, and contribute to projects that make a meaningful difference.
          </motion.p>
        </div>

        {/* Goal cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-brand-500/20 transition-colors group"
            >
              <div className="text-2xl mb-3">{goal.icon}</div>
              <h4 className="text-sm font-semibold text-white mb-2">{goal.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{goal.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Portfolio evolution note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="glass-strong rounded-3xl p-8 border border-brand-500/15 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/30 to-violet-950/20 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-sm text-brand-400 font-mono tracking-wider uppercase mb-3">Portfolio Evolution</div>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
              I also want my portfolio to evolve along with me — not simply as a showcase of finished projects, but as a
              reflection of my{" "}
              <span className="text-white">skills, progress, experiments, creativity, and continuous learning</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
