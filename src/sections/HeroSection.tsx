import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "../components/Button";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { openWhatsApp, buildGeneralMessage } from "../lib/whatsapp";

export function HeroSection() {
  const handleWhatsApp = () => openWhatsApp(buildGeneralMessage());

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content grid grid-2 gap-12 items-center">
          <div className="hero-text animate-slide-up">
            <span className="section-label" style={{ display: "inline-block", marginBottom: "var(--space-3)" }}>
              DESENVOLVIMENTO WEB E SOFTWARE PERSONALIZADO
            </span>
            <h1 id="hero-title" className="hero-title" style={{ fontSize: "var(--text-fluid-5xl)", fontWeight: "var(--font-bold)", lineHeight: "var(--leading-tight)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
              Tecnologia que transforma ideias em soluções.
            </h1>
            <p className="hero-subtitle" style={{ fontSize: "var(--text-fluid-xl)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-8)", maxWidth: "100%" }}>
              Desenvolvemos sites, landing pages e sistemas web personalizados para empresas que querem crescer, inovar e conquistar espaço no digital.
            </p>
            <div className="hero-cta-group flex flex-wrap gap-4" style={{ marginBottom: "var(--space-8)" }}>
              <Button
                variant="primary"
                size="lg"
                fullWidth={true}
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
                iconPosition="right"
              >
                SOLICITAR ORÇAMENTO
              </Button>
              <Button
                variant="outline"
                size="lg"
                fullWidth={true}
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                CONHECER PROJETOS
              </Button>
            </div>
            <WhatsAppButton variant="hero" onClick={handleWhatsApp} showText={true} fullWidth />
          </div>

          <div className="hero-visual-wrapper animate-slide-up delay-2">
            <div className="hero-visual" role="img" aria-label="Ilustração de código representando desenvolvimento de software">
              <div className="hero-visual-inner">
                <pre className="hero-code" aria-hidden="true"><code>{`// LIN TECH - Transformando ideias em soluções

class ProjetoDigital {
  constructor(ideia, objetivo) {
    this.ideia = ideia;
    this.objetivo = objetivo;
    this.tecnologias = [
      "React", "TypeScript", "Node.js",
      "PostgreSQL", "Docker", "AWS"
    ];
  }

  async desenvolver() {
    const planejamento = this.analisarRequisitos();
    const arquitetura = this.definirArquitetura();
    const codigo = this.escreverCodigoLimpo();
    const testes = this.garantirQualidade();
    
    return this.entregar(planejamento, arquitetura, codigo, testes);
  }

  private analisarRequisitos() {
    return { escopo, prazo, orcamento, riscos };
  }
}

const seuProjeto = new ProjetoDigital(
  "Sua ideia aqui",
  "Crescer no digital"
);

await seuProjeto.desenvolver();
// Resultado: Solução digital funcional
`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" style={{ position: "absolute", bottom: "var(--space-8)", left: "50%", transform: "translateX(-50%)", animation: "pulse 2s ease-in-out infinite" }}>
        <a href="#sobre" className="btn btn-ghost" aria-label="Rolar para saber mais">
          <ChevronDown className="w-6 h-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
