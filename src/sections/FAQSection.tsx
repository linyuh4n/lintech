import { SectionTitle } from "../components/SectionTitle";
import { FAQ } from "../components/FAQ";

const faqItems = [
  {
    question: "Quais serviços a LIN TECH oferece?",
    answer:
      "Desenvolvemos sites institucionais, landing pages, sistemas web personalizados e oferecemos manutenção e suporte contínuo. Cada solução é desenvolvida sob medida para as necessidades do seu negócio.",
  },
  {
    question: "Quanto custa desenvolver um site?",
    answer:
      "Não trabalhamos com preços fixos. Cada projeto é orçado individualmente com base no escopo, complexidade, funcionalidades e prazo. Entre em contato para receber uma proposta personalizada.",
  },
  {
    question: "Como funciona a contratação?",
    answer:
      "O processo começa com uma conversa para entender sua necessidade. Em seguida, fazemos o levantamento de requisitos, definimos o escopo e enviamos uma proposta comercial. Após aprovação, iniciamos o desenvolvimento com acompanhamento contínuo.",
  },
  {
    question: "Vocês desenvolvem sistemas personalizados?",
    answer:
      "Sim. Desenvolvemos sistemas web sob medida para automatizar processos, organizar informações e resolver necessidades específicas: sistemas administrativos, painéis de gestão, controle de clientes, gestão financeira, APIs, dashboards e automações.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "O orçamento é gratuito e sem compromisso. Você preenche nosso formulário ou entra em contato via WhatsApp, nós analisamos sua necessidade e enviamos uma proposta detalhada com escopo, prazo e investimento.",
  },
  {
    question: "Quanto tempo demora para desenvolver um projeto?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Um site institucional simples pode levar 2 a 4 semanas. Um sistema web complexo pode levar meses. O cronograma é definido junto com o cliente na etapa de planejamento.",
  },
  {
    question: "Vocês oferecem manutenção?",
    answer:
      "Sim. Oferecemos manutenção e suporte contínuo: correção de erros, atualizações, melhorias, ajustes de layout, otimização de performance e evolução de funcionalidades. Planos personalizados conforme a necessidade.",
  },
  {
    question: "Posso solicitar melhorias em um sistema existente?",
    answer:
      "Sim. Atendemos tanto projetos desenvolvidos por nós quanto por terceiros (mediante análise técnica). Podemos fazer melhorias, correções, adição de funcionalidades e modernização de sistemas legados.",
  },
  {
    question: "A LIN TECH atende empresas de qualquer segmento?",
    answer:
      "Sim. Atendemos profissionais autônomos, pequenos negócios, PMEs, empreendedores e empresas em expansão de diversos segmentos. Não restringimos a comunicação a um único mercado.",
  },
  {
    question: "Como posso entrar em contato?",
    answer:
      "Você pode nos chamar no WhatsApp pelo botão flutuante, preencher o formulário na página de contato ou acessar diretamente: https://wa.me/5542988235256. Responderemos o mais breve possível.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section faq-section" aria-labelledby="faq-title">
      <div className="container">
        <SectionTitle
          label="PERGUNTAS FREQUENTES"
          title="AINDA TEM DÚVIDAS?"
        />

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FAQ items={faqItems} />
        </div>
      </div>
    </section>
  );
}
