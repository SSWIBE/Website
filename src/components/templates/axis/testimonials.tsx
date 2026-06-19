"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import { TESTIMONIALS } from "@/lib/constants";

const Testimonials = () => {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#1B2A4A" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
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
            Community Voices
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-display-custom), Georgia, serif" }}
          >
            What Our Members Are Saying
          </h2>
          <p className="mt-3 text-sm lg:text-base" style={{ color: "rgba(203,213,225,0.7)" }}>
            Real voices from women reshaping South Sudan&apos;s built environment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card
                className="relative rounded-3xl border-0 shadow-none overflow-hidden h-full"
                style={{ backgroundColor: "#243560" }}
              >
                {/* Decorative quote mark */}
                <span
                  className="absolute top-4 left-5 select-none pointer-events-none text-7xl font-bold leading-none"
                  style={{
                    color: "rgba(201,150,44,0.18)",
                    fontFamily: "var(--font-display-custom), Georgia, serif",
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <CardHeader className="flex-row items-center gap-3 space-y-0 pb-4 pt-6">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "var(--font-sans-custom), sans-serif" }}
                    >
                      {t.name}
                    </span>
                    <span
                      className="text-[10px] tracking-wider uppercase"
                      style={{
                        color: "#C9962C",
                        fontFamily: "var(--font-mono-custom-var), monospace",
                      }}
                    >
                      {t.role}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 pb-6">
                  <p
                    className="text-sm italic leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p
                    className="mt-3 text-xs"
                    style={{ color: "rgba(201,150,44,0.6)" }}
                  >
                    {t.handle}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
