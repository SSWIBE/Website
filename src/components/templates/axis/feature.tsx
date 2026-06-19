"use client";

import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Mic2,
  Monitor,
  Users,
  LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { PROGRAMS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Briefcase,
  BookOpen,
  Mic2,
  Monitor,
  Users,
};

const Feature = () => {
  return (
    <section
      id="programs"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-xs tracking-[0.18em] uppercase mb-4"
            style={{
              color: "#C9962C",
              fontFamily: "var(--font-mono-custom-var), monospace",
            }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight max-w-2xl mx-auto mb-4"
            style={{
              color: "#0F1F3D",
              fontFamily: "var(--font-display-custom), Georgia, serif",
            }}
          >
            A Robust Ecosystem for Women in the Built Environment
          </h2>
          <p className="text-base lg:text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Designed to sharpen skills, foster community, and unlock career
            opportunities.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => {
            const Icon = ICON_MAP[program.icon];
            return (
              <motion.div
                key={program.id}
                className="relative flex flex-col gap-4 p-6 rounded-2xl border bg-white group cursor-default overflow-hidden"
                style={{ borderColor: "#E5DDD0" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 20px 40px -12px rgba(15,31,61,0.15)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Gold left border accent */}
                <motion.div
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full"
                  style={{ backgroundColor: "#C9962C" }}
                  initial={{ height: "40px", top: "50%", y: "-50%", bottom: "auto" }}
                  whileHover={{ top: 0, bottom: 0, y: 0, height: "auto" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "#0F1F3D" }}
                >
                  {Icon && (
                    <Icon
                      className="w-6 h-6"
                      style={{ color: "#C9962C" }}
                      strokeWidth={1.5}
                    />
                  )}
                </div>

                {/* Label */}
                <p
                  className="text-[10px] tracking-[0.18em] uppercase"
                  style={{
                    color: "#C9962C",
                    fontFamily: "var(--font-mono-custom-var), monospace",
                  }}
                >
                  {program.id} / {program.title.split(" ")[0].toUpperCase()}
                </p>

                {/* Title */}
                <h3
                  className="text-base font-semibold"
                  style={{
                    color: "#0F1F3D",
                    fontFamily: "var(--font-sans-custom), sans-serif",
                  }}
                >
                  {program.title}
                </h3>

                {/* Body */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "#6B7280" }}
                >
                  {program.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
