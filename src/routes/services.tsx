import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ShieldCheck, Users, Plus, X, ChevronRight, FileText } from "lucide-react";
import { useState } from "react";
import ld1 from "@/assets/LD 1.png";
import ld2 from "@/assets/LD 2.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Lesedi Funeral Society" },
      { name: "description", content: "Explore our 2026 funeral cover plans. Reliable protection starting from only R31 P/M." },
    ],
  }),
  component: ServicesPage,
});

// 2026 Business Brochure Data - Verified
const plans = [
  {
    name: "Main Member Only",
    details: "Covers the main member only.",
    bands: [
      { age: "18 - 65", r10k: "R62", r15k: "R80", r20k: "R98", r30k: "R135", r50k: "R208" },
      { age: "66 - 75", r10k: "R125", r15k: "R175", r20k: "R225", r30k: "R325", r50k: "R526" },
      { age: "76 - 80", r10k: "R237", r15k: "R343", r20k: "R449", r30k: "-", r50k: "-" },
      { age: "81 - 85", r10k: "R337", r15k: "-", r20k: "-", r30k: "-", r50k: "-" },
    ]
  },
  {
    name: "Main Member & Spouse",
    details: "Covers main member and spouse.",
    bands: [
      { age: "18 - 65", r10k: "R83", r15k: "R113", r20k: "R142", r30k: "R200", r50k: "R317" },
      { age: "66 - 75", r10k: "R186", r15k: "R266", r20k: "R364", r30k: "R507", r50k: "R828" },
    ]
  },
  {
    name: "Main Member & up to 6 Children",
    details: "Covers main member and up to 6 children.",
    bands: [
      { age: "18 - 65", r10k: "R80", r15k: "R107", r20k: "R135", r30k: "R190", r50k: "R299" },
      { age: "66 - 75", r10k: "R175", r15k: "R251", r20k: "R326", r30k: "R476", r50k: "R777" },
    ]
  },
  {
    name: "Main Member, Spouse & up to 6 Children",
    details: "Covers main member, spouse, and up to 6 children.",
    bands: [
      { age: "18 - 65", r10k: "R113", r15k: "R157", r20k: "R200", r30k: "R288", r50k: "R463" },
      { age: "66 - 75", r10k: "R266", r15k: "R386", r20k: "R506", r30k: "R747", r50k: "R1,228" },
    ]
  }
];

const familyIncomeBands = [
  { age: "18 - 65", duration: "6", premium: "R45" },
  { age: "66 - 75", duration: "6", premium: "R80" },
  { age: "18 - 65", duration: "12", premium: "R60" },
  { age: "66 - 75", duration: "12", premium: "R110" },
];

const extendedFamilyBands = [
  { age: "0 - 17", cover: "R5,000", premium: "R10" },
  { age: "18 - 65", cover: "R10,000", premium: "R65" },
  { age: "66 - 75", cover: "R10,000", premium: "R130" },
  { age: "76 - 80", cover: "R10,000", premium: "R297" },
  { age: "81 - 85", cover: "R10,000", premium: "R468" },
];

const spouseChildrenBenefits = [
  { age: "Stillbirth* to 11 months", cover: "12.50%" },
  { age: "1 to 5 years", cover: "25.00%" },
  { age: "6 to 13 years", cover: "50.00%" },
  { age: "14 to 21 years", cover: "100.00%" },
  { age: "Spouse", cover: "100.00%" },
];

function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<null | { name: string, details: string }>(null);

  return (
    <div className="bg-white">
      {/* Category Detail Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <FileText size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-display uppercase tracking-tight">{selectedCategory.name}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {selectedCategory.details}
            </p>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg"
            >
              Close Info
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-primary text-white py-24 px-4 text-center">
        <div className="inline-block bg-accent/20 border border-accent/40 rounded-full px-4 py-1 text-sm font-bold text-accent mb-6 uppercase tracking-widest">
          FSP No: 9027 · Authorised Provider
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6 uppercase tracking-tighter">
          Dignity for your family,<br />
          <span className="text-accent">Peace of mind for you.</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Reliable funeral cover starting from only R31 P/M. 
        </p>
      </section>

      {/* Rates Tables Section - Brochure Layout */}
      <section id="rates" className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary font-display mb-4 uppercase">Cover Amounts</h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr>
                    <th rowSpan={2} className="p-6 text-left border-r-2 border-b-2 border-gray-100 bg-gray-50/50 w-[20%]">
                      <span className="text-xl font-bold text-gray-900 uppercase tracking-widest">Plan Type</span>
                    </th>
                    <th rowSpan={2} className="p-6 text-center border-r-2 border-b-2 border-gray-100 bg-gray-50/50 w-[15%]">
                      <span className="text-xl font-bold text-gray-900 uppercase tracking-widest">Age Band</span>
                    </th>
                    <th colSpan={5} className="p-4 text-center border-b-2 border-gray-100 bg-primary/5">
                      <span className="text-xl font-bold text-primary uppercase tracking-widest">Cover Amounts</span>
                    </th>
                  </tr>
                  <tr className="bg-gray-50/50 border-b-2 border-gray-100">
                    <th className="p-4 text-center border-r-2 border-gray-100 font-bold text-gray-600">R10,000</th>
                    <th className="p-4 text-center border-r-2 border-gray-100 font-bold text-gray-600">R15,000</th>
                    <th className="p-4 text-center border-r-2 border-gray-100 font-bold text-gray-600">R20,000</th>
                    <th className="p-4 text-center border-r-2 border-gray-100 font-bold text-gray-600">R30,000</th>
                    <th className="p-4 text-center font-bold text-gray-600">R50,000</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-gray-100">
                  {plans.map((plan, planIdx) => (
                    plan.bands.map((band, bandIdx) => (
                      <tr key={`${plan.name}-${band.age}`} className="hover:bg-gray-50/50 transition-colors">
                        {bandIdx === 0 && (
                          <td rowSpan={plan.bands.length} className={`p-6 border-r-2 border-gray-100 bg-white align-top ${planIdx !== plans.length - 1 ? 'border-b-2' : ''}`}>
                            <div className="flex flex-col h-full items-start justify-between">
                              <span className="text-lg font-bold text-gray-800 leading-tight">{plan.name}</span>
                              <button 
                                onClick={() => setSelectedCategory(plan)}
                                className="mt-4 p-2 text-primary hover:bg-primary/10 rounded-full transition-all flex items-center gap-2 text-sm font-bold"
                                title="View Details"
                              >
                                <Plus size={16} /> Details
                              </button>
                            </div>
                          </td>
                        )}
                        <td className="p-4 border-r-2 border-gray-100 text-center font-bold text-gray-700 whitespace-nowrap">
                          {band.age}
                        </td>
                        <td className="p-4 border-r-2 border-gray-100 text-center text-xl md:text-2xl font-black text-primary w-[13%]">
                          {band.r10k}
                        </td>
                        <td className="p-4 border-r-2 border-gray-100 text-center text-xl md:text-2xl font-black text-primary w-[13%]">
                          {band.r15k}
                        </td>
                        <td className="p-4 border-r-2 border-gray-100 text-center text-xl md:text-2xl font-black text-primary w-[13%]">
                          {band.r20k}
                        </td>
                        <td className="p-4 border-r-2 border-gray-100 text-center text-xl md:text-2xl font-black text-primary w-[13%]">
                          {band.r30k}
                        </td>
                        <td className="p-4 text-center text-xl md:text-2xl font-black text-primary w-[13%]">
                          {band.r50k}
                        </td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Grid for the other brochure tables */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Left Column */}
            <div className="space-y-8">
              {/* Family Income Benefit */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary/5 p-4 border-b-2 border-gray-100 text-center">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-widest">Family Income Benefit + Unlimited 3-Day Car Hire</h3>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b-2 border-gray-100">
                      <th className="p-3 text-center border-r-2 border-gray-100 font-bold text-gray-900">Plan Type</th>
                      <th className="p-3 text-center border-r-2 border-gray-100 font-bold text-gray-900">Age Band</th>
                      <th className="p-3 text-center border-r-2 border-gray-100 font-bold text-gray-900">Monthly Benefit</th>
                      <th className="p-3 text-center border-r-2 border-gray-100 font-bold text-gray-900">Monthly Duration</th>
                      <th className="p-3 text-center font-bold text-gray-900">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-gray-100">
                    {familyIncomeBands.map((band, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        {idx === 0 && (
                          <td rowSpan={4} className="p-4 border-r-2 border-gray-100 text-center font-bold text-gray-800 bg-white align-middle">
                            Income Benefit<br/>+<br/>Car Hire
                          </td>
                        )}
                        <td className="p-3 border-r-2 border-gray-100 text-center font-bold text-gray-700 whitespace-nowrap">{band.age}</td>
                        {(idx === 0 || idx === 2) && (
                          <td rowSpan={2} className="p-3 border-r-2 border-gray-100 text-center font-bold text-gray-700 bg-white align-middle">R1,000</td>
                        )}
                        {(idx === 0 || idx === 2) && (
                          <td rowSpan={2} className="p-3 border-r-2 border-gray-100 text-center font-bold text-gray-700 bg-white align-middle">{band.duration}</td>
                        )}
                        <td className="p-3 text-center text-lg font-black text-primary">{band.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Extended Family Rates */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary/5 p-4 border-b-2 border-gray-100 text-center">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-widest">Extended Family Rates</h3>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b-2 border-gray-100">
                      <th className="p-3 text-center border-r-2 border-gray-100 font-bold text-gray-900">Plan Type</th>
                      <th className="p-3 text-center border-r-2 border-gray-100 font-bold text-gray-900">Age Band</th>
                      <th className="p-3 text-center border-r-2 border-gray-100 font-bold text-gray-900">Cover</th>
                      <th className="p-3 text-center font-bold text-gray-900">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-gray-100">
                    {extendedFamilyBands.map((band, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        {idx === 0 && (
                          <td rowSpan={5} className="p-4 border-r-2 border-gray-100 text-center font-bold text-gray-800 bg-white align-middle">
                            Extended Family
                          </td>
                        )}
                        <td className="p-3 border-r-2 border-gray-100 text-center font-bold text-gray-700 whitespace-nowrap">{band.age}</td>
                        <td className="p-3 border-r-2 border-gray-100 text-center font-bold text-gray-700 whitespace-nowrap">{band.cover}</td>
                        <td className="p-3 text-center text-lg font-black text-primary">{band.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Spouse & Children Benefits */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary/5 p-4 border-b-2 border-gray-100 text-center">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-widest">Spouse & Children Benefits</h3>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b-2 border-gray-100">
                      <th className="p-4 text-center border-r-2 border-gray-100 font-bold text-gray-900">Age</th>
                      <th className="p-4 text-center font-bold text-gray-900">Cover</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-gray-100">
                    {spouseChildrenBenefits.map((band, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 border-r-2 border-gray-100 text-center font-bold text-gray-700">{band.age}</td>
                        <td className="p-4 text-center text-lg font-black text-primary">{band.cover}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bereavement Support */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary/5 p-4 border-b-2 border-gray-100 text-center">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-widest">Bereavement Support</h3>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b-2 border-gray-100">
                      <th className="p-4 text-center border-r-2 border-gray-100 font-bold text-gray-900">Plan Type</th>
                      <th className="p-4 text-center border-r-2 border-gray-100 font-bold text-gray-900">Age Band</th>
                      <th className="p-4 text-center font-bold text-gray-900">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 border-r-2 border-gray-100 text-center font-bold text-gray-800">Bereavement</td>
                      <td className="p-4 border-r-2 border-gray-100 text-center font-bold text-gray-700">All Ages</td>
                      <td className="p-4 text-center text-lg font-black text-primary">R10.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <div className="mt-8 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-primary font-display mb-6 uppercase">Additional Information</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>No travelling cost to claim. Send PCM (please call me) or email to claim.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Cover children with different surnames.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>No exclusions on pre-existing health conditions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Claims paid into beneficiaries' bank account.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>No waiting period for Accidental Death, provided we received the first premium.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Death emanating from criminal activities will not be covered.</span>
              </li>
            </ul>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-xs font-bold text-gray-400 uppercase tracking-[0.2em] bg-gray-50 py-6 px-10 rounded-full border border-gray-100">
            <span>* A 6-months waiting period is applicable for natural causes.</span>
            <span>* 2026 Brochure Rates</span>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-20 items-center">
          <img src={ld1} alt="Lesedi Service 1" className="rounded-3xl shadow-2xl w-full" />
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary font-display uppercase tracking-tight">Dignified Arrangements.</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In your time of need, we handle every detail with respect and care. 
              Our 2026 claims process is optimized to provide immediate relief for your family.
            </p>
            <div className="grid gap-4">
              {["No travelling costs to process claims", "Children with different surnames covered", "No exclusions for pre-existing conditions"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 size={24} className="text-primary" />
                  <span className="text-lg text-gray-700 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-32 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold font-display mb-10 uppercase tracking-tighter">Ready to secure your future?</h2>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-emergency text-emergency-foreground px-16 py-6 rounded-xl text-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
            Contact Us <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </div>
  );
}

