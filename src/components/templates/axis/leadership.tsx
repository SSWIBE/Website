"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { FOUNDERS, TEAM } from "@/lib/constants";

const AvatarFallback = ({ initials }: { initials: string }) => (
  <div
    className="w-full h-full flex items-center justify-center text-white font-bold text-xl"
    style={{
      background: "linear-gradient(135deg, #1B2A4A 0%, #243560 100%)",
      fontFamily: "var(--font-display-custom), Georgia, serif",
    }}
  >
    <span style={{ color: "#C9962C" }}>{initials}</span>
  </div>
);

const FounderCard = ({
  name,
  role,
  bio,
  image,
  initials,
  index,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  index: number;
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  return (
  <motion.div
    className="flex flex-col rounded-2xl overflow-hidden border group"
    style={{ borderColor: "#E5DDD0" }}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.45, delay: index * 0.1 }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    {/* Photo */}
    <div
      className="relative w-full aspect-[4/3] overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 93%, 0 100%)" }}
    >
      {imageFailed ? (
        <AvatarFallback initials={initials} />
      ) : (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={() => setImageFailed(true)}
        />
      )}
      {/* Warm hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(201,150,44,0.1)", mixBlendMode: "multiply" }}
      />
    </div>

    {/* Content */}
    <div
      className="flex flex-col gap-2 p-5 border-l-4 bg-white flex-1"
      style={{ borderLeftColor: "#C9962C" }}
    >
      <h3
        className="font-bold text-base"
        style={{
          color: "#0F1F3D",
          fontFamily: "var(--font-display-custom), Georgia, serif",
        }}
      >
        {name}
      </h3>
      <p
        className="text-[10px] tracking-[0.15em] uppercase italic"
        style={{
          color: "#C9962C",
          fontFamily: "var(--font-mono-custom-var), monospace",
        }}
      >
        {role}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
        {bio}
      </p>
    </div>
  </motion.div>
  );
};

const TeamCard = ({
  name,
  role,
  bio,
  image,
  initials,
  index,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  index: number;
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  return (
  <motion.div
    className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border bg-white"
    style={{ borderColor: "#E5DDD0" }}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.45, delay: index * 0.1 }}
    whileHover={{ y: -3, transition: { duration: 0.2 } }}
  >
    {/* Avatar */}
    <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2" style={{ borderColor: "rgba(201,150,44,0.3)" }}>
      {imageFailed ? (
        <AvatarFallback initials={initials} />
      ) : (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="96px"
          onError={() => setImageFailed(true)}
        />
      )}
    </div>

    <div className="flex flex-col gap-1">
      <h4
        className="font-bold text-sm"
        style={{
          color: "#0F1F3D",
          fontFamily: "var(--font-display-custom), Georgia, serif",
        }}
      >
        {name}
      </h4>
      <p
        className="text-[10px] tracking-[0.12em] uppercase"
        style={{
          color: "#C9962C",
          fontFamily: "var(--font-mono-custom-var), monospace",
        }}
      >
        {role}
      </p>
      <p className="text-xs leading-relaxed mt-1" style={{ color: "#6B7280" }}>
        {bio}
      </p>
    </div>
  </motion.div>
  );
};

const Leadership = () => {
  return (
    <section
      id="team"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F2EFE9" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
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
            Our Leadership
          </p>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight"
            style={{
              color: "#0F1F3D",
              fontFamily: "var(--font-display-custom), Georgia, serif",
            }}
          >
            The Founders Driving Change
          </h2>
        </motion.div>

        {/* Founders grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FOUNDERS.map((founder, index) => (
            <FounderCard key={founder.name} {...founder} index={index} />
          ))}
        </div>

        {/* Our Team subheading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3
            className="text-2xl lg:text-3xl font-bold"
            style={{
              color: "#0F1F3D",
              fontFamily: "var(--font-display-custom), Georgia, serif",
            }}
          >
            Our Team
          </h3>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, index) => (
            <TeamCard key={member.name} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
