import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, BookOpen, ClipboardList } from "lucide-react";
import brochureCover from "@/assets/cover 2.png";
import brochureRates from "@/assets/cover.png";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation & Forms — Lesedi Funeral Society" },
      { name: "description", content: "Download brochures, claim forms and policy documents for Lesedi Funeral Society. FSP No: 9027." },
      { property: "og:title", content: "Documentation & Forms — Lesedi Funeral Society" },
      { property: "og:description", content: "Brochures, claim forms and policy documents available for download." },
    ],
  }),
  component: DocumentationPage,
});

const downloads = [
  {
    icon: BookOpen,
    title: "Society Brochure",
    description: "Overview of cover options, benefits and what makes Lesedi different.",
    href: brochureCover,
    filename: "Lesedi-Funeral-Society-Brochure.jpg",
    preview: brochureCover,
  },
  {
    icon: FileText,
    title: "Cover Amounts & Rates",
    description: "Full rates table by age group and category, plus society benefits.",
    href: brochureRates,
    filename: "Lesedi-Cover-Amounts-Rates.jpg",
    preview: brochureRates,
  },
  {
    icon: ClipboardList,
    title: "Claim Form",
    description: "Submit a claim. Please email or call us with the completed form.",
    href: "mailto:Lesedifuneralsociety@gmail.com?subject=Claim%20Form%20Request",
    filename: "Claim-Form.pdf",
    preview: null,
  },
];

function DocumentationPage() {
  return (
    <div>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Documentation</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground max-w-3xl leading-tight">
            Forms, brochures & policy documents.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Download our brochures and forms below. If you need help completing anything, our advisors
            are always happy to walk you through it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((d) => (
            <div
              key={d.title}
              className="flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card transition"
            >
              {d.preview ? (
                <div className="aspect-[4/3] bg-surface overflow-hidden">
                  <img
                    src={d.preview}
                    alt={d.title}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <d.icon className="h-16 w-16 text-primary/40" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {d.description}
                </p>
                <a
                  href={d.href}
                  download={d.preview ? d.filename : undefined}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
                >
                  <Download className="h-4 w-4" />
                  {d.preview ? "Download" : "Request via email"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-accent/10 border border-accent/20 p-8 sm:p-10">
          <h2 className="font-display text-2xl font-bold text-foreground">Need a different document?</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Policy schedules, beneficiary updates and other administrative forms are available on
            request. Call us or send an email and we'll get it to you the same day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+27638110472"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              063 811 0472
            </a>
            <a
              href="mailto:Lesedifuneralsociety@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground"
            >
              Lesedifuneralsociety@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
