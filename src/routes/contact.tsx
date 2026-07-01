import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Lesedi Funeral Society" },
      { name: "description", content: "Get in touch with Lesedi Funeral Society. 24/7 emergency line, request a call back, or visit us in Klerksdorp." },
      { property: "og:title", content: "Contact Lesedi Funeral Society" },
      { property: "og:description", content: "Speak to a caring advisor — 24/7 support for local families." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "4a37c093-2bb5-4826-a31a-1c06d679cb35");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed", data);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground max-w-3xl leading-tight">
            We're here when you need us — day or night.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Reach us by phone, email or the form below. For urgent assistance, please call our
            24-hour emergency line.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact info */}
        <div className="space-y-4">
          <a
            href="tel:+27638110472"
            className="block rounded-2xl bg-emergency text-emergency-foreground p-6 hover:opacity-95 transition"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-emergency-foreground/15 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider opacity-80">24/7 Emergency Line</p>
                <p className="font-display text-xl font-bold">063 811 0472</p>
              </div>
            </div>
          </a>

          <div className="rounded-2xl bg-card border border-border p-6 space-y-5">
            <InfoRow icon={Mail} label="Email" value="Lesedifuneralsociety@gmail.com" href="mailto:Lesedifuneralsociety@gmail.com" />
            <InfoRow icon={MapPin} label="Visit" value={<>Klerksdorp, North West<br />South Africa</>} />
            <InfoRow icon={Clock} label="Office Hours" value={<>Mon – Fri · 08:00 – 17:00<br />Emergency line · 24/7</>} />
          </div>

          <div className="rounded-2xl bg-primary text-primary-foreground p-6">
            <p className="font-display font-semibold">FSP No: 9027</p>
            <p className="mt-1 text-sm text-primary-foreground/75">
              Authorised Financial Services Provider serving our local community.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-card border border-border p-7 sm:p-9 shadow-soft">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-12">
              <div className="h-14 w-14 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">Thank you</h2>
              <p className="mt-2 text-muted-foreground max-w-sm">
                A caring advisor will be in touch with you shortly. If your need is urgent, please
                call our 24/7 emergency line.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Request a Call Back</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Leave your details and we'll call you back at a time that suits you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Phone number" name="phone" type="tel" required />
              </div>
              <Field label="Email (optional)" name="email" type="email" />

              <div>
                <label className="text-sm font-medium text-foreground">How can we help?</label>
                <select
                  name="reason"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>Select an option</option>
                  <option>Emergency assistance</option>
                  <option>Funeral cover quote</option>
                  <option>Funeral planning</option>
                  <option>General enquiry</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Share anything you'd like us to know — there's no rush."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95 transition shadow-soft disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Request a Call Back"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                We'll respond as quickly as possible. For urgent help, please call our 24/7 line.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-emergency"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm text-foreground leading-relaxed">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition">{content}</a>
  ) : (
    content
  );
}
