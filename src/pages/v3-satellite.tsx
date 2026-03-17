import { Navigation } from "@/components/navigation";
import { SatelliteGrid } from "@/components/v3/satellite-grid";
import { SkillBar } from "@/components/v3/skill-bar";
import { Reveal } from "@/components/reveal";
import {
  hero,
  about,
  education,
  experience,
  projects,
  skills,
  certifications,
  services,
  contact,
  footer,
} from "@/data/content";
import {
  Github,
  Linkedin,
  ChevronDown,
  Download,
  Mail,
  Phone,
  Globe,
  MapPin,
  ExternalLink,
  Award,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

/** skill level mapping for visualization bars */
const skillLevels: Record<string, number> = {
  QGIS: 92,
  "ArcGIS Pro": 85,
  "GDAL/OGR": 80,
  GeoServer: 70,
  MapServer: 65,
  SNAP: 72,
  "Agisoft Metashape": 68,
  "OGC Standards": 75,
  CloudCompare: 60,
  Python: 90,
  JavaScript: 82,
  SQL: 88,
  Bash: 70,
  "C#": 55,
  HTML: 90,
  CSS: 85,
  "REST API": 88,
  WordPress: 72,
  YOOtheme: 65,
  PostgreSQL: 88,
  PostGIS: 90,
  MySQL: 70,
  GeoPandas: 85,
  Shapely: 80,
  NumPy: 78,
  Pandas: 82,
  Matplotlib: 75,
  YOLOv8: 78,
  OpenCV: 75,
  TensorFlow: 60,
  PyTorch: 58,
  "GitHub Copilot": 85,
  Claude: 80,
  Blender: 65,
  MeshLab: 55,
  Git: 88,
  GitHub: 90,
  Linux: 78,
  Ubuntu: 75,
  Docker: 65,
};

/** project marker colors for the map-legend style */
const markerColors = [
  "oklch(0.65 0.20 160)",
  "oklch(0.75 0.18 80)",
  "oklch(0.60 0.22 30)",
  "oklch(0.55 0.18 280)",
  "oklch(0.70 0.20 140)",
  "oklch(0.65 0.15 50)",
  "oklch(0.58 0.20 200)",
  "oklch(0.72 0.16 100)",
  "oklch(0.62 0.18 320)",
];

export default function V3SatellitePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ================================================================
            HERO - full viewport satellite view
        ================================================================ */}
        <section className="relative min-h-screen overflow-hidden flex items-center bg-[oklch(0.10_0.03_240)]">
          {/* layered CSS terrain simulation */}
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

          {/* CSS noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />

          {/* interactive SVG coordinate grid */}
          <SatelliteGrid />

          {/* scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.015]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            }}
          />

          {/* hero content */}
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

              {/* right side coordinate readout */}
              <Reveal delay={900}>
                <div className="hidden lg:block text-right space-y-1">
                  <p className="font-mono text-[10px] text-white/15 tracking-widest">
                    LAT 49.5167
                  </p>
                  <p className="font-mono text-[10px] text-white/15 tracking-widest">
                    LON 18.3333
                  </p>
                  <p className="font-mono text-[10px] text-white/15 tracking-widest">
                    ALT 632M
                  </p>
                  <p className="font-mono text-[10px] text-white/15 tracking-widest">
                    DATUM WGS84
                  </p>
                  <p className="font-mono text-[10px] text-white/15 tracking-widest">
                    EPSG:4326
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* scroll indicator */}
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

        {/* ================================================================
            ABOUT - editorial two-column with pull-quote
        ================================================================ */}
        <section id="about" className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-[2px] bg-[oklch(0.65_0.20_160)]" />
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                  O mně
                </h2>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
              {/* pull-quote side */}
              <Reveal delay={200}>
                <div className="sticky top-24">
                  <blockquote className="border-l-4 border-[oklch(0.65_0.20_160)] pl-6 py-2">
                    <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-neutral-800">
                      &ldquo;Propojuji GIS, vývoj a datovou analytiku do
                      funkčních geodatových řešení.&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={hero.photo}
                      alt="Petr Mikeska"
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[oklch(0.65_0.20_160)]/20"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">
                        {hero.name}
                      </p>
                      <p className="text-sm text-neutral-500">
                        GIS Analyst & Geoinformatics
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* text side */}
              <div className="space-y-6">
                {about.map((paragraph, i) => (
                  <Reveal key={i} delay={300 + i * 100}>
                    <p className="text-neutral-600 leading-relaxed text-[15px]">
                      {i === 0 && (
                        <span className="font-serif text-5xl text-[oklch(0.65_0.20_160)] float-left mr-3 mt-1 leading-[0.8]">
                          {paragraph.charAt(0)}
                        </span>
                      )}
                      {i === 0 ? paragraph.slice(1) : paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            EDUCATION - animated timeline
        ================================================================ */}
        <section id="education" className="py-28 bg-[oklch(0.97_0.005_240)]">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-[2px] bg-[oklch(0.65_0.20_160)]" />
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                  Vzdělání
                </h2>
              </div>
            </Reveal>

            <div className="relative">
              {/* vertical timeline line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[oklch(0.65_0.20_160)] via-[oklch(0.75_0.18_80)] to-[oklch(0.65_0.20_160)] opacity-30 hidden md:block" />

              <div className="space-y-12">
                {education.map((edu, i) => {
                  const dotColors = [
                    "oklch(0.65 0.20 160)",
                    "oklch(0.75 0.18 80)",
                    "oklch(0.60 0.22 30)",
                  ];
                  const color = dotColors[i % dotColors.length];
                  return (
                    <Reveal key={i} delay={i * 150}>
                      <div className="flex gap-6 md:gap-10 group">
                        {/* timeline dot */}
                        <div className="relative flex-shrink-0 hidden md:flex flex-col items-center">
                          <div
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white shadow-md group-hover:scale-110 transition-transform duration-300"
                            style={{ borderColor: color }}
                          >
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: color }}
                            />
                          </div>
                        </div>

                        {/* card */}
                        <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-neutral-100 group-hover:shadow-md group-hover:border-[oklch(0.65_0.20_160)]/20 transition-all duration-300">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <div>
                              <a
                                href={edu.institutionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-neutral-900 hover:text-[oklch(0.65_0.20_160)] transition-colors inline-flex items-center gap-1"
                              >
                                {edu.institution}
                                <ExternalLink className="w-3 h-3 opacity-50" />
                              </a>
                              <p className="text-sm text-neutral-500">
                                {edu.location}
                              </p>
                            </div>
                            <span
                              className="text-xs font-mono px-3 py-1 rounded-full"
                              style={{
                                backgroundColor: `color-mix(in oklch, ${color} 10%, white)`,
                                color: color,
                              }}
                            >
                              {edu.type.split("·")[0]?.trim()}
                            </span>
                          </div>
                          <p className="font-medium text-neutral-800 mb-3">
                            {edu.degree}
                          </p>
                          <p className="text-xs text-neutral-400 mb-4">
                            {edu.type}
                          </p>
                          <ul className="space-y-1.5">
                            {edu.highlights.map((h, j) => (
                              <li
                                key={j}
                                className="text-sm text-neutral-600 flex items-start gap-2"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                  style={{ backgroundColor: color }}
                                />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            EXPERIENCE - cards with hover highlight
        ================================================================ */}
        <section id="experience" className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-[2px] bg-[oklch(0.75_0.18_80)]" />
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                  Praxe
                </h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {experience.map((exp, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="group relative bg-neutral-50 rounded-xl p-6 border border-neutral-100 hover:bg-[oklch(0.10_0.03_240)] hover:border-[oklch(0.10_0.03_240)] transition-all duration-500 cursor-default overflow-hidden">
                    {/* hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,oklch(0.65_0.20_160_/_0.05),transparent_70%)]" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[oklch(0.65_0.20_160)] transition-colors duration-500" />
                        <span className="text-xs font-mono text-neutral-400 group-hover:text-white/40 transition-colors duration-500">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-white transition-colors duration-500 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-[oklch(0.65_0.20_160)] mb-1">
                        {exp.company}
                      </p>
                      <p className="text-xs text-neutral-400 group-hover:text-white/30 transition-colors duration-500 mb-4">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {exp.location}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="text-sm text-neutral-600 group-hover:text-white/60 transition-colors duration-500 flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-[oklch(0.75_0.18_80)] mt-2 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            PROJECTS - map legend cards
        ================================================================ */}
        <section id="projects" className="py-28 bg-[oklch(0.97_0.005_240)]">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-[oklch(0.65_0.20_160)]" />
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                  Projekty
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-sm text-neutral-500 mb-16 ml-16 font-mono tracking-wide">
                MAP LEGEND &middot; {projects.length} entries
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => {
                const color = markerColors[i % markerColors.length];
                return (
                  <Reveal key={i} delay={i * 80}>
                    <div className="group bg-white rounded-xl p-6 border border-neutral-100 hover:shadow-lg hover:border-[oklch(0.65_0.20_160)]/20 transition-all duration-300 h-full flex flex-col">
                      {/* marker + title */}
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ring-4 group-hover:scale-125 transition-transform duration-300"
                          style={{
                            backgroundColor: color,
                            ringColor: `color-mix(in oklch, ${color} 15%, white)`,
                          }}
                        />
                        <h3 className="font-semibold text-neutral-900 group-hover:text-[oklch(0.65_0.20_160)] transition-colors leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-neutral-600 mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* features */}
                      <ul className="space-y-1 mb-4">
                        {project.features.slice(0, 2).map((f, j) => (
                          <li
                            key={j}
                            className="text-xs text-neutral-500 flex items-start gap-1.5"
                          >
                            <span className="text-[oklch(0.75_0.18_80)] mt-0.5">
                              &#9670;
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[oklch(0.93_0.03_160)] text-[oklch(0.40_0.12_160)] hover:bg-[oklch(0.65_0.20_160)] hover:text-white transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* link */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.65_0.20_160)] hover:gap-2 transition-all duration-300 mt-auto"
                      >
                        {project.linkLabel}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================
            SKILLS - data-viz fill bars
        ================================================================ */}
        <section id="skills" className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-[oklch(0.65_0.20_160)]" />
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                  Dovednosti
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-sm text-neutral-500 mb-16 ml-16 font-mono tracking-wide">
                PROFICIENCY INDEX &middot;{" "}
                {skills.reduce((a, c) => a + c.items.length, 0)} skills
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {skills.map((category, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-neutral-900 text-sm uppercase tracking-wider flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor:
                            markerColors[i % markerColors.length],
                        }}
                      />
                      {category.name}
                    </h3>
                    <div className="space-y-3">
                      {category.items.map((skill, j) => (
                        <SkillBar
                          key={skill}
                          name={skill}
                          level={skillLevels[skill] ?? 60}
                          delay={j * 60}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            CERTIFICATIONS - accent dividers
        ================================================================ */}
        <section
          id="certifications"
          className="py-28 bg-[oklch(0.97_0.005_240)]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-[2px] bg-[oklch(0.75_0.18_80)]" />
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                  Certifikace
                </h2>
              </div>
            </Reveal>

            <div className="max-w-3xl space-y-0">
              {certifications.map((cert, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="group py-8 border-b border-neutral-200 last:border-b-0 hover:bg-white/50 -mx-6 px-6 transition-colors duration-300 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[oklch(0.93_0.03_160)] flex items-center justify-center group-hover:bg-[oklch(0.65_0.20_160)] transition-colors duration-300">
                        <Award className="w-5 h-5 text-[oklch(0.65_0.20_160)] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          {cert.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-sm font-medium text-[oklch(0.65_0.20_160)]">
                            {cert.issuer}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono">
                            {cert.date}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SERVICES - numbered two-column grid
        ================================================================ */}
        <section id="services" className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-[2px] bg-[oklch(0.65_0.20_160)]" />
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                  Služby
                </h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="group relative p-6 rounded-xl border border-neutral-100 hover:border-[oklch(0.65_0.20_160)]/30 hover:shadow-md transition-all duration-300">
                    {/* big number */}
                    <span className="absolute top-4 right-5 font-serif text-6xl text-neutral-100 group-hover:text-[oklch(0.65_0.20_160)]/10 transition-colors duration-300 select-none leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 mb-2">
                        Service {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-serif text-xl text-neutral-900 mb-2 group-hover:text-[oklch(0.65_0.20_160)] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm italic text-[oklch(0.75_0.18_80)] mb-3">
                        {service.question}
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[oklch(0.93_0.03_160)] text-[oklch(0.40_0.12_160)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            CONTACT - dramatic dark section
        ================================================================ */}
        <section
          id="contact"
          className="relative py-32 bg-[oklch(0.10_0.03_240)] overflow-hidden"
        >
          {/* SVG decoration */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="contact-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
            <circle
              cx="650"
              cy="200"
              r="120"
              fill="none"
              stroke="oklch(0.65 0.20 160)"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle
              cx="650"
              cy="200"
              r="80"
              fill="none"
              stroke="oklch(0.65 0.20 160)"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <line
              x1="600"
              y1="200"
              x2="700"
              y2="200"
              stroke="oklch(0.65 0.20 160)"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <line
              x1="650"
              y1="150"
              x2="650"
              y2="250"
              stroke="oklch(0.65 0.20 160)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>

          {/* noise */}
          <div
            className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-[oklch(0.65_0.20_160)]" />
                <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/25">
                  Get in Touch
                </span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight">
                Pojďme
                <br />
                <span className="text-[oklch(0.65_0.20_160)]">
                  spolupracovat
                </span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.20_160)] animate-pulse" />
                <span className="text-sm text-white/40">
                  Dostupný pro nové projekty
                </span>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
                {
                  icon: Phone,
                  label: "Telefon",
                  value: contact.phone,
                  href: `tel:${contact.phone}`,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Petr Mikeska",
                  href: contact.linkedin,
                },
                {
                  icon: Globe,
                  label: "Web",
                  value: "petrmikeska.cz",
                  href: contact.website,
                },
              ].map((item, i) => (
                <Reveal key={i} delay={400 + i * 100}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block p-5 rounded-xl border border-white/10 hover:border-[oklch(0.65_0.20_160)]/40 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[oklch(0.65_0.20_160)]/15 flex items-center justify-center mb-4 group-hover:bg-[oklch(0.65_0.20_160)] transition-colors duration-300">
                      <item.icon className="w-4 h-4 text-[oklch(0.65_0.20_160)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-white/30 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                      {item.value}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            FOOTER - dark minimal
        ================================================================ */}
        <footer className="bg-[oklch(0.08_0.02_240)] py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-serif text-xl text-white/70">
                  {footer.name}
                </span>
                <span className="text-xs text-white/20 font-mono">
                  {footer.address} &middot; {footer.zip}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs text-white/20 font-mono">
                  IČO {footer.ico}
                </span>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/60 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/60 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-center">
              <p className="text-[11px] text-white/15 font-mono">
                {footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
