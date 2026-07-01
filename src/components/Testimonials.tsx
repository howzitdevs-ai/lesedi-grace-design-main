import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "When my father passed, Lesedi handled everything with such dignity. The claim was paid within two days and I never had to travel or stress. Truly a blessing to our family.",
    name: "Thandi M.",
    location: "Klerksdorp",
  },
  {
    quote:
      "I have been a member for over ten years. They treat you like family, not a policy number. Affordable premiums and they always answer when you call.",
    name: "Johannes S.",
    location: "Stilfontein",
  },
  {
    quote:
      "The team came to my home to sign me up and explained every detail patiently. When we needed them, they were there day and night. I recommend Lesedi to everyone.",
    name: "Nomsa D.",
    location: "Orkney",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Trusted by local families
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Two decades of families who trust us.
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Loved by thousands of local members
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <Quote className="h-8 w-8 text-accent/30" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
