// 2026 Business Brochure Data — single source of truth for all rate tables and the
// Instant Quote Calculator. Verified against the Lesedi 2026 brochure.

export type CoverKey = "r10k" | "r15k" | "r20k" | "r30k" | "r50k";

export interface RateBand {
  age: string;
  r10k: string;
  r15k: string;
  r20k: string;
  r30k: string;
  r50k: string;
}

export interface Plan {
  name: string;
  details: string;
  bands: RateBand[];
}

export const plans: Plan[] = [
  {
    name: "Main Member Only",
    details: "Covers the main member only.",
    bands: [
      { age: "18 - 65", r10k: "R62", r15k: "R80", r20k: "R98", r30k: "R135", r50k: "R208" },
      { age: "66 - 75", r10k: "R125", r15k: "R175", r20k: "R225", r30k: "R325", r50k: "R526" },
      { age: "76 - 80", r10k: "R237", r15k: "R343", r20k: "R449", r30k: "-", r50k: "-" },
      { age: "81 - 85", r10k: "R337", r15k: "-", r20k: "-", r30k: "-", r50k: "-" },
    ],
  },
  {
    name: "Main Member & Spouse",
    details: "Covers main member and spouse.",
    bands: [
      { age: "18 - 65", r10k: "R83", r15k: "R113", r20k: "R142", r30k: "R200", r50k: "R317" },
      { age: "66 - 75", r10k: "R186", r15k: "R266", r20k: "R364", r30k: "R507", r50k: "R828" },
    ],
  },
  {
    name: "Main Member & up to 6 Children",
    details: "Covers main member and up to 6 children.",
    bands: [
      { age: "18 - 65", r10k: "R80", r15k: "R107", r20k: "R135", r30k: "R190", r50k: "R299" },
      { age: "66 - 75", r10k: "R175", r15k: "R251", r20k: "R326", r30k: "R476", r50k: "R777" },
    ],
  },
  {
    name: "Main Member, Spouse & up to 6 Children",
    details: "Covers main member, spouse, and up to 6 children.",
    bands: [
      { age: "18 - 65", r10k: "R113", r15k: "R157", r20k: "R200", r30k: "R288", r50k: "R463" },
      { age: "66 - 75", r10k: "R266", r15k: "R386", r20k: "R506", r30k: "R747", r50k: "R1,228" },
    ],
  },
];

export const coverAmounts: { key: CoverKey; label: string; short: string }[] = [
  { key: "r10k", label: "R10 000", short: "R10k" },
  { key: "r15k", label: "R15 000", short: "R15k" },
  { key: "r20k", label: "R20 000", short: "R20k" },
  { key: "r30k", label: "R30 000", short: "R30k" },
  { key: "r50k", label: "R50 000", short: "R50k" },
];

/**
 * Look up a monthly premium for a plan / age band / cover amount.
 * Returns the premium string (e.g. "R135") or null when the combination
 * is not offered ("-" in the brochure).
 */
export function getPremium(planName: string, ageIndex: number, coverKey: CoverKey): string | null {
  const plan = plans.find((p) => p.name === planName);
  if (!plan) return null;
  const band = plan.bands[ageIndex];
  if (!band) return null;
  const value = band[coverKey];
  return value && value !== "-" ? value : null;
}

export const familyIncomeBands = [
  { age: "18 - 65", duration: "6", premium: "R45" },
  { age: "66 - 75", duration: "6", premium: "R80" },
  { age: "18 - 65", duration: "12", premium: "R60" },
  { age: "66 - 75", duration: "12", premium: "R110" },
];

export const extendedFamilyBands = [
  { age: "0 - 17", cover: "R5,000", premium: "R10" },
  { age: "18 - 65", cover: "R10,000", premium: "R65" },
  { age: "66 - 75", cover: "R10,000", premium: "R130" },
  { age: "76 - 80", cover: "R10,000", premium: "R297" },
  { age: "81 - 85", cover: "R10,000", premium: "R468" },
];

export const spouseChildrenBenefits = [
  { age: "Stillbirth* to 11 months", cover: "12.50%" },
  { age: "1 to 5 years", cover: "25.00%" },
  { age: "6 to 13 years", cover: "50.00%" },
  { age: "14 to 21 years", cover: "100.00%" },
  { age: "Spouse", cover: "100.00%" },
];
