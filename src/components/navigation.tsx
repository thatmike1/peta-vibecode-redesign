import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "O mně", href: "#about" },
  { label: "Vzdělání", href: "#education" },
  { label: "Praxe", href: "#experience" },
  { label: "Projekty", href: "#projects" },
  { label: "Dovednosti", href: "#skills" },
  { label: "Certifikace", href: "#certifications" },
  { label: "Služby", href: "#services" },
  { label: "Kontakt", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className={cn(
            "font-serif text-xl transition-colors duration-300",
            scrolled ? "text-foreground" : "text-hero-text",
          )}
        >
          PM
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-medium tracking-wide transition-colors duration-300",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-hero-text/60 hover:text-hero-text",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://petrmikeska.cz/assets/resume/Petr_Mikeska_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1.5 text-[13px] font-medium px-4 py-1.5 rounded-full border transition-all duration-300",
              scrolled
                ? "border-topo/40 text-topo hover:bg-topo hover:text-primary-foreground"
                : "border-hero-text/25 text-hero-text/70 hover:border-hero-text/50 hover:text-hero-text",
            )}
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors",
            scrolled ? "text-foreground" : "text-hero-text",
          )}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 border-b border-border" : "max-h-0",
        )}
      >
        <div className="bg-background/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://petrmikeska.cz/assets/resume/Petr_Mikeska_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-topo font-medium"
          >
            <Download className="w-3.5 h-3.5" />
            Životopis
          </a>
        </div>
      </div>
    </nav>
  );
}
