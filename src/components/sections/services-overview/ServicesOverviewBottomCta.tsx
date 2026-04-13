import Image from "next/image";
import Link from "next/link";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";
import { getServiceImagePath } from "@/lib/services";

/** Closing band — workshop image wash, gold + ghost CTAs. */
export function ServicesOverviewBottomCta() {
  const bg = getServiceImagePath("growth-accelerator-workshop");

  return (
    <section className="relative overflow-hidden bg-[var(--royal-plum)] px-7 py-[100px] text-center max-[899px]:px-7 max-[899px]:py-[72px] md:px-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={bg} alt="" fill className="object-cover object-center opacity-[0.07]" sizes="100vw" />
      </div>
      <div className="relative z-[2] mx-auto max-w-[640px]">
        <span className="mb-5 block font-[family-name:var(--font-montserrat)] text-[0.6rem] uppercase tracking-[0.26em] text-[var(--gold)]">
          Ready for a Conversation?
        </span>
        <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-white">
          One free call.
          <br />
          <em className="italic text-[var(--gold)]">No obligation.</em>
        </h2>
        <p className="mt-5 font-[family-name:var(--font-montserrat)] text-[0.8rem] leading-[1.85] text-white/55">
          Book a free, confidential 30-minute discovery call with our founder. We&apos;ll explore your goals, your
          challenges, and whether CompassPoint Advisory is the right fit — no sales pressure, just straight-talking
          strategic advice.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={BOOK_DISCOVERY_PATH}
            className="inline-flex rounded-sm bg-[var(--gold)] px-9 py-4 font-[family-name:var(--font-montserrat)] text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--royal-plum)] transition-colors hover:bg-[var(--gold-light)]"
          >
            Book a Free Discovery Call
          </Link>
          <Link
            href="/methodology"
            className="inline-flex rounded-sm border border-white/25 px-9 py-4 font-[family-name:var(--font-montserrat)] text-[0.68rem] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            View Our Methodology
          </Link>
        </div>
        <p className="mt-[18px] font-[family-name:var(--font-montserrat)] text-[0.65rem] tracking-[0.08em] text-white/28">
          Confidential · No obligation · Straight-talking strategic advice
        </p>
      </div>
    </section>
  );
}
