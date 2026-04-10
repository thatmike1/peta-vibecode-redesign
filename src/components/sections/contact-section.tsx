import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContourBg } from "@/components/contour-bg";
import { contact } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { Mail, Phone, Linkedin, Github, Globe } from "lucide-react";

export function ContactSection() {
  const { ui } = useContent();

  const contactLinks = [
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone}` },
    { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
    { icon: Github, label: "GitHub", href: contact.github },
    { icon: Globe, label: "petrmikeska.cz", href: contact.website },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-hero-bg overflow-hidden"
    >
      <ContourBg className="text-hero-text" animate={false} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <SectionHeading light>{ui.sections.contact}</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal delay={200}>
            <p className="text-hero-text/50 text-lg font-serif leading-relaxed max-w-md">
              {ui.contact.tagline}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="space-y-5">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 text-hero-text/60 hover:text-hero-text transition-colors group"
                >
                  <div className="w-9 h-9 rounded-md border border-hero-text/10 flex items-center justify-center group-hover:border-terracotta/40 transition-colors">
                    <Icon className="w-4 h-4 text-terracotta/70" />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
