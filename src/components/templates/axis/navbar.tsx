"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// Button is used for the hamburger icon-button only
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 50);
    if (latest > previous && latest > 150) {
      setIsHidden(true);
      setIsOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 mx-auto w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isHidden ? 0 : 1, y: isHidden ? -20 : 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="relative mx-auto max-w-6xl"
        animate={{ scale: isScrolled ? 0.98 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="flex flex-row items-center justify-between gap-4 rounded-full border-2 px-4 py-1.5"
          animate={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderColor: "#C9962C",
            backdropFilter: "blur(12px)",
            boxShadow: isScrolled
              ? "0 4px 24px -6px rgba(0,0,0,0.15)"
              : "0 0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-row items-center gap-2 ml-2"
            aria-label={SITE.fullName}
          >
            <Image
              src="/logo/sswibe-logo.svg"
              alt={SITE.fullName}
              width={140}
              height={70}
              className="h-[72px] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-row items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium transition-colors relative group"
                style={{ color: "#0F1F3D" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9962C] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex flex-row items-center gap-3">
            <Link
              href="#contact"
              className="text-base font-medium transition-colors px-3 py-1.5 rounded-full hover:bg-black/5"
              style={{ color: "#0F1F3D" }}
            >
              Contact
            </Link>
            <Link
              href="#join"
              className="shimmer-btn inline-flex items-center justify-center rounded-full px-5 h-10 text-base font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9962C" }}
            >
              Join SSWIBE
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden flex-row items-center gap-2">
            <Link
              href="#join"
              className="shimmer-btn inline-flex items-center justify-center rounded-full px-4 h-8 text-xs font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9962C" }}
            >
              Join
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-black/5"
              style={{ color: "#0F1F3D" }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </motion.div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden lg:hidden"
            >
              <div
                className="flex flex-col gap-2 rounded-2xl border border-white/10 p-4 backdrop-blur-xl"
                style={{ backgroundColor: "rgba(15, 31, 61, 0.96)" }}
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="border-t border-white/10 my-1"
                />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="px-4 py-2"
                >
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {SITE.email}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
