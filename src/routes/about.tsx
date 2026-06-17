import { createFileRoute } from "@tanstack/react-router";
import { Clock, BadgeCheck, MapPin, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import lesediLogo from "@/assets/Lesedi_Funeral_Society_Logo-removebg-preview.png";

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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-accent/5 border border-accent/10 p-8 sm:p-12 text-center max-w-4xl mx-auto flex flex-col items-center">
          <img src={lesediLogo} alt="Lesedi Funeral Society Logo" className="h-24 sm:h-32 mb-8 drop-shadow-xl" />
          <p className="font-display font-semibold text-accent mb-4">Matthew 14:17-19</p>
          <p className="text-lg sm:text-xl text-foreground italic leading-relaxed mb-8">
            "They said to Him, 'We have here only five loaves and two fish.' And He said, 'Bring them here to Me.' Ordering the people to sit down on the grass, He took the five loaves and the two fish, and looking up toward heaven, He blessed the food, and breaking the loaves He gave them to the disciples, and the disciples gave them to the crowds."
          </p>
          <div className="h-px w-24 bg-accent/20 mx-auto mb-8"></div>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Our logo represents an ancient symbol used by early Christians to recognise each other. It also represented the principle of gathering small possessions and multiplying them to feed multitudes of people.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto rounded-3xl bg-card border border-border p-8 sm:p-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center uppercase tracking-tight">Serving Your Burial Needs</h2>
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Lesedi Funeral Society has been serving the Klerksdorp-Orkney-Stilfontein-Hartebeesfontein communities (KOSH) for over 20 years. It opened its doors in 2001 in the Saambou Building on 30 Boom Street in Klerksdorp starting with a fax machine and a notebook.
            </p>
            <p>
              The company was started by the late Mr Simon Dick after he moved from Lichtenburg to Klerksdorp following his retirement from SAPS as a warrant officer for over 35 years. With some of the very first members still part of the scheme, the company was able to survive the Covid-19 pandemic and it is still growing.
            </p>
            <p>
              We treat our members with honesty, integrity and respect. We believe our first responsibility is to them and their dependants who all depend on our trusted services. Our service level is prompt and timeously.
            </p>
          </div>
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
