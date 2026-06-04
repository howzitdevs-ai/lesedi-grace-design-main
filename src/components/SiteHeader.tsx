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

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ─── Main header bar ─────────────────────────────────────────────── */}
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

            {/*
             * Spacer — keeps the flex layout balanced on mobile so the logo
             * stays left-aligned.  The REAL hamburger button lives OUTSIDE
             * the header element (see below) to escape the header's stacking
             * context which was swallowing touch/click events in some browsers.
             */}
            <div className="md:hidden w-9 h-9" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/*
       * ─── Hamburger button ──────────────────────────────────────────────
       * MUST live outside <header> so it sits in the ROOT stacking context
       * with its own z-[60].  The header's sticky+z-50 stacking context was
       * trapping the button's z-index and causing touch events to fail on
       * mobile browsers (especially with backdrop-filter on the header).
       *
       * Visually aligned with the header: top-[14px] centres a 36px button
       * inside the 64px (h-16) header row; right-4 matches the px-4 padding.
       */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden fixed top-[14px] right-4 z-[60] inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition-colors"
        style={{ touchAction: "manipulation" }}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/*
       * ─── Dimmed backdrop ───────────────────────────────────────────────
       * z-[45] — below the header (z-50) so the header stays visible,
       * but above the page content.  Tap anywhere to close the menu.
       */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-[45] bg-black/20"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/*
       * ─── Slide-down menu panel ─────────────────────────────────────────
       * z-[48] — above the backdrop (45) but below the header (50) and
       * the hamburger button (60).  top-16 = 64px = exact header height.
       */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-16 z-[48] bg-background border-b border-border shadow-xl"
          style={{
            animation: "slideDown 0.2s ease forwards",
          }}
        >
          <style>{`
            @keyframes slideDown {
              from { opacity: 0; transform: translateY(-8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-secondary text-primary font-semibold" }}
                  inactiveProps={{ className: "text-foreground hover:bg-muted" }}
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
