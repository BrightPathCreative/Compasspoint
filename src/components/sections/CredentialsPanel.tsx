import Image from "next/image";

/** Updated work-history logos (`public/credentials/work-history-*.png`). Alts follow prior grid order (1–16). */
const CREDENTIAL_LOGOS = [
  { src: "/credentials/work-history-01.png", alt: "IBM" },
  { src: "/credentials/work-history-02.png", alt: "Fujitsu" },
  { src: "/credentials/work-history-03.png", alt: "DXC Technology" },
  { src: "/credentials/work-history-04.png", alt: "Bupa" },
  { src: "/credentials/work-history-05.png", alt: "Telstra" },
  { src: "/credentials/work-history-06.png", alt: "Qantas" },
  { src: "/credentials/work-history-07.png", alt: "Commonwealth Bank" },
  { src: "/credentials/work-history-08.png", alt: "NAB" },
  { src: "/credentials/work-history-09.png", alt: "GE" },
  { src: "/credentials/work-history-10.png", alt: "Australia Post" },
  { src: "/credentials/work-history-11.png", alt: "Australian Taxation Office" },
  { src: "/credentials/work-history-12.png", alt: "Myer" },
  { src: "/credentials/work-history-13.png", alt: "Jurlique" },
  { src: "/credentials/work-history-14.png", alt: "NCVER" },
  { src: "/credentials/work-history-15.png", alt: "TasNetworks" },
  { src: "/credentials/work-history-16.png", alt: "Australian Government Department of Defence" },
] as const;

export function CredentialsPanel() {
  return (
    <div
      id="credentials"
      className="rounded-sm border border-[var(--metallic-gold)]/15 bg-[color-mix(in_srgb,var(--soft-ivory)_88%,var(--royal-plum))] p-8 md:p-10"
    >
      <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
        Credentials
      </p>
      <p className="mt-3 font-[family-name:var(--font-montserrat)] text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--charcoal)]/70">
        A selection of organisations and sectors
      </p>
      <p className="mt-8 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)]">
        Founded by Amelia Ghofrany, our work is grounded in 20+ years of senior experience across technology,
        financial services, aviation, health, retail, energy, and government programs. We help leadership teams align on
        strategy, tighten operations, navigate change, and adopt AI where it genuinely moves the needle.
      </p>
      <blockquote className="mt-8 border-l-[3px] border-[var(--metallic-gold)] pl-6 font-[family-name:var(--font-lato)] text-lg font-medium leading-snug text-[var(--royal-plum)]">
        Scaling a business shouldn&apos;t mean sacrificing control.
      </blockquote>
      <div className="mt-6 space-y-4 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)] md:text-lg">
        <p>
          Many founders reach a point where passion and momentum outpace structure and strategy. The decisions become
          more complex, the stakes grow higher, and the gap between where you are and where you need to be starts to
          feel wider.
        </p>
        <p>
          That is precisely where CompassPoint Advisory comes in. We bridge the space between entrepreneurial vision and
          institutional execution, bringing the rigour of enterprise strategy to the businesses that need it most.
        </p>
      </div>

      <ul
        className="mt-10 flex list-none flex-wrap justify-center gap-x-6 gap-y-5 p-0 md:mt-12 md:gap-x-8 md:gap-y-6"
        aria-label="Organisations and brands CompassPoint has worked with"
      >
        {CREDENTIAL_LOGOS.map((logo, index) => (
          <li
            key={logo.src}
            className={[
              "relative isolate h-11 w-[7.25rem] shrink-0 sm:h-12 sm:w-[8.25rem]",
              /* Even vertical step between neighbours (no card chrome — logo only) */
              index % 2 === 1 ? "translate-y-2.5 sm:translate-y-5" : "",
            ].join(" ")}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(max-width: 640px) 120px, 140px"
              className="object-contain object-center"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
