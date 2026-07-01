import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What should I do immediately after a loved one passes away?",
    answer: "If the passing happens at home, contact emergency services (10111) or your doctor to certify the death. If it happens in a hospital, the hospital staff will assist with the initial certification. Contact our 24/7 emergency line as soon as possible so we can arrange the transfer of your loved one into our care.",
  },
  {
    question: "How long does it take for a claim to be paid?",
    answer: "Once we have received all the necessary and correct documentation (including the certified death certificate and ID copies), valid claims are usually processed and paid directly into the beneficiary's bank account within 24 to 48 hours.",
  },
  {
    question: "What happens if the death is due to unnatural causes?",
    answer: "For unnatural deaths (e.g., accidents), the SAPS must be involved, and the body will be transferred to a state mortuary for a post-mortem. A police report will be required to process the claim. There is no waiting period for accidental death claims, provided the first premium has been received.",
  },
  {
    question: "Are pre-existing conditions covered?",
    answer: "Yes, we do not exclude pre-existing health conditions. However, standard waiting periods apply for natural deaths (typically a 6-month waiting period).",
  },
  {
    question: "Who can I cover on my policy?",
    answer: "Depending on your selected plan, you can cover yourself, your spouse, up to 6 children (even with different surnames), and extended family members. Refer to our Services page to compare different cover options.",
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={openIndex === index}
          >
            <span className="font-display font-semibold text-foreground text-lg">
              {faq.question}
            </span>
            <ChevronDown 
              className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`} 
            />
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
