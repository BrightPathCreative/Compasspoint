/** First full sentence for previews (avoids mid-word truncation). */
export function firstSentence(text: string): string {
  const m = text.match(/^(.+?[.!?])(\s|$)/);
  return m ? m[1].trim() : text;
}

export const METHODOLOGY_STEPS = [
  {
    title: "Discovery and Audit",
    body:
      "We begin every engagement with a structured discovery process. We examine your business model, your market position, your team, your financials, and your goals. This gives us a clear, unbiased picture of where you are and what is standing between you and where you want to be.",
  },
  {
    title: "Strategic Roadmap",
    body:
      "From the discovery findings, we build a clear, prioritised strategic roadmap. This is not a theoretical document; it is a practical guide that your team can execute against, with defined milestones, owners, and success metrics.",
  },
  {
    title: "Execution and Alignment",
    body:
      "Strategy without execution is just planning. We work alongside your team during the implementation phase, providing guidance, accountability, and course corrections as the plan meets reality. We help you build the internal capability to execute with confidence.",
  },
  {
    title: "Ongoing Optimisation",
    body:
      "The best strategies evolve. We maintain an ongoing advisory relationship with our clients, reviewing progress, adapting the roadmap as conditions change, and ensuring that the momentum built in the early phases is sustained over the long term.",
  },
] as const;
