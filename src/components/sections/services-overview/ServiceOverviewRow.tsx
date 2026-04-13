import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { getServiceHeroImageAlt, getServiceImagePath } from "@/lib/services";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";
import { getServiceOverviewCategoryLabel } from "./service-overview-utils";

type ServiceOverviewRowProps = {
  service: Service;
  /** Desktop: image on the right when true (rows 2, 4, 6). */
  flip: boolean;
  /** Light text panel background for standard rows. */
  bodySurface: "cream" | "cream-dark";
  /** Growth Accelerator — dark plum panel + gold CTAs. */
  signature?: boolean;
  imagePriority?: boolean;
};

export function ServiceOverviewRow({
  service,
  flip,
  bodySurface,
  signature = false,
  imagePriority = false,
}: ServiceOverviewRowProps) {
  const imgSrc = getServiceImagePath(service.slug);
  const alt = getServiceHeroImageAlt(service);
  const detailHref = `/services/${service.slug}`;

  const bodyBg = signature
    ? "bg-[var(--royal-plum)]"
    : bodySurface === "cream"
      ? "bg-[var(--cream)]"
      : "bg-[var(--cream-dark)]";

  const gradientOverlay = flip
    ? "bg-[linear-gradient(to_left,transparent_70%,rgba(245,240,232,0.06))]"
    : "bg-[linear-gradient(to_right,transparent_70%,rgba(245,240,232,0.06))]";

  return (
    <section
      id={service.slug}
      className="group relative scroll-mt-28 md:grid md:min-h-[560px] md:grid-cols-2"
    >
      {/* Image */}
      <div
        className={`relative order-1 min-h-[320px] overflow-hidden bg-[var(--royal-plum)] md:h-full md:min-h-0 ${
          flip ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes="(max-width: 899px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
          priority={imagePriority}
        />
        <div
          className={`pointer-events-none absolute inset-0 ${gradientOverlay}`}
          aria-hidden
        />
      </div>

      {/* Copy */}
      <div
        className={`order-2 flex flex-col justify-center px-6 py-[52px] max-[559px]:px-6 max-[559px]:py-11 min-[560px]:px-7 md:px-[72px] md:py-[72px] ${
          flip ? "md:order-1" : "md:order-2"
        } ${bodyBg}`}
      >
        {signature ? (
          <span className="mb-3 inline-flex items-center gap-1.5 self-start border border-[rgba(201,168,76,0.4)] bg-black/15 px-3 py-1 font-[family-name:var(--font-montserrat)] text-[0.56rem] uppercase tracking-[0.2em] text-[var(--gold)]">
            ★ SIGNATURE OFFERING
          </span>
        ) : null}

        <span
          className={`mb-5 inline-block self-start border px-3.5 py-1.5 font-[family-name:var(--font-montserrat)] text-[0.58rem] uppercase tracking-[0.22em] ${
            signature
              ? "border-[rgba(201,168,76,0.45)] bg-[rgba(201,168,76,0.12)] text-[var(--gold)]"
              : "border-[rgba(201,168,76,0.45)] text-[var(--gold)]"
          }`}
        >
          {getServiceOverviewCategoryLabel(service)}
        </span>

        <h2
          className={`font-[family-name:var(--font-cormorant)] text-[clamp(1.6rem,2.5vw,2.2rem)] font-normal leading-[1.2] ${
            signature ? "text-white" : "text-[var(--plum)]"
          }`}
        >
          {service.title}
        </h2>

        <p
          className={`mt-3.5 font-[family-name:var(--font-cormorant)] text-base italic leading-normal ${
            signature ? "text-[var(--gold-light)]" : "text-[var(--plum-mid)]"
          }`}
        >
          {service.question}
        </p>

        <p
          className={`mt-[18px] max-w-[440px] font-[family-name:var(--font-montserrat)] text-[0.8rem] leading-[1.85] ${
            signature ? "text-white/65" : "text-[var(--text-muted)]"
          }`}
        >
          {service.description}
        </p>

        <p
          className={`mt-5 font-[family-name:var(--font-montserrat)] text-[0.58rem] font-semibold uppercase tracking-[0.2em] ${
            signature ? "text-white/50" : "text-[var(--plum)]"
          }`}
        >
          Best for
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {service.bestFor.map((tag) => (
            <span
              key={tag}
              className={`rounded-sm border px-[13px] py-1 font-[family-name:var(--font-montserrat)] text-[0.62rem] tracking-[0.08em] ${
                signature
                  ? "border-white/15 bg-white/[0.04] text-white/50"
                  : "border-[rgba(92,26,74,0.2)] bg-[rgba(92,26,74,0.04)] text-[var(--text-muted)]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={detailHref}
            className={`inline-flex items-center gap-2 rounded-sm px-[26px] py-3 font-[family-name:var(--font-montserrat)] text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-colors after:content-['→'] ${
              signature
                ? "bg-[var(--gold)] text-[var(--royal-plum)] hover:bg-[var(--gold-light)]"
                : "bg-[var(--plum)] text-white hover:bg-[var(--plum-mid)]"
            }`}
          >
            Full Service Detail
          </Link>
          <Link
            href={BOOK_DISCOVERY_PATH}
            className={`font-[family-name:var(--font-montserrat)] text-[0.65rem] uppercase tracking-[0.12em] transition-colors ${
              signature
                ? "border-b border-white/20 pb-0.5 text-white/45 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                : "border-b border-[rgba(92,26,74,0.25)] pb-0.5 text-[var(--text-muted)] hover:border-[var(--plum)] hover:text-[var(--plum)]"
            }`}
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
