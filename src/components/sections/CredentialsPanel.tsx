import Image from "next/image";

const CREDENTIAL_LOGOS = [
  { src: "/credentials/ibm.png", alt: "IBM" },
  { src: "/credentials/fujitsu.png", alt: "Fujitsu" },
  { src: "/credentials/dxc.png", alt: "DXC Technology" },
  { src: "/credentials/bupa.png", alt: "Bupa" },
  { src: "/credentials/telstra.png", alt: "Telstra" },
  { src: "/credentials/qantas.png", alt: "Qantas" },
  { src: "/credentials/commbank.png", alt: "Commonwealth Bank" },
  { src: "/credentials/nab.png", alt: "NAB" },
  { src: "/credentials/ge.png", alt: "GE" },
  { src: "/credentials/australia-post.png", alt: "Australia Post" },
  { src: "/credentials/ato.png", alt: "Australian Taxation Office" },
  { src: "/credentials/myer.png", alt: "Myer" },
  { src: "/credentials/jurlique.png", alt: "Jurlique" },
  { src: "/credentials/ncver.png", alt: "NCVER" },
  { src: "/credentials/tas-networks.png", alt: "TasNetworks" },
  { src: "/credentials/defence.png", alt: "Australian Government Department of Defence" },
  { src: "/credentials/veterans-affairs.png", alt: "Department of Veterans' Affairs" },
  { src: "/credentials/kiwibank.png", alt: "Kiwibank" },
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
      <ul
        className="mt-5 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4"
        aria-label="Organisations and brands CompassPoint has worked with"
      >
        {CREDENTIAL_LOGOS.map((logo) => (
          <li
            key={logo.src}
            className="flex min-h-[3.25rem] items-center justify-center rounded-sm border border-[var(--metallic-gold)]/12 bg-[var(--white)]/65 px-2 py-2.5 sm:min-h-[3.5rem] sm:px-3 sm:py-3"
          >
            <div className="relative h-9 w-full max-w-[132px] sm:h-10 sm:max-w-[148px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 640px) 45vw, 180px"
                className="object-contain object-center"
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)]">
        Founded by Amelia Ghofrany, our work is grounded in 20+ years of senior experience across technology,
        financial services, aviation, health, retail, energy, and government programs. We help leadership teams align on
        strategy, tighten operations, navigate change, and adopt AI where it genuinely moves the needle.
      </p>
      <blockquote className="mt-8 border-l-[3px] border-[var(--metallic-gold)] pl-6 font-[family-name:var(--font-lato)] text-lg font-medium leading-snug text-[var(--royal-plum)]">
        Scaling a business shouldn&apos;t mean sacrificing control.
      </blockquote>
    </div>
  );
}
