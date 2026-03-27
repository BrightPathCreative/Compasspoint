"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowRight, type LucideIcon } from "lucide-react";
import "@/lib/gsap-config";

const shell =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414]/90 shadow-[0_24px_55px_-22px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04] transition-shadow duration-500 hover:border-[#D4A574]/35 hover:shadow-[0_28px_60px_-24px_rgba(212,165,116,0.12)]";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function ServiceCard({ icon: Icon, title, description, image, imageAlt }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: cardRef });

  const onMouseEnter = contextSafe(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { y: -6, duration: 0.35, ease: "power2.out" });
  });

  const onMouseLeave = contextSafe(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { y: 0, duration: 0.35, ease: "power2.out" });
  });

  return (
    <div
      ref={cardRef}
      className={`service-card ${shell}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
      </div>
      <div className="flex flex-1 flex-col p-8 md:p-9">
        <Icon className="h-9 w-9 text-[#D4A574]" strokeWidth={1.2} aria-hidden />
        <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#F3F4F6] md:text-2xl">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#9CA3AF] md:text-base">{description}</p>
        <a
          href="#cta"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D4A574] opacity-90 transition-opacity hover:opacity-100"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
