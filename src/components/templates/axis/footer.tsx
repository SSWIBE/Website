"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  const socialIcons = [
    { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: "/icons/instagram.svg" },
    { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: "/icons/linkedin.svg" },
    { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: "/icons/facebook.svg" },
    { label: "TikTok", href: SOCIAL_LINKS.tiktok, icon: "/icons/tiktok.svg" },
    { label: "X", href: SOCIAL_LINKS.twitter, icon: "/icons/x.svg" },
  ];

  return (
    <motion.footer
      className="w-full border-t"
      style={{
        backgroundColor: "#080E1C",
        borderTopColor: "rgba(201,150,44,0.2)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Left — Branding */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col leading-none">
              <span
                className="text-white font-bold text-2xl tracking-wider"
                style={{ fontFamily: "var(--font-display-custom), Georgia, serif" }}
              >
                {SITE.name}
              </span>
              <span
                className="text-sm italic mt-1"
                style={{ color: "rgba(201,150,44,0.75)" }}
              >
                {SITE.tagline}
              </span>
            </div>
            <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              © {SITE.foundedYear} {SITE.fullName} ({SITE.name}).
              <br />All rights reserved.
            </p>
          </div>

          {/* Center — Navigation */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{
                color: "#C9962C",
                fontFamily: "var(--font-mono-custom-var), monospace",
              }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C9962C";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.55)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — Socials + Contact */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{
                color: "#C9962C",
                fontFamily: "var(--font-mono-custom-var), monospace",
              }}
            >
              Connect With Us
            </p>
            <div className="flex flex-row gap-4">
              {socialIcons.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                    className="w-5 h-5 transition-all duration-200 group-hover:opacity-100"
                    style={{
                      filter:
                        "brightness(0) invert(1)",
                      opacity: 0.5,
                    }}
                  />
                </Link>
              ))}
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm transition-colors mt-1"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#C9962C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.55)";
              }}
            >
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 text-center"
          style={{ borderTopColor: "rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Built with purpose. Designed for equity.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
