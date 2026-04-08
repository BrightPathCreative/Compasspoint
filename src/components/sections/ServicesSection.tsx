"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Compass, TrendingUp, Users } from "lucide-react";
import "@/lib/gsap-config";
import { SectionWrapper } from "../global/SectionWrapper";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: Compass,
    title: "Strategic Advisory",
    description:
      "We work alongside founders and leadership teams to build the strategic foundations that support sustainable scale. From business model refinement and operational efficiency to market positioning and growth frameworks, we bring clarity to complexity.",
    image: "/innovation-growth.jpg",
    imageAlt: "Strategy and growth",
  },
  {
    icon: TrendingUp,
    title: "Investment Readiness",
    description:
      "Whether you are preparing for your first raise or a Series B, we help you tell your story with precision. Our investment readiness service covers pitch deck development, financial modelling, due diligence preparation, and ongoing investor relations support.",
    image: "/section-strategy.jpg",
    imageAlt: "Investment and preparation",
  },
  {
    icon: Users,
    title: "Executive Coaching",
    description:
      "Leadership is the single greatest lever in any business. Amelia works directly with founders and executives in a structured 1:1 coaching engagement, covering high-stakes decision-making, leadership development, and navigating the personal and professional challenges of building at scale.",
    image: "/coaching.jpg",
    imageAlt: "Executive coaching conversation",
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        y: 56,
        opacity: 0,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <SectionWrapper id="services" ref={containerRef} className="bg-[var(--bg-primary)]">
      <h2 className="text-center font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[var(--text-primary)] md:text-5xl">
        Our Expertise
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-center text-base text-[var(--text-secondary)] md:text-lg">
        Enterprise-grade support across strategy, capital readiness, and leadership.
      </p>

      <div className="services-grid mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-10">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            description={s.description}
            image={s.image}
            imageAlt={s.imageAlt}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
