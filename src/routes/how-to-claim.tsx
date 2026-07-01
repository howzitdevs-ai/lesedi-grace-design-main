import { createFileRoute } from "@tanstack/react-router";
import { FileText, Clock, ShieldCheck, HelpCircle, ArrowRight, ClipboardCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FaqAccordion, faqs } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/how-to-claim")({
  head: () => ({
    meta: [
      { title: "How to Claim — Lesedi Funeral Society" },
      { name: "description", content: "Learn about the claim process at Lesedi Funeral Society. We guide you through every step with compassion and clarity." },
      { property: "og:title", content: "How to Claim — Lesedi Funeral Society" },
    ],
  }),
  component: HowToClaimPage,
});

const steps = [
  {
    icon: Clock,
    title: "Six-Month Window",
    description: "Claims must be submitted within six months from the date of the claim event to ensure timely processing."
  },
  {
    icon: ClipboardCheck,
    title: "Required Documents",
    description: "All standard documentation must be provided before we can finalize and pay out any claim."
  },
  {
    icon: HelpCircle,
    title: "Expert Assistance",
    description: "Contact our Intermediary team directly for personal guidance and support throughout the process."
  }
];

const requirements = [
  "Certified copy of Death Certificate (DHA 1663)",
  "Certified copy of the Deceased's Identity Document",
  "Certified copy of the Beneficiary's Identity Document",
  "Proof of Bank Account for the Beneficiary (Bank Statement)",
  "Police Report (required for accidental death claims only)",
  "BI-1663 Notification of Death form"
];

function HowToClaimPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <JsonLd data={faqSchema(faqs)} />
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How to Claim</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground max-w-3xl leading-tight font-display">
            What happens when a loved one passes?
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We are here to support you during this difficult time. Our claim process is designed 
            to be straightforward and dignified, ensuring you receive the support you need without unnecessary delays.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="relative p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-display">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground font-display">Standard Claim Requirements</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You must submit your valid claims to Lesedi Funeral Society within six months from the date 
                of the claim event. Claims can be submitted personally or via electronic means. 
                Please ensure you have all the required documents listed here for us to make a valid claim payment:
              </p>
              
              <ul className="mt-8 space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <ShieldCheck size={14} className="fill-current" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-emergency px-8 py-4 text-base font-bold text-emergency-foreground shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wider"
                >
                  Claim Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Need help with forms?</h4>
                    <p className="text-xs text-muted-foreground">Our consultants are available 24/7</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                  "Claims documents can be submitted personally or via electronic means. 
                  Please contact Lesedi Funeral Society (Intermediary) for further assistance. 
                  We might request additional information to validate the claim."
                </p>
                <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4">
                  <a href="tel:+27638110472" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-semibold">
                    <HelpCircle size={20} className="text-accent" />
                    Call for Assistance: 063 811 0472
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground font-display">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">What you need to know when the unexpected happens.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
