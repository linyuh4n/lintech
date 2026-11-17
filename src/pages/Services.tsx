import { SEO } from "../components/SEO";
import { ServiceCard } from "../components/ServiceCard";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { serviceCategories, getServicesByCategory, type ServiceCategory } from "../config/services";
import { Monitor, MousePointer, Wrench } from "lucide-react";

const categoryIcons = {
  "digital-presence": Monitor,
  "software-development": MousePointer,
  "maintenance-support": Wrench,
};

export function Services() {
  return (
    <>
      <SEO page="services" />
      <section className="page-hero" style={{ padding: "calc(var(--header-height) + var(--space-16)) 0 var(--space-16)", textAlign: "center", background: "var(--gradient-hero)" }}>
        <div className="container">
          <span className="section-label" style={{ display: "inline-block", marginBottom: "var(--space-3)" }}>
            NOSSOS SERVIÇOS
          </span>
          <h1 style={{ fontSize: "var(--text-fluid-5xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-4)", color: "var(--color-text)" }}>
            Soluções digitais para seu negócio
          </h1>
          <p style={{ fontSize: "var(--text-fluid-xl)", color: "var(--color-text-muted)", maxWidth: "720px", margin: "0 auto" }}>
            Conheça nossos serviços organizados em três categorias principais. Todas as soluções são desenvolvidas sob medida mediante orçamento personalizado.
          </p>
        </div>
      </section>

      <section id="servicos" className="section" aria-labelledby="services-title">
        <div className="container">
          {serviceCategories.map((category) => {
            const categoryServices = getServicesByCategory(category.id as ServiceCategory);
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons];

            return (
              <div key={category.id} className="service-category" style={{ marginBottom: "var(--space-20)" }}>
                <header style={{ marginBottom: "var(--space-10)", textAlign: "center" }}>
                  <div
                    className="service-icon"
                    style={{
                      margin: "0 auto var(--space-4)",
                      width: "64px",
                      height: "64px",
                      background: "var(--color-primary-glow)",
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 id={`${category.id}-title`} style={{ fontSize: "var(--text-fluid-3xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-3)" }}>
                    {category.name}
                  </h2>
                  <p style={{ color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "var(--text-fluid-lg)" }}>
                    {category.description}
                  </p>
                </header>

                <div className="grid grid-3 gap-6 services-grid" role="list" aria-label={`${category.name} - Serviços`}>
                  {categoryServices.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={{ ...service, icon: <Icon className="w-7 h-7" /> }}
                      featured={index === 0}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          <div style={{ textAlign: "center", marginTop: "var(--space-12)", paddingTop: "var(--space-12)", borderTop: "1px solid var(--color-border)" }}>
            <h3 style={{ fontSize: "var(--text-fluid-xl)", fontWeight: "var(--font-semibold)", marginBottom: "var(--space-4)" }}>
              Não encontrou exatamente o que precisa?
            </h3>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)", maxWidth: "600px", margin: "0 auto var(--space-6)" }}>
              Todos os nossos serviços funcionam mediante orçamento personalizado. 
              Conte-nos sua necessidade e criamos uma solução sob medida.
            </p>
            <a
              href="/contato"
              className="btn btn-primary btn-lg"
            >
              SOLICITAR ORÇAMENTO PERSONALIZADO
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="float" />
    </>
  );
}
