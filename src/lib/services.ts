import { SITE_URL } from "./site";

export type Service = {
  slug: string;
  /** Display order on `/services` and in the nav mega-menu. */
  order: number;
  title: string;
  /** Short label for home tiles / chips (may include a leading star for signature). */
  categoryLabel: string;
  question: string;
  description: string;
  shortSummary: string;
  metaTitle: string;
  metaDescription: string;
  bestFor: readonly string[];
};

export const SERVICES: readonly Service[] = [
  {
    slug: "growth-accelerator-workshop",
    order: 1,
    title: "Growth Accelerator Workshop",
    categoryLabel: "★ Signature workshop",
    question: "Ready to get serious about growth - but not sure where to start?",
    description:
      "The Growth Accelerator is CompassPoint Advisory's signature workshop experience - a focused, high-impact engagement designed to cut through the noise and build a clear, actionable growth plan for your business. In a single facilitated session, we work with you and your leadership team to diagnose what's holding the business back, identify your biggest growth opportunities, and map out exactly what needs to happen over the next 12 months to get there.",
    shortSummary:
      "A single high-impact facilitated session to diagnose blockers, prioritise growth opportunities, and leave with a practical 12-month plan your team can execute.",
    metaTitle: "Growth Accelerator Workshop - CompassPoint Advisory",
    metaDescription:
      "A focused, high-impact workshop to diagnose what's holding your business back and build a 12-month growth plan. Melbourne-based, serving SMEs across Australia.",
    bestFor: ["SMEs looking to scale their businesses"],
  },
  {
    slug: "business-strategy-consulting",
    order: 2,
    title: "Business Strategy Consulting",
    categoryLabel: "Strategy",
    question: "Is your business growing - but without a clear plan for where it's heading?",
    description:
      "We work with SME founders and leadership teams to build future-ready strategies grounded in market insight, competitive positioning, and financial discipline. From annual planning to three-year growth roadmaps, we help you define where you're going and exactly how to get there.",
    shortSummary:
      "Future-ready strategies from annual planning to multi-year roadmaps — grounded in market insight, positioning, and financial discipline.",
    metaTitle: "Business Strategy Consulting for SMEs - CompassPoint Advisory",
    metaDescription:
      "Build future-ready growth strategies with CompassPoint Advisory. Market insight, competitive positioning, and financial discipline for Australian SMEs.",
    bestFor: [
      "Founders preparing to scale",
      "Businesses looking to reset their strategy and direction",
      "Leadership teams needing alignment",
    ],
  },
  {
    slug: "operations-process-optimisation",
    order: 3,
    title: "Operations and Process Optimisation",
    categoryLabel: "Operations",
    question: "Are inefficiencies quietly costing your business time and money?",
    description:
      "We map, assess, and redesign your core business processes to eliminate waste, reduce cost, and create the operational foundations your business needs to scale. We also identify where AI and automation can replace manual effort - freeing your team for higher-value work.",
    shortSummary:
      "Process mapping, waste reduction, and scalable operating models — including where AI and automation can replace manual effort.",
    metaTitle: "Operations & Process Optimisation - CompassPoint Advisory",
    metaDescription:
      "Eliminate waste, reduce costs, and build scalable operations. Process optimisation and AI automation consulting for Australian SMEs.",
    bestFor: [
      "Businesses experiencing growing pains",
      "Teams stretched too thin",
      "Owners preparing for growth or sale",
    ],
  },
  {
    slug: "change-leadership-culture-transformation",
    order: 4,
    title: "Change Leadership and Culture Transformation",
    categoryLabel: "Change",
    question: "Is your team struggling to keep up with the pace of change?",
    description:
      "Change fails when people are left behind. We guide SME leaders through complex transformations - restructures, technology rollouts, culture shifts - with a human-centred approach that delivers measurable results and builds lasting capability.",
    shortSummary:
      "Human-centred change leadership for restructures, technology rollouts, and culture shifts — with measurable outcomes and lasting capability.",
    metaTitle: "Change Leadership & Culture Transformation - CompassPoint Advisory",
    metaDescription:
      "Navigate restructures, technology rollouts, and culture shifts with human-centred change management for Australian SMEs.",
    bestFor: [
      "Businesses implementing new technology",
      "Post-merger integration",
      "Rebuilding team culture",
    ],
  },
  {
    slug: "ai-digital-transformation-consulting",
    order: 5,
    title: "AI and Digital Transformation Consulting",
    categoryLabel: "AI & Digital",
    question: "Not sure how AI fits into your business - or where to start?",
    description:
      "AI is no longer just for large enterprises. We help Australian SMEs identify practical, high-impact AI opportunities - from automating routine tasks to using data for smarter decision-making. We build a digital transformation roadmap that's right-sized for your business and budget.",
    shortSummary:
      "Practical AI opportunities and a right-sized digital roadmap — from automation to smarter decisions, without enterprise-only complexity.",
    metaTitle: "AI and Digital Transformation Consulting - CompassPoint Advisory",
    metaDescription:
      "Practical AI adoption for Australian SMEs. Automate tasks, unlock data insights, and build a digital transformation roadmap right-sized for your business.",
    bestFor: [
      "SMEs exploring AI adoption",
      "SMEs looking to drive automation in their business",
      "Founders wanting competitive edge",
    ],
  },
  {
    slug: "executive-coaching",
    order: 6,
    title: "Executive Coaching for Senior Leaders",
    categoryLabel: "Coaching",
    question: "Are you performing at the level your business needs you to?",
    description:
      "Designed for ambitious founders, CEOs, and senior female leaders navigating complex organisations and male-dominated industries, our executive coaching program provides clarity, strategy, and accountability to accelerate your leadership impact.",
    shortSummary:
      "Clarity, strategy, and accountability for founders, CEOs, and senior leaders — especially women navigating complex or male-dominated environments.",
    metaTitle: "Executive Coaching for Founders & Senior Leaders - CompassPoint Advisory",
    metaDescription:
      "Clarity, strategy, and accountability for ambitious founders, CEOs, and senior female leaders. Melbourne-based executive coaching for Australian SMEs.",
    bestFor: ["Founders and CEOs", "Senior women in leadership", "Leaders managing teams through change"],
  },
  {
    slug: "on-demand-advisory",
    order: 7,
    title: "On-Demand Advisory",
    categoryLabel: "Advisory",
    question: "Need expert support without a long-term commitment?",
    description:
      "Access senior consulting expertise by the hour - when you need a trusted sounding board, a second opinion on a major decision, or specialist support on a pressing challenge. No retainer. No lock-in.",
    shortSummary:
      "Senior expertise by the hour — sounding board, second opinions, and specialist support when you need it. No retainer, no lock-in.",
    metaTitle: "On-Demand Business Advisory - CompassPoint Advisory",
    metaDescription:
      "Access senior consulting expertise by the hour. No retainer, no lock-in - just expert support when you need it. Australian SMEs.",
    bestFor: [
      "Founders who need occasional expert input",
      "Leaders between engagements",
      "Specific challenges",
    ],
  },
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceImagePath(slug: string): string {
  return `/service-${slug}.jpg`;
}

export function getServiceImageAbsoluteUrl(slug: string): string {
  return `${SITE_URL}${getServiceImagePath(slug)}`;
}

export function getServiceHeroImageAlt(service: Service): string {
  return `${service.title} — CompassPoint Advisory`;
}

export function getRelatedServices(slug: string, limit: number): Service[] {
  const current = getServiceBySlug(slug);
  if (!current) {
    return SERVICES.filter((s) => s.slug !== slug)
      .slice()
      .sort((a, b) => a.order - b.order)
      .slice(0, limit);
  }
  return SERVICES.filter((s) => s.slug !== slug)
    .slice()
    .sort((a, b) => {
      const distA = Math.abs(a.order - current.order);
      const distB = Math.abs(b.order - current.order);
      if (distA !== distB) return distA - distB;
      return a.order - b.order;
    })
    .slice(0, limit);
}

/** Label for the home services tile accordion trigger. */
export function getHomeServiceAboutAccordionLabel(_service: Service): string {
  return "Quick overview";
}
