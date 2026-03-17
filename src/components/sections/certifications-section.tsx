import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/data/content";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-parchment-dark">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>Certifikace</SectionHeading>
        </Reveal>

        <div className="max-w-3xl">
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={100 + i * 100}>
              <div className="py-6 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="font-serif text-lg">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                {i < certifications.length - 1 && (
                  <div className="mt-6 border-b border-border" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
