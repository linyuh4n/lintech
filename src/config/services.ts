export type ServiceCategory =
  | "digital-presence"
  | "software-development"
  | "maintenance-support";

export type ServiceId =
  | "institutional-site"
  | "landing-page"
  | "web-system"
  | "custom-web-system"
  | "maintenance"
  | "maintenance-support";

export interface Service {
  id: ServiceId;
  name: string;
  shortName: string;
  description: string;
  category: ServiceCategory;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
  order: number;
  icon?: React.ReactNode;
}

export const services: Service[] = [
  // CATEGORIA 1 - PRESENÇA DIGITAL
  {
    id: "institutional-site",
    name: "Sites institucionais",
    shortName: "Site institucional",
    description:
      "Desenvolvemos sites profissionais para apresentar sua empresa, fortalecer sua marca e transmitir credibilidade na internet.",
    category: "digital-presence",
    features: [
      "Design personalizado",
      "Layout responsivo",
      "Formulários de contato",
      "Integração com WhatsApp",
      "SEO técnico",
      "Integração com redes sociais",
      "Google Maps",
      "Páginas institucionais",
    ],
    ctaText: "QUERO UM SITE",
    whatsappMessage:
      "Olá! Conheci a LIN TECH pelo site e gostaria de solicitar um orçamento para desenvolvimento de um site institucional.",
    order: 1,
  },
  {
    id: "landing-page",
    name: "Landing pages",
    shortName: "Landing page",
    description:
      "Criamos páginas estratégicas para apresentar produtos, serviços e campanhas, com foco em conversão e geração de oportunidades.",
    category: "digital-presence",
    features: [
      "Estrutura orientada à conversão",
      "Copywriting",
      "Formulários",
      "Integração com WhatsApp",
      "Pixel e ferramentas de análise, quando contratados",
      "SEO",
      "Performance",
    ],
    ctaText: "QUERO UMA LANDING PAGE",
    whatsappMessage:
      "Olá! Gostaria de solicitar um orçamento para criação de uma landing page.",
    order: 2,
  },
  // CATEGORIA 2 - DESENVOLVIMENTO DE SOFTWARE
  {
    id: "web-system",
    name: "Sistemas web personalizados",
    shortName: "Sistema web",
    description:
      "Desenvolvemos sistemas web sob medida para automatizar processos, organizar informações e resolver necessidades específicas do seu negócio.",
    category: "software-development",
    features: [
      "Sistemas administrativos",
      "Painéis de gestão",
      "Controle de clientes",
      "Gestão de usuários",
      "Sistemas financeiros",
      "Gestão operacional",
      "APIs e integrações",
      "Dashboards",
      "Automatização de processos",
    ],
    ctaText: "DESENVOLVER MEU SISTEMA",
    whatsappMessage:
      "Olá! Tenho interesse em desenvolver um sistema web personalizado e gostaria de conversar sobre meu projeto.",
    order: 3,
  },
  // CATEGORIA 3 - CONTINUIDADE E EVOLUÇÃO
  {
    id: "maintenance-support",
    name: "Manutenção e suporte",
    shortName: "Manutenção e suporte",
    description:
      "Seu projeto precisa continuar funcionando, evoluindo e acompanhando as necessidades do seu negócio.",
    category: "maintenance-support",
    features: [
      "Correção de erros",
      "Atualizações",
      "Melhorias",
      "Monitoramento, quando contratado",
      "Ajustes de layout",
      "Otimização de performance",
      "Suporte técnico",
      "Evolução de funcionalidades",
    ],
    ctaText: "PRECISO DE SUPORTE",
    whatsappMessage:
      "Olá! Preciso de suporte ou manutenção em um projeto web e gostaria de conhecer os serviços da LIN TECH.",
    order: 4,
  },
];

export const serviceCategories = [
  {
    id: "digital-presence",
    name: "Presença Digital",
    description:
      "Soluções para estabelecer e fortalecer a presença da sua marca na internet.",
    order: 1,
  },
  {
    id: "software-development",
    name: "Desenvolvimento de Software",
    description:
      "Sistemas web personalizados para automatizar processos e resolver necessidades específicas.",
    order: 2,
  },
  {
    id: "maintenance-support",
    name: "Continuidade e Evolução",
    description:
      "Manutenção, suporte e evolução contínua para seu projeto acompanhar o crescimento do negócio.",
    order: 3,
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category).sort((a, b) => a.order - b.order);
}

export function getServiceById(id: ServiceId): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getAllServices(): Service[] {
  return [...services].sort((a, b) => a.order - b.order);
}
