import { SITE_URL } from "./site";

export type Service = {
  slug: string;
  order: number;
  /** Short uppercase label on cards and previews (e.g. STRATEGY, ★ SIGNATURE). */
  categoryLabel: string;
  /** Completes “About …” on the home services accordion (sentence case). */
  aboutAccordionPhrase: string;
  title: string;
  shortSummary: string;
  question: string;
  description: string;
  bestFor: string[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "business-strategy-consulting",
    order: 1,
    categoryLabel: "STRATEGY",
    aboutAccordionPhrase: "strategy consulting",
    title: "Business Strategy Consulting",
    shortSummary:
      "Future-ready strategies grounded in market insight, positioning, and financial discipline.",
    question: "Is your business growing - but without a clear plan for where it's heading?",
    description:
      "We work with SME founders and leadership teams to build future-ready strategies grounded in market insight, competitive positioning, and financial discipline. From annual planning to three-year growth roadmaps, we help you define where you're going and exactly how to get there.",
    bestFor: [
      "Founders preparing to scale",
      "Businesses entering new markets",
      "Leadership teams needing alignment",
    ],
    metaTitle: "Business Strategy Consulting for SMEs - CompassPoint Advisory",
    metaDescription:
      "Build future-ready growth strategies with CompassPoint Advisory. Market insight, competitive positioning, and financial discipline for Australian SMEs.",
  },
  {
    slug: "operations-process-optimisation",
    order: 2,
    categoryLabel: "OPERATIONS",
    aboutAccordionPhrase: "operations & optimisation",
    title: "Operations and Process Optimisation",
    shortSummary: "Map, assess, and redesign core processes - plus practical AI and automation opportunities.",
    question: "Are inefficiencies quietly costing your business time and money?",
    description:
      "We map, assess, and redesign your core business processes to eliminate waste, reduce cost, and create the operational foundations your business needs to scale. We also identify where AI and automation can replace manual effort - freeing your team for higher-value work.",
    bestFor: [
      "Businesses experiencing growing pains",
      "Teams stretched too thin",
      "Owners preparing for growth or sale",
    ],
    metaTitle: "Operations & Process Optimisation - CompassPoint Advisory",
    metaDescription:
      "Eliminate waste, reduce costs, and build scalable operations. Process optimisation and AI automation consulting for Australian SMEs.",
  },
  {
    slug: "change-leadership-culture-transformation",
    order: 3,
    categoryLabel: "CHANGE",
    aboutAccordionPhrase: "change & culture",
    title: "Change Leadership and Culture Transformation",
    shortSummary: "Human-centred change for restructures, technology rollouts, and culture shifts.",
    question: "Is your team struggling to keep up with the pace of change?",
    description:
      "Change fails when people are left behind. We guide SME leaders through complex transformations - restructures, technology rollouts, culture shifts - with a human-centred approach that delivers measurable results and builds lasting capability.",
    bestFor: [
      "Businesses implementing new technology",
      "Post-merger integration",
      "Rebuilding team culture",
    ],
    metaTitle: "Change Leadership & Culture Transformation - CompassPoint Advisory",
    metaDescription:
      "Navigate restructures, technology rollouts, and culture shifts with human-centred change management for Australian SMEs.",
  },
  {
    slug: "ai-digital-transformation-consulting",
    order: 4,
    categoryLabel: "TECHNOLOGY",
    aboutAccordionPhrase: "AI & digital transformation",
    title: "AI and Digital Transformation Consulting",
    shortSummary: "Practical, high-impact AI opportunities and a roadmap right-sized for your business.",
    question: "Not sure how AI fits into your business - or where to start?",
    description:
      "AI is no longer just for large enterprises. We help Australian SMEs identify practical, high-impact AI opportunities - from automating routine tasks to using data for smarter decision-making. We build a digital transformation roadmap that's right-sized for your business and budget.",
    bestFor: [
      "SMEs exploring AI adoption",
      "Businesses modernising legacy systems",
      "Founders wanting competitive edge",
    ],
    metaTitle: "AI and Digital Transformation Consulting - CompassPoint Advisory",
    metaDescription:
      "Practical AI adoption for Australian SMEs. Automate tasks, unlock data insights, and build a digital transformation roadmap right-sized for your business.",
  },
  {
    slug: "executive-coaching",
    order: 5,
    categoryLabel: "LEADERSHIP",
    aboutAccordionPhrase: "executive coaching",
    title: "Executive Coaching for Senior Leaders",
    shortSummary: "Clarity, strategy, and accountability for founders, CEOs, and senior leaders.",
    question: "Are you performing at the level your business needs you to?",
    description:
      "Designed for ambitious founders, CEOs, and senior female leaders navigating complex organisations and male-dominated industries, our executive coaching program provides clarity, strategy, and accountability to accelerate your leadership impact.",
    bestFor: [
      "Founders and CEOs",
      "Senior women in leadership",
      "Leaders managing teams through change",
    ],
    metaTitle: "Executive Coaching for Founders & Senior Leaders - CompassPoint Advisory",
    metaDescription:
      "Clarity, strategy, and accountability for ambitious founders, CEOs, and senior female leaders navigating complex organisations.",
  },
  {
    slug: "on-demand-advisory",
    order: 6,
    categoryLabel: "ADVISORY",
    aboutAccordionPhrase: "on-demand advisory",
    title: "On-Demand Advisory",
    shortSummary: "Senior consulting expertise by the hour - no retainer, no lock-in.",
    question: "Need expert support without a long-term commitment?",
    description:
      "Access senior consulting expertise by the hour - when you need a trusted sounding board, a second opinion on a major decision, or specialist support on a pressing challenge. No retainer. No lock-in.",
    bestFor: [
      "Founders who need occasional expert input",
      "Leaders between engagements",
      "Specific challenges",
    ],
    metaTitle: "On-Demand Business Advisory - CompassPoint Advisory",
    metaDescription:
      "Access senior consulting expertise by the hour. No retainer, no lock-in - just expert support when you need it.",
  },
  {
    slug: "growth-accelerator-workshop",
    order: 7,
    categoryLabel: "★ SIGNATURE",
    aboutAccordionPhrase: "the Growth Accelerator",
    title: "Growth Accelerator Workshop",
    shortSummary:
      "Signature facilitated session to diagnose blockers and map a clear 12-month growth plan.",
    question: "Ready to get serious about growth - but not sure where to start?",
    description:
      "The Growth Accelerator is CompassPoint Advisory's signature workshop experience - a focused, high-impact engagement designed to cut through the noise and build a clear, actionable growth plan for your business. In a single facilitated session, we work with you and your leadership team to diagnose what's holding the business back, identify your biggest growth opportunities, and map out exactly what needs to happen over the next 12 months to get there.",
    bestFor: [
      "Founders ready to get serious about growth",
      "Businesses at a strategic crossroads",
      "Leadership teams who need clarity and alignment",
    ],
    metaTitle: "Growth Accelerator Workshop - CompassPoint Advisory",
    metaDescription:
      "A focused, high-impact workshop to diagnose what's holding your business back and build a 12-month growth plan.",
  },
];

/** Home services tile accordion control label (“About …”). */
export function getHomeServiceAboutAccordionLabel(service: Service): string {
  return `About ${service.aboutAccordionPhrase}`;
}

/** Public hero image for each service - `public/service-{slug}.jpg`. */
export function getServiceImagePath(slug: string): `/service-${string}.jpg` {
  return `/service-${slug}.jpg`;
}

/** Absolute URL for OG, Twitter, and JSON-LD `image`. */
export function getServiceImageAbsoluteUrl(slug: string): string {
  return `${SITE_URL}${getServiceImagePath(slug)}`;
}

/**
 * Distinct from the visible H1: names the offering + audience for SEO, image search, and assistive tech.
 * Kept ≤ ~155 characters for practical SERP/tool limits.
 */
export function getServiceHeroImageAlt(service: Service): string {
  const raw = `${service.title} for Australian SMEs — ${service.shortSummary}`;
  if (raw.length <= 155) return raw;
  return `${raw.slice(0, 152)}…`;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  return SERVICES.filter((s) => s.slug !== slug).slice(0, limit);
}

/** First one or two sentences for home previews (full `description` stays on detail pages). */
export function getServiceHomeTeaserParagraph(description: string): string {
  const text = description.replace(/\s+/g, " ").trim();
  const parts = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  const joined = parts.slice(0, 2).join(" ");
  if (joined.length <= 400) return joined;
  if (parts[0] && parts[0].length <= 400) return parts[0];
  return `${parts[0]!.slice(0, 297).trimEnd()}…`;
}
