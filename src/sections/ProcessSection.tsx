import { SectionTitle } from "../components/SectionTitle";
import { ProcessStep } from "../components/ProcessStep";

const steps = [
  {
    number: 1,
    title: "CONVERSA",
    description:
      "Entendemos sua necessidade, seus objetivos e o que você deseja construir.",
  },
  {
    number: 2,
    title: "PLANEJAMENTO",
    description:
      "Definimos escopo, funcionalidades, tecnologias e proposta comercial.",
  },
  {
    number: 3,
    title: "DESENVOLVIMENTO",
    description:
      "Transformamos o planejamento em uma solução funcional, com acompanhamento durante o projeto.",
  },
  {
    number: 4,
    title: "ENTREGA",
    description:
      "Validamos a solução e realizamos a entrega conforme o escopo contratado.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="section process-section" aria-labelledby="process-title">
      <div className="container">
        <SectionTitle
          label="NOSSO PROCESSO"
          title="DO PRIMEIRO CONTATO À ENTREGA."
        />

        <div className="process-steps" role="list" aria-label="Etapas do processo de desenvolvimento">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              last={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
