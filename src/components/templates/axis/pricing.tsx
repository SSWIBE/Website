"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { BENEFITS, SITE } from "@/lib/constants";

const Pricing = () => {
  return (
    <section
      id="join"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0F1F3D 0%, #1B2A4A 50%, rgba(201,150,44,0.15) 100%)",
        }}
      />

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="grid-join" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9962C" strokeWidth="0.3" strokeOpacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-join)" />
      </svg>

      <motion.div
        className="relative mx-auto max-w-2xl px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p
          className="text-xs tracking-[0.18em] uppercase mb-4"
          style={{ color: "#C9962C", fontFamily: "var(--font-mono-custom-var), monospace" }}
        >
          Join the Movement
        </p>

        <h2
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-5"
          style={{ fontFamily: "var(--font-display-custom), Georgia, serif" }}
        >
          Shape the Future of South Sudan Together
        </h2>

        <p
          className="text-base lg:text-lg mb-10 leading-relaxed"
          style={{ color: "rgba(203,213,225,0.8)" }}
        >
          The future of architecture is inclusive. SSWIBE is redefining what is
          possible for women in South Sudan — proving that when we include each
          other, the entire industry elevates.
        </p>

        {/* Glassmorphism card */}
        <div
          className="rounded-3xl p-8 lg:p-10 text-left"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(201,150,44,0.25)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Card header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-display-custom), Georgia, serif" }}
              >
                SSWIBE Membership
              </h3>
              <p className="text-sm mt-1" style={{ color: "rgba(203,213,225,0.65)" }}>
                For female architects, planners, engineers, and students
              </p>
            </div>
            <span
              className="self-start sm:self-auto text-xs font-bold px-4 py-1.5 rounded-full border"
              style={{
                color: "#C9962C",
                borderColor: "rgba(201,150,44,0.5)",
                fontFamily: "var(--font-mono-custom-var), monospace",
                letterSpacing: "0.12em",
                backgroundColor: "rgba(201,150,44,0.08)",
              }}
            >
              FREE TO JOIN
            </span>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C9962C" }} strokeWidth={2.5} />
                <span className="text-sm text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`mailto:${SITE.email}?subject=SSWIBE Membership Application`}
            className="shimmer-btn w-full inline-flex items-center justify-center rounded-full h-12 text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9962C" }}
          >
            Apply to Join →
          </a>

          <p className="text-center text-sm mt-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            Questions?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors"
              style={{ color: "rgba(201,150,44,0.7)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#C9962C"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,150,44,0.7)"; }}
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
