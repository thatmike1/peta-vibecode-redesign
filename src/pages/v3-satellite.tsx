import { Navigation } from "@/components/navigation";
import { SatelliteGrid } from "@/components/v3/satellite-grid";
import { Reveal } from "@/components/reveal";
import { hero, footer } from "@/data/content";
import { Github, Linkedin, ChevronDown, Download } from "lucide-react";
import {
  V3AboutSection,
  V3EducationSection,
  V3ExperienceSection,
  V3ProjectsSection,
  V3SkillsSection,
  V3CertificationsSection,
  V3ServicesSection,
  V3ContactSection,
  V3Divider,
} from "@/components/v3/enhanced-sections";

export default function V3SatellitePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ── HERO — satellite view ── */}
        <section className="relative min-h-screen overflow-hidden flex items-center bg-[oklch(0.10_0.03_240)]">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 120% 80% at 30% 70%, oklch(0.14 0.04 200 / 0.6), transparent),
                radial-gradient(ellipse 80% 60% at 70% 30%, oklch(0.12 0.05 260 / 0.4), transparent),
                radial-gradient(ellipse 60% 90% at 50% 50%, oklch(0.08 0.03 220 / 0.5), transparent),
                linear-gradient(180deg, oklch(0.10 0.03 240), oklch(0.08 0.04 250))
              `,
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />

          <SatelliteGrid />

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.015]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
              <div>
                <Reveal delay={100}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.20_160)] animate-pulse" />
                    <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25">
                      {hero.coordinates} &middot; Signal Active
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={300}>
                  <h1 className="font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] text-white mb-6 tracking-tight">
                    Petr
                    <br />
                    <span className="text-[oklch(0.65_0.20_160)]">Mikeska</span>
                  </h1>
                </Reveal>

                <Reveal delay={500}>
                  <p className="text-white/30 text-lg mb-8 max-w-lg">
                    GIS Analytik &middot; Geoinformatik &middot; WebGIS
                    Developer
                  </p>
                </Reveal>

                <Reveal delay={600}>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {hero.specialties.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono tracking-wide rounded-full border border-white/10 text-white/50 bg-white/[0.03] backdrop-blur-sm hover:border-[oklch(0.65_0.20_160)]/40 hover:text-[oklch(0.65_0.20_160)] transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={750}>
                  <div className="flex items-center gap-4">
                    <a
                      href={hero.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[oklch(0.65_0.20_160)] text-white font-medium text-sm hover:bg-[oklch(0.60_0.22_160)] transition-all duration-300 shadow-lg shadow-[oklch(0.65_0.20_160)]/20"
                    >
                      <Download className="w-4 h-4" />
                      Stáhnout CV
                    </a>
                    <a
                      href={hero.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={hero.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={900}>
                <div className="hidden lg:block text-right space-y-1">
                  {[
                    "LAT 49.5167",
                    "LON 18.3333",
                    "ALT 632M",
                    "DATUM WGS84",
                    "EPSG:4326",
                  ].map((line) => (
                    <p
                      key={line}
                      className="font-mono text-[10px] text-white/15 tracking-widest"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <Reveal delay={1200}>
              <a
                href="#about"
                className="flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors"
              >
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase">
                  Scroll
                </span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── Dark sections ── */}
        <V3Divider />
        <V3AboutSection />
        <V3Divider />
        <V3EducationSection />
        <V3Divider />
        <V3ExperienceSection />
        <V3Divider />
        <V3ProjectsSection />
        <V3Divider />
        <V3SkillsSection />
        <V3Divider />
        <V3CertificationsSection />
        <V3Divider />
        <V3ServicesSection />
        <V3ContactSection />
      </main>

      <footer className="bg-[oklch(0.05_0.015_240)] border-t border-white/[0.03] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/15 text-xs">
            {footer.name} · {footer.address} · {footer.zip} · IČO: {footer.ico}
          </p>
          <p className="text-white/10 text-xs">{footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}
