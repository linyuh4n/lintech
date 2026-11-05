import { SectionTitle } from "../components/SectionTitle";
import { Server, Code, Users } from "lucide-react";

const pillars = [
  {
    icon: Server,
    title: "TECNOLOGIA",
    description:
      "Utilizamos tecnologias modernas para desenvolver aplicações eficientes, seguras e preparadas para evoluir.",
  },
  {
    icon: Code,
    title: "PERSONALIZAÇÃO",
    description:
      "Cada projeto é desenvolvido considerando as necessidades e os objetivos específicos de cada negócio.",
  },
  {
    icon: Users,
    title: "PARCERIA",
    description:
      "Trabalhamos próximos aos clientes, com comunicação transparente e acompanhamento durante o desenvolvimento.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <SectionTitle
          label="SOBRE A LIN TECH"
          title="TECNOLOGIA COM PROPÓSITO. SOLUÇÕES COM RESULTADO."
          subtitle={
            "A LIN TECH nasceu com o propósito de transformar necessidades reais em soluções digitais eficientes. Desenvolvemos experiências web e sistemas personalizados, combinando tecnologia, estratégia e atenção aos detalhes."
          }
        />

        <div className="grid grid-3 gap-6" role="list" aria-label="Pilares da LIN TECH">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="card"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="service-icon"
                style={{ marginBottom: "var(--space-4)", width: "56px", height: "56px" }}
                aria-hidden="true"
              >
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="service-title" style={{ fontSize: "var(--text-xl)" }}>
                {pillar.title}
              </h3>
              <p className="service-description" style={{ marginBottom: 0 }}>
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
