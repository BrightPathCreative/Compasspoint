import ScrollReveal from "@/components/ScrollReveal";
import { AboutLeadInNarrative } from "@/components/sections/AboutLeadInNarrative";
import { CredentialsPanel } from "@/components/sections/CredentialsPanel";
import { Button } from "../global/Button";

export function HomeAboutSnapshotSection() {
  return (
    <section id="about-snapshot" className="bg-[var(--white)] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <ScrollReveal>
            <AboutLeadInNarrative />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <CredentialsPanel />
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <Button variant="secondary" href="/about">
            Learn More About Us →
          </Button>
        </div>
      </div>
    </section>
  );
}
