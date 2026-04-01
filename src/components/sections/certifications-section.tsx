import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useContent } from "@/hooks/use-content";

export function CertificationsSection() {
  const { certifications, ui } = useContent();

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-parchment-dark">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>{ui.sections.certifications}</SectionHeading>
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
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-topo hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Zobrazit certifikát
                  </a>
                )}
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
