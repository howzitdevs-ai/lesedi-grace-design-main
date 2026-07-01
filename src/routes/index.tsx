import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, HeartHandshake, Clock, Users, BadgeCheck, MapPin } from "lucide-react";
import lesediBg from "@/assets/Lesedi Bg image.jpg";
import lily from "@/assets/lily.jpg";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Testimonials } from "@/components/Testimonials";
import { business } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lesedi Funeral Society — Compassionate Care for the KOSH Community" },
      { name: "description", content: "Dignified, compassionate funeral services for families in KOSH. 24/7 emergency assistance. FSP No: 9027." },
    ],
  }),
  component: HomePage,
});

const helpItems = [
  {
    icon: Phone,
    title: "24/7 Emergency Response",
    body: "One call connects you to a caring advisor, any hour of the day or night — 365 days a year.",
  },
  {
    icon: HeartHandshake,
    title: "Funeral Cover",
    body: "We bring funeral cover to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Funeral Cover",
    body: "Affordable, transparent funeral plans backed by an authorised FSP.",
  },
  {
    icon: Users,
    title: "Cover Options",
    body: "up to R50 000, guaranteed. Choose a level of cover to suit your budget",
  },
];

const credentials = [
  { icon: Clock, label: "20+ Years", sub: "Serving South African communities with dignity and care" },
  { icon: BadgeCheck, label: "FSP No: 9027", sub: "Authorised Financial Services Provider" },
  { icon: MapPin, label: "KOSH Community", sub: "Klerksdorp · Orkney · Stilfontein · Hartbeesfontein" },
  { icon: HeartHandshake, label: "Thousands Served", sub: "Trusted by generations of local families" },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={lesediBg}
            alt="Standing with your family in dignity and care"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-primary-foreground">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium ring-1 ring-primary-foreground/20 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emergency animate-pulse" />
              Available 24 hours a day, 7 days a week
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Standing with your family, with dignity and care.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
              For over 20 years, Lesedi Funeral Society has supported families across South African
              communities with compassionate, professional funeral services you can trust.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="tel:+27638110472"
                className="inline-flex items-center gap-2 rounded-full bg-emergency px-6 py-3.5 text-sm font-semibold text-emergency-foreground shadow-soft hover:opacity-95 transition"
              >
                <Phone className="h-4 w-4" />
                Emergency Assistance
              </a>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary hover:bg-primary-foreground/90 transition"
              >
                Get an Instant Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL TRUST STRIP */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Proudly serving the KOSH community:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            {business.towns.map((town) => (
              <span key={town} className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">How we help</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Quiet, careful support — exactly when you need it.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every family is different. Our team listens first, then guides you through clear,
            unhurried choices so nothing is missed and nothing feels rushed.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {helpItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-card border border-border p-6 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTANT QUOTE CALCULATOR */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Affordable cover</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Get your funeral cover quote in seconds.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cover for your whole family from just R31 a month. No paperwork to get a price —
              just choose your options below.
            </p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* CREDENTIALS / ABOUT GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src={lily}
              alt="White lily on a teal backdrop"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl shadow-card object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-4 sm:-right-6 hidden sm:flex flex-col items-start rounded-2xl bg-card border border-border p-5 shadow-card max-w-[220px]">
              <span className="text-3xl font-display font-bold text-primary">20+</span>
              <span className="mt-1 text-sm text-muted-foreground leading-snug">
                Years of trusted service to South African communities
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why families choose us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Two decades of trusted, dignified service.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are an authorised Financial Services Provider rooted in the South African communities —
              committed to honouring every life with respect, integrity and care.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {credentials.map((c) => (
                <div key={c.label} className="rounded-xl bg-card border border-border p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-display font-semibold text-foreground">{c.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-snug">{c.sub}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 sm:p-14 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                Speak to a caring advisor today.
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl">
                Whether you need urgent assistance or are planning ahead, we are here to listen and
                guide you at your own pace.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <a
                href="tel:+27638110472"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emergency px-6 py-3.5 text-sm font-semibold text-emergency-foreground"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary"
              >
                Request a Call Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
