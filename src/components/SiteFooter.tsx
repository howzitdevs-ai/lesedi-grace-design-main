import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/Lesedi_Funeral_Society_Logo-removebg-preview.png";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Lesedi" className="h-10 w-auto object-contain" />
            <span className="font-display font-semibold text-lg">Lesedi Funeral Society</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75 max-w-md leading-relaxed">
            Compassionate, dignified funeral services for the KOSH community. Standing with families
            through life's most difficult moments, with care, respect, and integrity.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            Authorised Financial Services Provider · FSP No: 9027
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary-foreground">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>KOSH Community<br />North West, South Africa</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="tel:+27638110472" className="hover:text-primary-foreground">063 811 0472</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:Lesedifuneralsociety@gmail.com" className="hover:text-primary-foreground break-all">
                Lesedifuneralsociety@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">Services</Link></li>
            <li><Link to="/documentation" className="hover:text-primary-foreground">Documentation</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Lesedi Funeral Society. All rights reserved.{" "}
            <span className="hidden md:inline">|</span>{" "}
            <span className="block mt-1 md:mt-0 md:inline">
              Designed by:{" "}
              <a href="https://www.aluwanienterprise.co.za/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors underline decoration-primary-foreground/30 underline-offset-2">
                Aluwani Enterprise
              </a>
            </span>
          </p>
          <p>Serving families with dignity since 2003.</p>
        </div>
      </div>
    </footer>
  );
}
