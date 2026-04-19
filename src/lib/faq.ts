export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is a business consultant and what do they do for SMEs?",
    answer:
      "A business consultant works alongside SME owners and leadership teams to solve strategic, operational, and organisational challenges. At CompassPoint Advisory, we help Australian small and medium businesses build growth strategies, improve their operations, manage change, and adopt AI and digital tools - giving them access to expert thinking previously available only to large corporations.",
  },
  {
    question: "I already have an Accountant - why do I need a business consultant?",
    answer:
      "Your accountant manages financial health - compliance, tax, reporting. A business consultant focuses on growth: identifying strategies, initiatives, and operational improvements to scale your business, enter new markets, and build long-term value. Think of your accountant as keeping score - and your business consultant as helping you win the game.",
  },
  {
    question: "How much does business consulting cost for a small business in Australia?",
    answer:
      "Fees vary depending on scope, duration, and engagement type. CompassPoint Advisory offers flexible models - from project-based engagements to on-demand hourly advisory - so SMEs can access support without a large upfront commitment. We offer a free discovery call to understand your needs and provide a tailored proposal. Consider consulting fees as an investment - the right advice at the right time can unlock revenue, reduce waste, and accelerate decisions.",
  },
  {
    question: "How do I know if my business needs a consultant?",
    answer:
      "If you're experiencing rapid growth without systems to support it, a clear ambition but no strategic roadmap, operational inefficiencies eating into margins, a major change underway, or leadership challenges affecting team performance - consulting support could be transformative.",
  },
  {
    question: "Does CompassPoint Advisory offer AI consulting for small businesses?",
    answer:
      "Yes. We help SMEs understand where AI can genuinely improve their business - from automating repetitive tasks to using data for smarter decisions and building AI-enabled customer experiences. We cut through the hype and focus on practical, high-ROI applications.",
  },
  {
    question: "Where is CompassPoint Advisory based?",
    answer:
      "We are headquartered in Melbourne, Victoria, and work with businesses across Australia - including Sydney, Brisbane, Perth, Hobart and Adelaide - both in-person and remotely.",
  },
  {
    question: "How do I get started with CompassPoint Advisory?",
    answer:
      "The first step is a free, confidential discovery call with our founder, Amelia Ghofrany. In 30 minutes, we'll explore your goals, your challenges, and whether we're the right partner. Book directly via our Calendly link - no commitment required.",
  },
];

/** Indices into `FAQ_ITEMS` - same order as listed in site copy. */
export const FAQ_INDEX = {
  consultantRole: 0,
  accountantVsConsultant: 1,
  cost: 2,
  needConsultant: 3,
  aiConsulting: 4,
  location: 5,
  getStarted: 6,
} as const;

export function getFaqItemsByIndices(indices: readonly number[]): FaqItem[] {
  return indices.map((i) => FAQ_ITEMS[i]).filter(Boolean);
}

/** Featured on the home page - representative subset of `FAQ_ITEMS`. */
export const HOME_FAQ_INDICES: readonly number[] = [
  FAQ_INDEX.consultantRole,
  FAQ_INDEX.cost,
  FAQ_INDEX.needConsultant,
  FAQ_INDEX.getStarted,
];

/**
 * Service detail pages: relevant questions from the same canonical FAQ copy.
 * All text remains defined only in `FAQ_ITEMS`.
 */
const SERVICE_FAQ_INDICES: Record<string, readonly number[]> = {
  "business-strategy-consulting": [
    FAQ_INDEX.consultantRole,
    FAQ_INDEX.accountantVsConsultant,
    FAQ_INDEX.needConsultant,
    FAQ_INDEX.getStarted,
  ],
  "operations-process-optimisation": [
    FAQ_INDEX.consultantRole,
    FAQ_INDEX.cost,
    FAQ_INDEX.needConsultant,
    FAQ_INDEX.aiConsulting,
  ],
  "change-leadership-culture-transformation": [
    FAQ_INDEX.consultantRole,
    FAQ_INDEX.needConsultant,
    FAQ_INDEX.getStarted,
  ],
  "ai-digital-transformation-consulting": [
    FAQ_INDEX.aiConsulting,
    FAQ_INDEX.consultantRole,
    FAQ_INDEX.cost,
    FAQ_INDEX.getStarted,
  ],
  "executive-coaching": [
    FAQ_INDEX.needConsultant,
    FAQ_INDEX.consultantRole,
    FAQ_INDEX.getStarted,
  ],
  "on-demand-advisory": [
    FAQ_INDEX.cost,
    FAQ_INDEX.getStarted,
    FAQ_INDEX.consultantRole,
  ],
  "growth-accelerator-workshop": [
    FAQ_INDEX.needConsultant,
    FAQ_INDEX.consultantRole,
    FAQ_INDEX.getStarted,
  ],
};

export function getServiceFaqItems(slug: string): FaqItem[] {
  const indices = SERVICE_FAQ_INDICES[slug];
  if (!indices) return [];
  return getFaqItemsByIndices(indices);
}
