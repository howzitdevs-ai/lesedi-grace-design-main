import { useState } from "react";
import { MessageCircle, Phone, X, AlertTriangle } from "lucide-react";

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-2 w-64 p-4 bg-card border border-border rounded-2xl shadow-xl animate-in slide-in-from-bottom-5">
          <h3 className="font-semibold text-foreground text-sm mb-1">How can we help?</h3>
          
          <a
            href="tel:+27638110472"
            className="flex items-center gap-3 p-3 rounded-xl bg-emergency/10 text-emergency hover:bg-emergency/20 transition-colors"
          >
            <div className="bg-emergency text-emergency-foreground p-1.5 rounded-lg">
              <Phone className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider">Emergency</span>
              <span className="text-sm font-bold">063 811 0472</span>
            </div>
          </a>

          <a
            href="https://wa.me/27638110472?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Lesedi%20Funeral%20Society%20cover."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors"
          >
            <div className="bg-[#25D366] text-white p-1.5 rounded-lg">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider">WhatsApp Us</span>
              <span className="text-sm font-bold">Chat Now</span>
            </div>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 active:scale-95 ${
          isOpen ? "bg-card text-foreground border border-border" : "bg-primary text-primary-foreground"
        }`}
        aria-label="Contact us"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
