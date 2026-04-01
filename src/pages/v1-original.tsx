import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { UniversityProjectsSection } from "@/components/sections/university-projects-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";
import { footer } from "@/data/content";
import { useContent } from "@/hooks/use-content";

export default function V1OriginalPage() {
  const { ui } = useContent();

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <UniversityProjectsSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="bg-hero-bg border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-hero-text/30 text-xs">
            {footer.name} · {footer.address} · {footer.zip} · {ui.footer.icoLabel}: {footer.ico}
          </p>
          <p className="text-hero-text/20 text-xs">{ui.footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}
