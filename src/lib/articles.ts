export interface RelatedServiceLink {
  title: string;
  href: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  pageTitle: string;
  metaDescription: string;
  topics: string[];
  relatedServices: RelatedServiceLink[];
  author: string;
}

export const articles: Article[] = [
  {
    slug: "why-most-australian-smes-hit-a-growth-ceiling",
    title: "Why Most Australian SMEs Hit a Growth Ceiling",
    date: "2025-10-20",
    pageTitle: "Why Most Australian SMEs Hit a Growth Ceiling — CompassPoint Advisory",
    metaDescription:
      "Australian SMEs often grow revenue without scaling effectively. Discover the three key barriers — operational inefficiency, disconnected strategy, and lack of expert input — and how to break through.",
    topics: ["SME", "Growth", "Strategy"],
    relatedServices: [
      { title: "Business Strategy Consulting", href: "/services/business-strategy-consulting" },
      { title: "Operations and Process Optimisation", href: "/services/operations-process-optimisation" },
    ],
    author: "Amelia Ghofrany",
  },
  {
    slug: "the-real-risk-of-ai-isnt-job-loss-its-culture-loss",
    title: "The Real Risk of AI Isn't Job Loss — It's Culture Loss",
    date: "2025-10-27",
    pageTitle: "The Real Risk of AI Isn't Job Loss — It's Culture Loss — CompassPoint Advisory",
    metaDescription:
      "AI transformation fails when culture isn't ready. With only 21% of employees engaged globally, discover why culture — not technology — is the real driver of business performance.",
    topics: ["AI", "Culture Transformation", "Leadership", "Future of Work", "Digital Transformation"],
    relatedServices: [
      {
        title: "AI and Digital Transformation Consulting",
        href: "/services/ai-digital-transformation-consulting",
      },
      {
        title: "Change Leadership and Culture Transformation",
        href: "/services/change-leadership-culture-transformation",
      },
    ],
    author: "Amelia Ghofrany",
  },
  {
    slug: "unlocking-sustainable-growth-processes-and-sops",
    title: "Unlocking Sustainable Growth for Australian SMEs: The Critical Role of Processes and SOPs",
    date: "2025-11-04",
    pageTitle: "The Critical Role of Processes and SOPs for Australian SMEs — CompassPoint Advisory",
    metaDescription:
      "Discover why standard operating procedures are a strategic growth enabler for Australian SMEs. Data-backed insights on how SOPs improve efficiency, reduce costs, and support AI readiness.",
    topics: ["SME", "SOP", "Standard Operating Procedure", "Processes", "Operations", "Efficiency"],
    relatedServices: [
      { title: "Operations and Process Optimisation", href: "/services/operations-process-optimisation" },
      {
        title: "AI and Digital Transformation Consulting",
        href: "/services/ai-digital-transformation-consulting",
      },
    ],
    author: "Amelia Ghofrany",
  },
  {
    slug: "from-engagement-to-experience-redesigning-work",
    title: "From Engagement to Experience: Redesigning Work in the Age of Choice",
    date: "2025-12-01",
    pageTitle: "From Engagement to Experience: Redesigning Work in the Age of Choice — CompassPoint Advisory",
    metaDescription:
      "Employee engagement is declining globally. Learn why traditional engagement tactics fall short and how SME leaders can redesign work around autonomy, alignment, and purpose.",
    topics: ["AI", "Culture Transformation", "Employee Experience", "Leadership", "Digital Transformation"],
    relatedServices: [
      {
        title: "Change Leadership and Culture Transformation",
        href: "/services/change-leadership-culture-transformation",
      },
      { title: "Executive Coaching for Senior Leaders", href: "/services/executive-coaching" },
    ],
    author: "Amelia Ghofrany",
  },
  {
    slug: "strategic-growth-in-2026-what-actually-matters",
    title: "Strategic Growth in 2026: What Actually Matters",
    date: "2026-01-26",
    pageTitle: "Strategic Growth in 2026: What Actually Matters — CompassPoint Advisory",
    metaDescription:
      "Growth in 2026 is about design, not effort. Learn the three foundations — direction, structure, and momentum — that separate thriving SMEs from stalled ones.",
    topics: ["SME", "Growth", "Strategy", "Scaling", "Leadership"],
    relatedServices: [
      { title: "Business Strategy Consulting", href: "/services/business-strategy-consulting" },
      { title: "Growth Accelerator Workshop", href: "/services/growth-accelerator-workshop" },
    ],
    author: "Amelia Ghofrany",
  },
  {
    slug: "leadership-in-an-age-of-automation",
    title: "Leadership in an Age of Automation — What Changes First?",
    date: "2026-02-17",
    pageTitle: "Leadership in an Age of Automation — What Changes First? — CompassPoint Advisory",
    metaDescription:
      "When SMEs adopt automation, the first thing that changes isn't the technology — it's leadership. Discover why intentional leadership matters more than tools in the age of AI.",
    topics: ["SME", "Leadership", "AI", "Automation"],
    relatedServices: [
      {
        title: "AI and Digital Transformation Consulting",
        href: "/services/ai-digital-transformation-consulting",
      },
      { title: "Executive Coaching for Senior Leaders", href: "/services/executive-coaching" },
      {
        title: "Change Leadership and Culture Transformation",
        href: "/services/change-leadership-culture-transformation",
      },
    ],
    author: "Amelia Ghofrany",
  },
];

export function getArticlesNewestFirst() {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Melbourne",
  }).format(new Date(`${date}T00:00:00`));
}
