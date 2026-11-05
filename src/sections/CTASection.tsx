import { Button } from "../components/Button";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { openWhatsApp, buildGeneralMessage } from "../lib/whatsapp";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const handleWhatsApp = () => openWhatsApp(buildGeneralMessage());

  return (
    <section id="cta" className="section cta-section-wrapper" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-section">
          <div className="cta-content">
            <h2 id="cta-title" className="cta-title">
              VAMOS TIRAR SEU PROJETO DO PAPEL?
            </h2>
            <p className="cta-subtitle">
              Conte sua ideia. Nós ajudamos a transformá-la em uma solução digital.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <WhatsAppButton variant="hero" onClick={handleWhatsApp} showText={true} />
              <Button variant="outline" size="lg" onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}>
                Preencher formulário
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
