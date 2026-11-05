import { SEO } from "../components/SEO";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ServicesSection } from "../sections/ServicesSection";
import { DifferentialsSection } from "../sections/DifferentialsSection";
import { PortfolioPreviewSection } from "../sections/PortfolioPreviewSection";
import { ProcessSection } from "../sections/ProcessSection";
import { BudgetSection } from "../sections/BudgetSection";
import { FAQSection } from "../sections/FAQSection";
import { CTASection } from "../sections/CTASection";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function Home() {
  return (
    <>
      <SEO page="home" />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <PortfolioPreviewSection />
      <ProcessSection />
      <BudgetSection />
      <FAQSection />
      <CTASection />
      <WhatsAppButton variant="float" />
    </>
  );
}
