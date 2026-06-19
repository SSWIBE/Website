"use client";

import Navbar from "@/components/templates/axis/navbar";
import Hero from "@/components/templates/axis/hero";
import Companies from "@/components/templates/axis/companies";
import Feature from "@/components/templates/axis/feature";
import ToolFeature from "@/components/templates/axis/tools";
import Stats from "@/components/templates/axis/stats";
import Leadership from "@/components/templates/axis/leadership";
import Testimonials from "@/components/templates/axis/testimonials";
import Pricing from "@/components/templates/axis/pricing";
import Footer from "@/components/templates/axis/footer";

export default function Page() {
  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#FAFAF8" }}>
      <Navbar />

      <main id="main-content">
        {/* Hero — full viewport height, navy */}
        <Hero />

        {/* Partners strip — warm surface */}
        <Companies />

        {/* What We Do — 6 program cards */}
        <Feature />

        {/* Feature blocks — alternating navy / warm white */}
        <ToolFeature />

        {/* Impact stats — navy bar with count-up */}
        <Stats />

        {/* Leadership — founders + team */}
        <Leadership />

        {/* Testimonials — community voices, navy */}
        <Testimonials />

        {/* Join CTA — glassmorphism card */}
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
