import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { personAmeliaJsonLd } from "@/lib/seo-schemas";
import { CALENDLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About CompassPoint Advisory — Melbourne Business Consultants",
  description:
    "Founded by Amelia Ghofrany with 20+ years at IBM, Fujitsu, DXC and Bupa. Strategic consulting purpose-built for Australian SMEs turning $5M–$20M.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={personAmeliaJsonLd()} />
      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-28 pt-32 md:px-14 md:pb-36 md:pt-40 lg:px-20">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          About CompassPoint Advisory
        </h1>
        <div className="prose-custom mt-10 max-w-3xl space-y-6 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--text-secondary)] md:text-lg">
          <p>
            CompassPoint Advisory is a Melbourne-based strategic consulting firm for Australian SMEs and
            startups—typically businesses in the $5M–$20M revenue range—that want Fortune 500–grade thinking
            without the corporate overhead.
          </p>
          <p>
            Founded by <strong className="text-[var(--text-primary)]">Amelia Ghofrany</strong>, our practice
            draws on 20+ years of senior experience across IBM, Fujitsu, DXC Technology, and Bupa. That
            background shapes how we work: disciplined, data-informed, and deeply practical.
          </p>
          <h2 className="pt-4 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Vision
          </h2>
          <p>
            To give growing Australian businesses access to the same strategic rigour large enterprises rely
            on—delivered in a way that respects pace, budget, and founder realities.
          </p>
          <h2 className="pt-4 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Mission
          </h2>
          <p>
            We partner with leadership teams to unlock clarity in strategy, strength in operations, and
            confidence through change—including practical adoption of AI where it earns its place.
          </p>
          <h2 className="pt-4 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Scaling without sacrificing control
          </h2>
          <p>
            Scaling a business shouldn&apos;t mean sacrificing control. We work alongside you—not above
            you—so decisions stay yours, momentum builds, and your team grows stronger through the process.
          </p>
        </div>
        <div className="mt-12">
          <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Discovery Call
          </Button>
        </div>
      </article>
    </SiteShell>
  );
}
