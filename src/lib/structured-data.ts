import { SITE_URL, business } from "./site";

// LocalBusiness / InsuranceAgency schema — the core local-SEO signal so Google can
// show Lesedi in local results across the KOSH towns.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": `${SITE_URL}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    telephone: business.phone,
    email: business.email,
    image: `${SITE_URL}/cover.png`,
    logo: `${SITE_URL}/cover.png`,
    priceRange: "R10 - R1,228 / month",
    foundingDate: business.foundingYear,
    slogan: business.tagline,
    description:
      "Authorised Financial Services Provider (FSP 9027) offering affordable, dignified funeral cover to families across Klerksdorp, Orkney, Stilfontein and Hartbeesfontein.",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: "ZA",
    },
    areaServed: business.towns.map((t) => ({ "@type": "City", name: t })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      contactType: "emergency",
      availableLanguage: ["English", "Setswana", "Afrikaans"],
      description: "24/7 emergency assistance line",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Funeral Cover / Funeral Insurance",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: business.towns.join(", "),
    description:
      "Affordable funeral cover from R31 per month with cover up to R50,000, family income benefit, unlimited 3-day car hire and extended-family options.",
    offers: {
      "@type": "Offer",
      priceCurrency: "ZAR",
      price: "31",
      description: "Funeral cover plans starting from R31 per month.",
    },
  };
}
