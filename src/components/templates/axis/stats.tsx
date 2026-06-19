"use client";

import Counter from "@/components/counter";
import { motion } from "motion/react";
import { STATS } from "@/lib/constants";

const Stats = () => {
  return (
    <motion.section
      className="relative w-full py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "#0F1F3D" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Diagonal hatching overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="hatch" width="16" height="16" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="16" stroke="#C9962C" strokeWidth="0.5" strokeOpacity="0.04" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hatch)" />
      </svg>

      <div className="relative mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center py-10 px-6 text-center relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              {/* Divider (hidden on last in row) */}
              {index < STATS.length - 1 && (
                <div
                  className="absolute right-0 top-1/4 h-1/2 w-px hidden lg:block"
                  style={{ backgroundColor: "rgba(201,150,44,0.2)" }}
                />
              )}

              <div
                className="text-5xl lg:text-6xl font-bold mb-2 tabular-nums"
                style={{
                  color: "#C9962C",
                  fontFamily: "var(--font-display-custom), Georgia, serif",
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p
                className="text-xs tracking-[0.15em] uppercase"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "var(--font-mono-custom-var), monospace",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
