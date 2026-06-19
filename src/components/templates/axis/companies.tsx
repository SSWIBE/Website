import { motion } from "motion/react";

const partners = [
  { name: "ALX Africa", description: "Skills & Leadership" },
  { name: "AUC", description: "African Union Commission" },
  { name: "SSAU", description: "S. Sudan Architects Union" },
  { name: "UN-Habitat", description: "Urban Settlements" },
];

const Companies = () => {
  return (
    <motion.section
      className="w-full py-16 lg:py-20"
      style={{ backgroundColor: "#F2EFE9" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <p
          className="text-center text-xs tracking-[0.18em] uppercase mb-10"
          style={{
            color: "#6B7280",
            fontFamily: "var(--font-mono-custom-var), monospace",
          }}
        >
          In Partnership With
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-t"
          style={{ borderColor: "#E5DDD0" }}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center gap-2 h-28 lg:h-36 border-b border-r transition-all duration-300 group cursor-default"
              style={{ borderColor: "#E5DDD0" }}
            >
              <span
                className="text-base lg:text-lg font-semibold transition-colors duration-300"
                style={{
                  color: "#6B7280",
                  fontFamily: "var(--font-display-custom), Georgia, serif",
                }}
              >
                {partner.name}
              </span>
              <span
                className="text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  color: "#C9962C",
                  fontFamily: "var(--font-mono-custom-var), monospace",
                }}
              >
                {partner.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Companies;
