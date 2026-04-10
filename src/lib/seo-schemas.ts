import type { FaqItem } from "./faq";
import { FAQ_ITEMS } from "./faq";
import { SITE_URL } from "./site";

const orgId = `${SITE_URL}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: "CompassPoint Advisory",
    url: SITE_URL,
    logo: `${SITE_URL}/compasspoint-logotext.svg`,
    description:
      "Strategic consulting for Australian SMEs and startups. Growth strategy, operations, AI transformation, and executive coaching.",
    founder: {
      "@type": "Person",
      name: "Amelia Ghofrany",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    sameAs: ["https://www.linkedin.com/in/amelia-ghofrany-compasspoint/"],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CompassPoint Advisory",
    description: "Melbourne-based strategic consulting firm for Australian SMEs and startups.",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    priceRange: "$$",
  };
}

function faqMainEntityFromItems(items: FaqItem[]) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqMainEntityFromItems(FAQ_ITEMS),
  };
}

/** FAQ structured data for a subset of questions (e.g. service detail pages). */
export function faqJsonLdFromItems(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqMainEntityFromItems(items),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    provider: {
      "@type": "Organization",
      name: "CompassPoint Advisory",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    description: input.description,
  };
}

export function personAmeliaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amelia Ghofrany",
    jobTitle: "Founder & Principal Consultant",
    worksFor: {
      "@type": "Organization",
      name: "CompassPoint Advisory",
      url: SITE_URL,
    },
    description:
      "Strategic business leader with over 20 years of senior experience at IBM, Fujitsu, DXC Technology, and Bupa.",
  };
}
