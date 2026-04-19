import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { getServiceHeroImageAlt, getServiceImagePath } from "@/lib/services";
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
  /** Extra top spacing for the first row under the intro strip. */
  isFirst?: boolean;
};

export function ServiceOverviewRow({
  service,
  flip,
  bodySurface,
  signature = false,
  imagePriority = false,
  isFirst = false,
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

  /** Wider copy column (~74%), narrower image (~26%) — image reads as a side panel. */
  const gridCols = flip
    ? "md:grid-cols-[minmax(0,1.48fr)_minmax(0,0.52fr)]"
    : "md:grid-cols-[minmax(0,0.52fr)_minmax(0,1.48fr)]";

  const cardShell = signature
    ? "border-[rgba(199,154,68,0.35)] shadow-[0_28px_70px_-28px_rgba(24,8,20,0.55)]"
    : "border-[rgba(56,7,41,0.09)] shadow-[0_22px_55px_-32px_rgba(56,7,41,0.14)]";

  return (
    <section
      id={service.slug}
      className={`group relative scroll-mt-28 bg-[var(--cream)] px-4 sm:px-5 md:px-8 lg:px-12 ${
        isFirst ? "pt-10 pb-5 md:pt-14 md:pb-7" : "py-5 md:py-7"
      }`}
    >
      <div
        className={`relative mx-auto grid max-w-[1200px] overflow-hidden rounded-[22px] border md:min-h-[min(460px,62vh)] ${cardShell} ${gridCols}`}
      >
        {/* Image */}
        <div
          className={`relative order-1 min-h-[300px] overflow-hidden bg-[var(--royal-plum)] md:h-full md:min-h-0 ${
            flip ? "md:order-2" : "md:order-1"
          }`}
        >
          <Image
            src={imgSrc}
            alt={alt}
            fill
            sizes="(max-width: 767px) 100vw, min(32vw, 420px)"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.035]"
            priority={imagePriority}
          />
          <div
            className={`pointer-events-none absolute inset-0 ${gradientOverlay}`}
            aria-hidden
          />
        </div>

        {/* Copy */}
        <div
          className={`order-2 flex flex-col justify-center px-6 py-11 sm:px-8 sm:py-12 md:px-10 md:py-12 lg:px-12 ${
            flip ? "md:order-1" : "md:order-2"
          } ${bodyBg}`}
        >
          <div className="w-full max-w-[min(100%,620px)]">
            {signature ? (
              <span className="mb-3 inline-flex items-center gap-1.5 self-start border border-[rgba(199,154,68,0.4)] bg-[var(--royal-plum)]/12 px-3 py-1 font-[family-name:var(--font-montserrat)] text-[0.56rem] uppercase tracking-[0.2em] text-[var(--gold)]">
                ★ SIGNATURE OFFERING
              </span>
            ) : null}

            <span
              className={`mb-5 inline-block self-start border px-3.5 py-1.5 font-[family-name:var(--font-montserrat)] text-[0.58rem] uppercase tracking-[0.22em] ${
                signature
                  ? "border-[rgba(199,154,68,0.45)] bg-[rgba(199,154,68,0.12)] text-[var(--gold)]"
                  : "border-[rgba(199,154,68,0.45)] text-[var(--gold)]"
              }`}
            >
              {getServiceOverviewCategoryLabel(service)}
            </span>

            <h2
              className={`font-[family-name:var(--font-cormorant)] text-[clamp(1.55rem,2.2vw,2.1rem)] font-normal leading-[1.22] ${
                signature ? "text-white" : "text-[var(--plum)]"
              }`}
            >
              {service.title}
            </h2>

            <p
              className={`mt-3.5 font-[family-name:var(--font-cormorant)] text-[1.05rem] italic leading-snug md:text-lg ${
                signature ? "text-[var(--gold-light)]" : "text-[var(--charcoal)]"
              }`}
            >
              {service.question}
            </p>

            <p
              className={`mt-[18px] font-[family-name:var(--font-montserrat)] text-sm leading-[1.8] md:text-base ${
                signature ? "text-white/65" : "text-[var(--charcoal)]"
              }`}
            >
              {service.description}
            </p>

            <p
              className={`mt-5 font-[family-name:var(--font-montserrat)] text-[0.62rem] font-semibold uppercase tracking-[0.2em] md:text-[0.68rem] ${
                signature ? "text-white/50" : "text-[var(--charcoal)]"
              }`}
            >
              Best for
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {service.bestFor.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-[13px] py-1.5 font-[family-name:var(--font-montserrat)] text-xs leading-snug tracking-[0.06em] md:text-sm ${
                    signature
                      ? "border-white/15 bg-white/[0.04] text-white/50"
                      : "border-[rgba(46,46,46,0.2)] bg-[rgba(46,46,46,0.04)] text-[var(--charcoal)]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={detailHref}
                className={`inline-flex items-center gap-2 rounded-full px-[26px] py-3 font-[family-name:var(--font-montserrat)] text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-colors after:content-['→'] ${
                  signature
                    ? "bg-[var(--gold)] text-[var(--royal-plum)] hover:bg-[var(--gold-light)]"
                    : "bg-[var(--plum)] text-white hover:brightness-110"
                }`}
              >
                Full Service Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
