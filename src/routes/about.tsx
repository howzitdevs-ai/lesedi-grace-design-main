import { createFileRoute } from "@tanstack/react-router";
import { Clock, BadgeCheck, MapPin, HeartHandshake, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Lesedi Funeral Society" },
      { name: "description", content: "Over 20 years of compassionate funeral service in the KOSH community. Authorised FSP No: 9027." },
      { property: "og:title", content: "About Lesedi Funeral Society" },
      { property: "og:description", content: "Two decades of dignified, trusted funeral care for KOSH families." },
    ],
  }),
  component: AboutPage,
});

const features = [
  { icon: Clock, label: "20+ Years of Service", body: "Two decades of standing alongside KOSH families through their most difficult moments." },
  { icon: BadgeCheck, label: "FSP No: 9027", body: "Authorised Financial Services Provider — fully licensed, fully accountable." },
  { icon: MapPin, label: "Rooted in KOSH", body: "Klerksdorp, Orkney, Stilfontein and Hartbeesfontein — your community is our community." },
  { icon: HeartHandshake, label: "Compassion First", body: "We listen before we plan. Every family receives personal, unhurried attention." },
  { icon: ShieldCheck, label: "Transparent & Honest", body: "Clear pricing, clear plans and clear communication — no surprises, ever." },
  { icon: Users, label: "A Caring Team", body: "Local advisors, dignified staff, and pastoral support who treat your family like ours." },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground max-w-3xl leading-tight">
            Caring for KOSH families with dignity, since 2003.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Lesedi Funeral Society was founded with a single purpose: to make sure no family in our
            community walks through grief alone. More than twenty years later, that mission still
            shapes everything we do.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.label} className="rounded-2xl bg-card border border-border p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{f.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 sm:p-14">
          <h2 className="font-display text-3xl font-bold">Our promise to you.</h2>
          <p className="mt-4 max-w-3xl text-primary-foreground/85 leading-relaxed">
            We will treat your loved one with the same respect we would offer our own family. We
            will be on time, honest about every cost, and present at every step. And when the
            service is over, we will still be here — because care does not end at the graveside.
          </p>
        </div>
      </section>
    </div>
  );
}
