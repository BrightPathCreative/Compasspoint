import type { Service } from "@/lib/services";

/** Row category chip (title case); signature row uses “Workshop”. */
export function getServiceOverviewCategoryLabel(service: Service): string {
  if (service.slug === "growth-accelerator-workshop") return "Workshop";
  const base = service.categoryLabel.replace(/★\s*/g, "").trim();
  if (!base) return service.categoryLabel;
  const lower = base.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
