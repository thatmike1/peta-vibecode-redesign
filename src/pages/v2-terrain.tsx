import { Navigation } from "@/components/navigation";
import { TerrainCanvas } from "@/components/v2/terrain-canvas";
import { ContourDivider } from "@/components/v2/contour-divider";
import { Reveal } from "@/components/reveal";
import { hero, footer } from "@/data/content";
import { Github, Linkedin, ChevronDown, Download } from "lucide-react";
import {
  V2AboutSection,
  V2EducationSection,
  V2ExperienceSection,
  V2ProjectsSection,
  V2SkillsSection,
  V2CertificationsSection,
  V2ServicesSection,
  V2ContactSection,
} from "@/components/v2/enhanced-sections";

export default function V2TerrainPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ── WebGL Terrain Hero ── */}
        <section className="relative min-h-screen overflow-hidden flex items-center bg-[oklch(0.09_0.025_165)]">
          <TerrainCanvas />

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
            <div className="max-w-2xl">
              <Reveal delay={200}>
                <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 mb-6">
                  {hero.coordinates} · Beskydy, CZ
                </p>
              </Reveal>

              <Reveal delay={400}>
                <h1 className="font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.85] text-white mb-4 drop-shadow-[0_4px_60px_rgba(0,0,0,0.5)]">
                  Petr
                  <br />
                  Mikeska
                </h1>
              </Reveal>

              <Reveal delay={600}>
                <p className="text-white/40 text-lg font-light max-w-md mb-8 leading-relaxed">
                  GIS Analytik & Geoinformatik
                </p>
              </Reveal>

              <Reveal delay={700}>
                <div className="flex flex-wrap gap-2 mb-10">
                  {hero.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-medium tracking-widest text-white/45 border border-white/8 rounded-full px-4 py-1.5 bg-white/[0.03] backdrop-blur-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={800}>
                <div className="flex items-center gap-4">
                  <a
                    href="#about"
                    className="bg-white text-black font-medium text-sm px-7 py-2.5 rounded-full hover:bg-white/90 transition-all shadow-lg shadow-white/10"
                  >
                    Prozkoumat
                  </a>
                  <a
                    href={hero.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/50 border border-white/12 font-medium text-sm px-6 py-2.5 rounded-full hover:text-white hover:border-white/25 transition-all backdrop-blur-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    CV
                  </a>
                </div>
              </Reveal>

              <Reveal delay={950}>
                <div className="flex items-center gap-5 mt-16">
                  <a
                    href={hero.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/15 hover:text-white/50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={hero.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/15 hover:text-white/50 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <div className="w-10 h-px bg-white/8" />
                  <span className="text-[9px] text-white/15 tracking-[0.25em] uppercase">
                    Beskydy · Olomouc
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/12 animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </div>
        </section>

        {/* ── Dark sections with contour dividers ── */}
        <div className="bg-[oklch(0.12_0.02_165)]">
          <ContourDivider />
        </div>
        <V2AboutSection />
        <div className="bg-[oklch(0.10_0.018_165)]">
          <ContourDivider />
        </div>
        <V2EducationSection />
        <div className="bg-[oklch(0.12_0.02_165)]">
          <ContourDivider />
        </div>
        <V2ExperienceSection />
        <div className="bg-[oklch(0.10_0.018_165)]">
          <ContourDivider />
        </div>
        <V2ProjectsSection />
        <div className="bg-[oklch(0.12_0.02_165)]">
          <ContourDivider />
        </div>
        <V2SkillsSection />
        <div className="bg-[oklch(0.10_0.018_165)]">
          <ContourDivider />
        </div>
        <V2CertificationsSection />
        <div className="bg-[oklch(0.12_0.02_165)]">
          <ContourDivider />
        </div>
        <V2ServicesSection />
        <V2ContactSection />
      </main>

      <footer className="bg-[oklch(0.06_0.015_165)] border-t border-white/3 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/20 text-xs">
            {footer.name} · {footer.address} · {footer.zip} · IČO: {footer.ico}
          </p>
          <p className="text-white/12 text-xs">{footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}
