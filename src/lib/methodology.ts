export type MethodologyStep = {
  title: string;
  body: string;
};

export const METHODOLOGY_STEPS: readonly MethodologyStep[] = [
  {
    title: "Discovery & Audit",
    body:
      "We start by understanding your business, market, and leadership context through structured conversations and a focused review of what is already working — and what is not. That clarity becomes the foundation for every recommendation that follows, so we are solving the right problems rather than chasing symptoms.",
  },
  {
    title: "Strategic Roadmap",
    body:
      "Together we translate insight into a practical roadmap: priorities, sequencing, owners, and measures of success that your team can actually execute. The outcome is not a shelf document — it is an aligned plan your leadership team can communicate, defend, and revisit as conditions change.",
  },
  {
    title: "Execution & Alignment",
    body:
      "Strategy only matters when it shows up in decisions, meetings, and operating rhythms. We support rollout with facilitation, governance light enough for SMEs, and checkpoints that keep momentum without adding bureaucracy.",
  },
  {
    title: "Ongoing Optimisation",
    body:
      "Growth is iterative. We help you interpret results, adjust assumptions, and refine the plan as you learn — whether that means doubling down on a winner, retiring an initiative that is not landing, or preparing for the next stage of scale.",
  },
];

/** Returns the first sentence of a paragraph for preview copy. */
export function firstSentence(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "";

  const match = trimmed.match(/^[\s\S]+?(?<=[.!?])(?=\s|$)/);
  if (match) return match[0].trim();

  return trimmed;
}
