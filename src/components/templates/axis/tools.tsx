"use client";

import Link from "next/link";
import { motion } from "motion/react";

const ArchitecturalPattern = ({ inverted = false }: { inverted?: boolean }) => (
  <svg
    viewBox="0 0 480 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full max-w-md"
    aria-hidden="true"
  >
    <rect x="40" y="60" width="120" height="320" stroke={inverted ? "#C9962C" : "#1B2A4A"} strokeWidth="2" strokeOpacity="0.8" fill="none" />
    <rect x="180" y="20" width="140" height="360" stroke={inverted ? "#E8B84B" : "#243560"} strokeWidth="2" strokeOpacity="0.9" fill={inverted ? "rgba(201,150,44,0.05)" : "rgba(27,42,74,0.05)"} />
    <rect x="340" y="100" width="100" height="280" stroke={inverted ? "#C9962C" : "#1B2A4A"} strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
    {[40, 80, 120, 160, 200, 240].map((y, i) => (
      <g key={i}>
        <rect x="195" y={y} width="18" height="26" stroke={inverted ? "#E8B84B" : "#C9962C"} strokeWidth="0.5" strokeOpacity="0.5" fill={inverted ? "rgba(232,184,75,0.12)" : "rgba(201,150,44,0.08)"} />
        <rect x="222" y={y} width="18" height="26" stroke={inverted ? "#E8B84B" : "#C9962C"} strokeWidth="0.5" strokeOpacity="0.5" fill={inverted ? "rgba(232,184,75,0.12)" : "rgba(201,150,44,0.08)"} />
        <rect x="249" y={y} width="18" height="26" stroke={inverted ? "#E8B84B" : "#C9962C"} strokeWidth="0.5" strokeOpacity="0.5" fill={inverted ? "rgba(232,184,75,0.12)" : "rgba(201,150,44,0.08)"} />
        <rect x="276" y={y} width="18" height="26" stroke={inverted ? "#E8B84B" : "#C9962C"} strokeWidth="0.5" strokeOpacity="0.5" fill={inverted ? "rgba(232,184,75,0.12)" : "rgba(201,150,44,0.08)"} />
      </g>
    ))}
    <line x1="0" y1="380" x2="480" y2="380" stroke={inverted ? "#C9962C" : "#1B2A4A"} strokeWidth="1" strokeOpacity="0.5" />
    <line x1="40" y1="60" x2="180" y2="20" stroke="#C9962C" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="4 4" />
    <line x1="160" y1="60" x2="180" y2="20" stroke="#C9962C" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="4 4" />
  </svg>
);

export default function ToolFeature() {
  return (
    <div className="flex flex-col">
      {/* Block A — navy background, text left */}
      <motion.section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ backgroundColor: "#1B2A4A" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="grid-a" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9962C" strokeWidth="0.3" strokeOpacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-a)" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-xs tracking-[0.18em] uppercase" style={{ color: "#C9962C", fontFamily: "var(--font-mono-custom-var), monospace" }}>
                Our Origin
              </p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-display-custom), Georgia, serif" }}>
                Building Visibility, Not Just Structures
              </h2>
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: "rgba(203,213,225,0.85)", maxWidth: "480px" }}>
                SSWIBE was founded to close a critical gap — the absence and
                isolation of women in professional gatherings and leadership
                spaces across South Sudan&apos;s built environment.
              </p>
              <div>
                <Link
                  href="#team"
                  className="inline-flex items-center justify-center rounded-full px-6 h-10 text-sm font-medium border transition-colors hover:bg-white/10"
                  style={{ borderColor: "rgba(201,150,44,0.5)", color: "#C9962C" }}
                >
                  Meet the Founders →
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md" style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}>
              <ArchitecturalPattern inverted />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Block B — warm white background, text right */}
      <motion.section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ backgroundColor: "#F2EFE9" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-xs tracking-[0.18em] uppercase" style={{ color: "#0F1F3D", fontFamily: "var(--font-mono-custom-var), monospace", opacity: 0.7 }}>
                Our Network
              </p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={{ color: "#0F1F3D", fontFamily: "var(--font-display-custom), Georgia, serif" }}>
                A Network That Opens Doors
              </h2>
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#6B7280", maxWidth: "480px" }}>
                From mentorship to a shared job board, SSWIBE equips members
                with the connections and resources to advance in architecture,
                planning, and engineering.
              </p>
              <div>
                <Link
                  href="#join"
                  className="shimmer-btn inline-flex items-center justify-center rounded-full px-7 h-11 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#C9962C" }}
                >
                  Join the Network →
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md" style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)" }}>
              <ArchitecturalPattern />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
