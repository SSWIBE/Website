import Image from "next/image";
import { motion } from "motion/react";

const partners = [
  { name: "ALX Africa", description: "Skills & Leadership", logo: "/logo/partners/alx.png" },
  { name: "African Union", description: "African Union Commission", logo: "/logo/partners/african-union.png" },
  { name: "UN-Habitat", description: "Urban Settlements", logo: "/logo/partners/un-habitat.png" },
  { name: "SSAU", description: "S. Sudan Architects Union", logo: null },
];

const Companies = () => {
  return (
    <motion.section
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: "#0F1F3D" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <p
          className="text-center text-sm tracking-[0.18em] uppercase mb-12"
          style={{
            color: "#C9962C",
            fontFamily: "var(--font-mono-custom-var), monospace",
          }}
        >
          In Partnership With
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex flex-col items-center justify-center gap-3 h-40 lg:h-52 rounded-2xl border transition-all duration-300 group cursor-default px-6"
              style={{
                borderColor: "rgba(201,150,44,0.2)",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{
                borderColor: "rgba(201,150,44,0.5)",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={210}
                  height={84}
                  className="h-16 lg:h-20 w-auto object-contain transition-all duration-300"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.75 }}
                />
              ) : (
                <span
                  className="text-2xl lg:text-3xl font-semibold transition-colors duration-300 text-white"
                  style={{
                    fontFamily: "var(--font-display-custom), Georgia, serif",
                  }}
                >
                  {partner.name}
                </span>
              )}
              <span
                className="text-xs tracking-wide text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  color: "#C9962C",
                  fontFamily: "var(--font-mono-custom-var), monospace",
                }}
              >
                {partner.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Companies;
