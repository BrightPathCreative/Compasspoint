import Image from "next/image";
import { getServiceImagePath } from "@/lib/services";

/** Hero for /services — plum background, strategy image wash, H1 + “7 service areas”. */
export function ServicesOverviewHero() {
  const heroBg = getServiceImagePath("business-strategy-consulting");

  return (
    <section className="relative overflow-hidden bg-[var(--royal-plum)] px-7 py-[88px] pb-20 max-[899px]:px-7 max-[899px]:py-16 max-[899px]:pb-[60px] md:px-14">
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
      <div className="relative z-[2] mx-auto grid max-w-[1120px] grid-cols-1 items-end gap-12 max-[899px]:gap-0 min-[900px]:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-[18px] flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-[0.6rem] uppercase tracking-[0.26em] text-[var(--gold)]">
            <span className="block h-px w-7 bg-[var(--gold)]" aria-hidden />
            Consulting &amp; Advisory Services
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,4.5vw,3.8rem)] font-normal leading-[1.1] tracking-[0.01em] text-white">
            Tailored expertise
            <br />
            for <em className="italic text-[var(--gold)]">every stage</em>
            <br />
            of your growth.
          </h1>
          <p className="mt-5 max-w-[560px] font-[family-name:var(--font-montserrat)] text-[0.84rem] leading-[1.85] text-white/60">
            Every engagement with CompassPoint Advisory is built around your business, your industry, and your goals.
            Explore our full range of consulting and advisory services below.
          </p>
        </div>
        <div className="hidden pb-2 text-right min-[900px]:block">
          <span className="font-[family-name:var(--font-cormorant)] text-[5rem] font-light leading-none text-[rgba(201,168,76,0.18)]">
            7
          </span>
          <span className="mt-1 block font-[family-name:var(--font-montserrat)] text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
            Service areas
          </span>
        </div>
      </div>
    </section>
  );
}
