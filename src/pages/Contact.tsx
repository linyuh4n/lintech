import { SEO } from "../components/SEO";
import { SectionTitle } from "../components/SectionTitle";
import { ContactForm } from "../components/ContactForm";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { openWhatsApp, buildGeneralMessage } from "../lib/whatsapp";
import { MessageSquare, Mail, Clock } from "lucide-react";
import { companyConfig } from "../config/company";

const contactInfo = [
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Atendimento rápido e direto",
    action: (
      <a
        href={companyConfig.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Abrir WhatsApp
        <MessageSquare className="w-4 h-4" aria-hidden="true" />
      </a>
    ),
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Para propostas formais e documentação",
    action: (
      <a
        href={`mailto:${companyConfig.email}`}
        className="btn btn-outline"
      >
        Enviar e-mail
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Horário de atendimento",
    description: "Segunda a sexta, 9h às 18h (BRT)",
    action: null,
  },
];

export function Contact() {
  const handleWhatsApp = () => openWhatsApp(buildGeneralMessage());

  return (
    <>
      <SEO page="contact" />
      <section className="page-hero" style={{ padding: "calc(var(--header-height) + var(--space-16)) 0 var(--space-16)", textAlign: "center", background: "var(--gradient-hero)" }}>
        <div className="container">
          <span className="section-label" style={{ display: "inline-block", marginBottom: "var(--space-3)" }}>
            CONTATO
          </span>
          <h1 style={{ fontSize: "var(--text-fluid-5xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-4)", color: "var(--color-text)" }}>
            Solicite seu orçamento
          </h1>
          <p style={{ fontSize: "var(--text-fluid-xl)", color: "var(--color-text-muted)", maxWidth: "720px", margin: "0 auto" }}>
            Preencha o formulário abaixo ou entre em contato direto pelo WhatsApp. 
            Respondemos em até 24h úteis.
          </p>
        </div>
      </section>

      <section id="contato" className="section" aria-labelledby="contact-title">
        <div className="container">
          <div className="grid grid-2 gap-12 contact-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div>
              <SectionTitle
                align="left"
                label="FALE CONOSCO"
                title="VAMOS CONVERSAR SOBRE SEU PROJETO?"
                subtitle="Escolha a melhor forma de entrar em contato ou preencha o formulário ao lado."
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", marginTop: "var(--space-8)" }}>
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="card"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--space-4)",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className="service-icon"
                      style={{ flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: "var(--text-fluid-lg)", fontWeight: "var(--font-semibold)", marginBottom: "var(--space-1)", overflowWrap: "anywhere" }}>
                        {item.title}
                      </h3>
                      <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-3)" }}>
                        {item.description}
                      </p>
                      {item.action}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ marginTop: "var(--space-8)", padding: "var(--space-6)" }}>
                <h3 style={{ fontSize: "var(--text-fluid-lg)", fontWeight: "var(--font-semibold)", marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <MessageSquare className="w-5 h-5" style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                  Atendimento via WhatsApp
                </h3>
                <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>
                  Para um atendimento mais ágil, chame no WhatsApp. 
                  Você será atendido diretamente por nossa equipe.
                </p>
                <WhatsAppButton variant="inline" onClick={handleWhatsApp} fullWidth />
              </div>
            </div>

            <div>
              <div className="card" style={{ height: "100%", minHeight: "500px" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="float" />
    </>
  );
}
