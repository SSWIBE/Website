"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { SITE } from "@/lib/constants";

const GeometricIllustration = () => (
  <svg
    viewBox="0 0 480 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-sm lg:max-w-md"
    aria-hidden="true"
  >
    <rect x="60" y="220" width="80" height="280" stroke="#C9962C" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
    <rect x="68" y="228" width="64" height="272" stroke="#C9962C" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
    <rect x="160" y="80" width="100" height="420" stroke="#E8B84B" strokeWidth="2" strokeOpacity="0.9" fill="rgba(201,150,44,0.04)" />
    <rect x="170" y="90" width="80" height="410" stroke="#E8B84B" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
    <rect x="280" y="160" width="90" height="340" stroke="#C9962C" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
    <rect x="390" y="280" width="60" height="220" stroke="#C9962C" strokeWidth="1" strokeOpacity="0.5" fill="none" />
    {[100, 140, 180, 220, 260, 300, 340, 380].map((y, i) => (
      <g key={i}>
        <rect x="175" y={y} width="14" height="20" stroke="#E8B84B" strokeWidth="0.5" strokeOpacity="0.4" fill="rgba(201,150,44,0.1)" />
        <rect x="196" y={y} width="14" height="20" stroke="#E8B84B" strokeWidth="0.5" strokeOpacity="0.4" fill="rgba(201,150,44,0.1)" />
        <rect x="217" y={y} width="14" height="20" stroke="#E8B84B" strokeWidth="0.5" strokeOpacity="0.4" fill="rgba(201,150,44,0.1)" />
        <rect x="238" y={y} width="14" height="20" stroke="#E8B84B" strokeWidth="0.5" strokeOpacity="0.4" fill="rgba(201,150,44,0.1)" />
      </g>
    ))}
    {[180, 220, 260, 300, 340, 380].map((y, i) => (
      <g key={i}>
        <rect x="288" y={y} width="16" height="22" stroke="#C9962C" strokeWidth="0.5" strokeOpacity="0.4" fill="rgba(201,150,44,0.08)" />
        <rect x="312" y={y} width="16" height="22" stroke="#C9962C" strokeWidth="0.5" strokeOpacity="0.4" fill="rgba(201,150,44,0.08)" />
        <rect x="336" y={y} width="16" height="22" stroke="#C9962C" strokeWidth="0.5" strokeOpacity="0.4" fill="rgba(201,150,44,0.08)" />
      </g>
    ))}
    <line x1="60" y1="500" x2="450" y2="500" stroke="#C9962C" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="210" y1="80" x2="210" y2="20" stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.6" />
    <line x1="210" y1="20" x2="260" y2="20" stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.6" />
    <line x1="260" y1="20" x2="260" y2="80" stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.6" />
    <polygon points="235,5 225,20 245,20" stroke="#C9962C" strokeWidth="1" strokeOpacity="0.8" fill="rgba(201,150,44,0.2)" />
    <circle cx="130" cy="195" r="10" stroke="#C9962C" strokeWidth="1.5" strokeOpacity="0.7" fill="rgba(201,150,44,0.15)" />
    <path d="M120 195 Q130 188 140 195" stroke="#C9962C" strokeWidth="2" strokeOpacity="0.8" fill="rgba(201,150,44,0.3)" />
    <circle cx="155" cy="190" r="10" stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.7" fill="rgba(232,184,75,0.15)" />
    <path d="M145 190 Q155 183 165 190" stroke="#E8B84B" strokeWidth="2" strokeOpacity="0.8" fill="rgba(232,184,75,0.3)" />
  </svg>
);

const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <pattern id="grid" width="48" height="48" patternTransform="rotate(8)" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#C9962C" strokeWidth="0.5" strokeOpacity="0.06" />
      </pattern>
      <radialGradient id="bloom" cx="10%" cy="10%" r="50%">
        <stop offset="0%" stopColor="#C9962C" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#C9962C" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#bloom)" />
  </svg>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center overflow-hidden min-h-svh"
      style={{ backgroundColor: "#0F1F3D" }}
    >
      <GridPattern />

      <div className="relative z-10 mx-auto max-w-6xl px-4 w-full pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left — Copy */}
          <motion.div
            className="flex flex-col gap-6 max-w-xl lg:max-w-lg xl:max-w-xl text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "#C9962C", fontFamily: "var(--font-mono-custom-var), monospace" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Founded {SITE.founded} · South Sudan
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: "var(--font-display-custom), Georgia, serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Elevating Women
              <br />
              <span style={{ color: "#C9962C" }}>Who Build</span>
              <br />
              South Sudan
            </motion.h1>

            <motion.p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "rgba(203,213,225,0.9)", maxWidth: "520px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              {SITE.name} is a professional collective of female architects, planners, and engineers shaping the future of South Sudan&apos;s built environment — with visibility, equity, and purpose.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <Link
                href="#join"
                className="shimmer-btn inline-flex items-center justify-center rounded-full px-7 h-11 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C9962C" }}
              >
                Join the Movement
              </Link>
              <Link
                href="#programs"
                className="inline-flex items-center justify-center rounded-full px-7 h-11 text-sm font-medium text-white border transition-colors hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                Explore What We Do ↓
              </Link>
            </motion.div>

            {/* Stat pills */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {["Founded 2025", "BUILD · MENTOR · TRANSFORM", "6 Active Programs"].map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1.5 rounded-full border text-white/80"
                  style={{
                    borderColor: "rgba(201,150,44,0.35)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    fontFamily: "var(--font-mono-custom-var), monospace",
                    backdropFilter: "blur(4px)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {pill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div
            className="flex-shrink-0 w-full max-w-xs lg:max-w-sm xl:max-w-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              <GeometricIllustration />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ opacity: arrowOpacity }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" style={{ color: "rgba(201,150,44,0.6)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
