import Image from "next/image";
import { getServiceImagePath } from "@/lib/services";

/** Hero for /services — plum background, strategy image wash, H1 + “7 service areas”. */
export function ServicesOverviewHero() {
  const heroBg = getServiceImagePath("business-strategy-consulting");

  return (
    <section className="relative overflow-hidden bg-[var(--royal-plum)] px-4 py-[80px] pb-[68px] sm:px-6 md:px-10 md:py-[88px] md:pb-20 lg:px-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover object-[center_40%] opacity-[0.12]"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative z-[2] mx-auto max-w-[min(1180px,calc(100%-0.5rem))]">
        <div className="max-w-[640px]">
          <p className="mb-[18px] flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-[0.6rem] uppercase tracking-[0.26em] text-[var(--gold)]">
            <span className="block h-px w-7 shrink-0 bg-[var(--gold)]" aria-hidden />
            Consulting &amp; Advisory Services
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.35rem,4.2vw,3.65rem)] font-normal leading-[1.1] tracking-[0.01em] text-white">
            Tailored expertise
            <br />
            for <em className="italic text-[var(--gold)]">every stage</em>
            <br />
            of your growth.
          </h1>
          <p className="mt-5 max-w-[520px] font-[family-name:var(--font-montserrat)] text-[0.84rem] leading-[1.85] text-white/60">
            Every engagement with CompassPoint Advisory is built around your business, your industry, and your goals.
            Explore our full range of consulting and advisory services below.
          </p>
        </div>
        <div className="mt-10 hidden items-end gap-3 border-t border-white/[0.08] pt-8 md:flex md:max-w-[1180px] md:justify-end">
          <div className="text-right">
            <span className="font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,6vw,4.75rem)] font-light leading-none text-[rgba(201,168,76,0.2)]">
              7
            </span>
            <span className="mt-1 block font-[family-name:var(--font-montserrat)] text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
              Service areas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
