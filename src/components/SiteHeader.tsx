import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Lesedi_Funeral_Society_Logo-removebg-preview.png";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/services", label: "SERVICES" },
  { to: "/how-to-claim", label: "HOW TO CLAIM" },
  { to: "/documentation", label: "DOCUMENTS" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
            : "bg-background/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              onClick={() => setOpen(false)}
            >
              <img
                src={logo}
                alt="Lesedi Funeral Society logo"
                className="h-10 w-auto object-contain"
              />
              <span className="flex items-center">
                <span className="font-display text-muted-foreground text-[16px] tracking-wide ml-2 uppercase font-medium">
                  LESEDI FUNERAL SOCIETY
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  inactiveProps={{
                    className: "text-muted-foreground hover:text-foreground",
                  }}
                  className="px-3 py-2 text-sm font-medium transition-colors rounded-md"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emergency px-5 py-2.5 text-sm font-semibold text-emergency-foreground hover:opacity-90 transition-all uppercase tracking-wider"
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* Mobile hamburger — z-[60] keeps it above the backdrop overlay */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden relative z-[60] inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu: rendered OUTSIDE <header> so backdrop-filter stacking
           context cannot clip or block it.  Fixed to top-16 (= 64px header height). ── */}

      {/* Dimmed backdrop — click anywhere outside to close */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-[45] bg-black/20"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-down panel */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-16 z-[50] bg-background border-b border-border shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  activeProps={{
                    className: "bg-secondary text-primary font-semibold",
                  }}
                  inactiveProps={{
                    className: "text-foreground hover:bg-muted",
                  }}
                  className="px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                >
                  {l.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-emergency px-4 py-3 text-sm font-semibold text-emergency-foreground uppercase tracking-wider hover:opacity-90 transition-all"
              >
                GET IN TOUCH
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
