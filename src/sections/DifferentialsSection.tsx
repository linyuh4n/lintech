import { SectionTitle } from "../components/SectionTitle";
import { CheckCircle, Shield, Zap, MessageSquare, Code, GitBranch } from "lucide-react";

const differentials = [
  {
    icon: Code,
    title: "DESENVOLVIMENTO PERSONALIZADO",
    description: "Cada projeto é construído de acordo com suas necessidades.",
  },
  {
    icon: Zap,
    title: "TECNOLOGIA MODERNA",
    description: "Aplicações desenvolvidas com tecnologias atuais e boas práticas de engenharia.",
  },
  {
    icon: CheckCircle,
    title: "FOCO EM RESULTADOS",
    description: "Desenvolvemos soluções com objetivos claros e foco nas necessidades do negócio.",
  },
  {
    icon: MessageSquare,
    title: "COMUNICAÇÃO TRANSPARENTE",
    description: "Acompanhamento e comunicação durante as etapas do projeto.",
  },
  {
    icon: Shield,
    title: "QUALIDADE TÉCNICA",
    description: "Atenção à organização do código, manutenção, segurança e desempenho.",
  },
  {
    icon: GitBranch,
    title: "SOLUÇÕES ESCALÁVEIS",
    description: "Projetos estruturados para permitir evolução conforme o negócio cresce.",
  },
];

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="section differentials-section" aria-labelledby="differentials-title">
      <div className="container">
        <SectionTitle
          label="DIFERENCIAIS"
          title="POR QUE ESCOLHER A LIN TECH?"
        />

        <div className="grid grid-3 gap-6" role="list" aria-label="Diferenciais da LIN TECH">
          {differentials.map((diff, index) => (
            <article
              key={diff.title}
              className="card"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="service-icon"
                style={{ marginBottom: "var(--space-4)" }}
                aria-hidden="true"
              >
                <diff.icon className="w-6 h-6" />
              </div>
              <h3 className="service-title" style={{ fontSize: "var(--text-lg)" }}>
                {diff.title}
              </h3>
              <p className="service-description" style={{ marginBottom: 0 }}>
                {diff.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
