// Central business + site metadata. Update SITE_URL to the live production domain.
export const SITE_URL = "https://www.lesedifuneralsociety.co.za";

export const business = {
  name: "Lesedi Funeral Society",
  legalName: "Lesedi Funeral Society",
  tagline: "Standing with your family, with dignity and care.",
  phone: "+27638110472",
  phoneDisplay: "063 811 0472",
  email: "Lesedifuneralsociety@gmail.com",
  whatsapp: "27638110472",
  fsp: "9027",
  foundingYear: "2001",
  yearsOfService: "20+",
  towns: ["Klerksdorp", "Orkney", "Stilfontein", "Hartbeesfontein"],
  region: "North West",
  country: "South Africa",
  areaLabel: "KOSH Community",
  streetAddress: "30 Boom Street, Saambou Building",
  addressLocality: "Klerksdorp",
  postalCode: "2571",
} as const;

/** Build a WhatsApp deep-link with a pre-filled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
