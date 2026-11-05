import { SectionTitle } from "../components/SectionTitle";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { openWhatsApp, buildGeneralMessage } from "../lib/whatsapp";

export function BudgetSection() {
  const handleWhatsApp = () => openWhatsApp(buildGeneralMessage());

  return (
    <section id="orcamento" className="section budget-section" aria-labelledby="budget-title">
      <div className="container">
        <SectionTitle
          label="ORÇAMENTO"
          title="SEU PROJETO COMEÇA COM UMA CONVERSA."
          subtitle={
            "Cada negócio possui necessidades diferentes. Por isso, nossos projetos são avaliados individualmente para oferecer uma solução adequada ao seu objetivo."
          }
        />

        <div className="grid grid-2 gap-8" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="card">
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-semibold)", marginBottom: "var(--space-4)" }}>
              Como funciona
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {[
                "Entendimento da necessidade",
                "Levantamento de requisitos",
                "Definição do escopo",
                "Proposta personalizada",
                "Desenvolvimento",
                "Entrega",
              ].map((item, index) => (
                <li key={index} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", color: "var(--color-text-secondary)" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "var(--radius-full)", background: "var(--color-primary-glow)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "var(--text-sm)", fontWeight: "var(--font-bold)", flexShrink: 0 }}>
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-semibold)", marginBottom: "var(--space-4)" }}>
              Pronto para começar?
            </h3>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              Preencha o formulário e receba uma proposta personalizada para seu projeto.
            </p>
            <WhatsAppButton variant="inline" onClick={handleWhatsApp} showText={true} />
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-dim)", marginTop: "var(--space-4)" }}>
              Ou <a href="/contato" className="text-primary-light underline">acesse a página de contato</a> para preencher o formulário completo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
