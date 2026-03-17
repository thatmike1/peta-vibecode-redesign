import { Reveal } from "@/components/reveal";
import { ContourBg } from "@/components/contour-bg";
import { hero } from "@/data/content";
import { ChevronDown, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden flex items-center">
      <ContourBg className="text-hero-text" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Reveal delay={100}>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-hero-text/35 mb-8">
                {hero.coordinates}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] tracking-tight text-hero-text mb-8">
                Petr
                <br />
                Mikeska
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-2.5 mb-10">
                {hero.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-medium tracking-wide text-hero-text/60 border border-hero-text/15 rounded-full px-4 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={450}>
              <div className="flex flex-wrap gap-2 mb-10">
                {hero.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-wide text-hero-text/40 hover:text-hero-text/60 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex items-center gap-4">
                <a
                  href="#about"
                  className="bg-hero-text text-hero-bg font-medium text-sm px-7 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Více
                </a>
                <a
                  href="#contact"
                  className="text-hero-text/70 border border-hero-text/20 font-medium text-sm px-7 py-2.5 rounded-full hover:border-hero-text/40 hover:text-hero-text transition-all"
                >
                  Kontakt
                </a>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex items-center gap-5 mt-14">
                <a
                  href={hero.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hero-text/30 hover:text-hero-text/70 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-[18px] h-[18px]" />
                </a>
                <a
                  href={hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hero-text/30 hover:text-hero-text/70 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-[18px] h-[18px]" />
                </a>
                <div className="w-12 h-px bg-hero-text/15" />
                <span className="text-[10px] text-hero-text/25 tracking-widest uppercase">
                  GIS Analytik
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <Reveal delay={300}>
              <div className="relative">
                <img
                  src={hero.photo}
                  alt="Petr Mikeska"
                  className="w-56 lg:w-full max-w-[280px] rounded-lg shadow-2xl shadow-black/40 border border-white/8"
                />
                <div className="absolute -bottom-3 -right-3 bg-terracotta text-white text-[10px] font-mono tracking-wider px-3 py-1 rounded-full shadow-lg">
                  49.5°N
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-hero-text/20 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
