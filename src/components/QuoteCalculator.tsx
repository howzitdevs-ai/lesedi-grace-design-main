import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calculator, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { plans, coverAmounts, getPremium, type CoverKey } from "@/lib/rates";
import { business, whatsappLink } from "@/lib/site";

export function QuoteCalculator({ className = "" }: { className?: string }) {
  const [planName, setPlanName] = useState(plans[0].name);
  const [ageIndex, setAgeIndex] = useState(0);
  const [coverKey, setCoverKey] = useState<CoverKey>("r30k");

  const plan = useMemo(() => plans.find((p) => p.name === planName)!, [planName]);
  const premium = getPremium(planName, ageIndex, coverKey);
  const coverLabel = coverAmounts.find((c) => c.key === coverKey)?.label ?? "";
  const ageLabel = plan.bands[ageIndex]?.age ?? "";

  const handlePlanChange = (name: string) => {
    setPlanName(name);
    setAgeIndex(0); // age bands differ per plan — reset to the first
  };

  const message = `Hello Lesedi Funeral Society, I would like to apply for funeral cover.\n\nPlan: ${plan.name}\nAge band: ${ageLabel}\nCover amount: ${coverLabel}\nEstimated premium: ${premium ?? "please advise"} per month.\n\nPlease contact me.`;

  return (
    <div
      className={`overflow-hidden rounded-3xl border border-border bg-card shadow-card ${className}`}
      id="quote"
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- Selectors ---- */}
        <div className="p-6 sm:p-9">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Calculator className="h-3.5 w-3.5" />
            Instant Quote
          </div>
          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">
            See your monthly premium in seconds.
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            No forms, no waiting. Choose your options below to get an instant estimate.
          </p>

          {/* Step 1 — Plan */}
          <fieldset className="mt-7">
            <legend className="text-sm font-semibold text-foreground">
              <span className="text-accent">1.</span> Who do you want to cover?
            </legend>
            <div className="mt-3 grid sm:grid-cols-2 gap-2.5">
              {plans.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => handlePlanChange(p.name)}
                  aria-pressed={planName === p.name}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                    planName === p.name
                      ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Step 2 — Age band */}
          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-foreground">
              <span className="text-accent">2.</span> Age of the main member
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {plan.bands.map((b, i) => (
                <button
                  key={b.age}
                  type="button"
                  onClick={() => setAgeIndex(i)}
                  aria-pressed={ageIndex === i}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    ageIndex === i
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {b.age}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Step 3 — Cover amount */}
          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-foreground">
              <span className="text-accent">3.</span> How much cover do you need?
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {coverAmounts.map((c) => {
                const available = getPremium(planName, ageIndex, c.key) !== null;
                return (
                  <button
                    key={c.key}
                    type="button"
                    disabled={!available}
                    onClick={() => setCoverKey(c.key)}
                    aria-pressed={coverKey === c.key}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                      !available
                        ? "cursor-not-allowed border-dashed border-border/60 bg-muted/40 text-muted-foreground/40 line-through"
                        : coverKey === c.key
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* ---- Result panel ---- */}
        <div className="relative flex flex-col justify-between bg-primary p-6 sm:p-9 text-primary-foreground">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Your estimated premium
            </p>
            {premium ? (
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl sm:text-6xl font-bold text-accent">
                    {premium}
                  </span>
                  <span className="text-lg font-medium text-primary-foreground/80">/ month</span>
                </div>
                <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
                  {coverLabel} cover · {plan.name} · ages {ageLabel}
                </p>
              </div>
            ) : (
              <div className="mt-3">
                <p className="font-display text-2xl font-bold text-accent">Let's talk</p>
                <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                  This cover amount isn't offered for the selected age band. Contact us and we'll
                  find the right plan for your family.
                </p>
              </div>
            )}
          </div>

          <div className="relative mt-8 space-y-3">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-soft transition hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" /> Apply on WhatsApp
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary-foreground/20 transition hover:bg-primary-foreground/15"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary-foreground/90"
              >
                Call me back
              </Link>
            </div>
            <p className="flex items-center gap-2 pt-1 text-xs text-primary-foreground/60">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              FSP {business.fsp} · A 6-month waiting period applies for natural causes.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-border bg-surface px-6 py-3 text-xs font-medium text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        2026 brochure rates · No exclusions on pre-existing conditions · Cover from R31 p/m
      </div>
    </div>
  );
}
