import { companyConfig } from "./company";

export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: "website" | "article";
  twitterCard: "summary_large_image" | "summary";
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  robots: string;
  structuredData?: object;
}

const baseUrl = companyConfig.domain;
const ogImage = `${baseUrl}/images/og/default.jpg`;

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: "LIN TECH | Criação de Sites e Sistemas Web Personalizados",
    description:
      "Desenvolvimento de sites profissionais, landing pages e sistemas web personalizados. Transforme suas ideias em soluções digitais com a LIN TECH.",
    canonical: baseUrl,
    ogTitle: "LIN TECH | Criação de Sites e Sistemas Web Personalizados",
    ogDescription:
      "Desenvolvimento de sites profissionais, landing pages e sistemas web personalizados. Transforme suas ideias em soluções digitais com a LIN TECH.",
    ogImage,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "LIN TECH | Criação de Sites e Sistemas Web Personalizados",
    twitterDescription:
      "Desenvolvimento de sites profissionais, landing pages e sistemas web personalizados.",
    twitterImage: ogImage,
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: companyConfig.name,
      url: companyConfig.domain,
      logo: `${baseUrl}/images/og/logo.png`,
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: companyConfig.whatsapp.formatted,
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
    },
  },
  services: {
    title: "Serviços de Desenvolvimento Web | LIN TECH",
    description:
      "Conheça nossos serviços: sites institucionais, landing pages, sistemas web personalizados e manutenção. Soluções digitais sob medida para seu negócio.",
    canonical: `${baseUrl}/servicos`,
    ogTitle: "Serviços de Desenvolvimento Web | LIN TECH",
    ogDescription:
      "Conheça nossos serviços: sites institucionais, landing pages, sistemas web personalizados e manutenção.",
    ogImage,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Serviços de Desenvolvimento Web | LIN TECH",
    twitterDescription:
      "Sites institucionais, landing pages, sistemas web personalizados e manutenção.",
    twitterImage: ogImage,
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Desenvolvimento Web",
      provider: {
        "@type": "Organization",
        name: companyConfig.name,
      },
      areaServed: "BR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Desenvolvimento",
        itemListElement: [],
      },
    },
  },
  portfolio: {
    title: "Portfólio de Projetos | LIN TECH",
    description:
      "Conheça os projetos desenvolvidos pela LIN TECH: sites institucionais, landing pages, sistemas web e aplicações personalizadas.",
    canonical: `${baseUrl}/portfolio`,
    ogTitle: "Portfólio de Projetos | LIN TECH",
    ogDescription:
      "Conheça os projetos desenvolvidos pela LIN TECH: sites institucionais, landing pages, sistemas web e aplicações personalizadas.",
    ogImage,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Portfólio de Projetos | LIN TECH",
    twitterDescription:
      "Projetos desenvolvidos: sites, landing pages, sistemas web e aplicações personalizadas.",
    twitterImage: ogImage,
    robots: "index, follow",
  },
  contact: {
    title: "Solicite um Orçamento | LIN TECH",
    description:
      "Entre em contato com a LIN TECH e solicite um orçamento personalizado para seu site, landing page ou sistema web.",
    canonical: `${baseUrl}/contato`,
    ogTitle: "Solicite um Orçamento | LIN TECH",
    ogDescription:
      "Entre em contato e solicite um orçamento personalizado para seu projeto digital.",
    ogImage,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Solicite um Orçamento | LIN TECH",
    twitterDescription: "Solicite um orçamento personalizado para seu projeto digital.",
    twitterImage: ogImage,
    robots: "index, follow",
  },
};

export function getSEOConfig(page: keyof typeof seoConfig): SEOConfig {
  return seoConfig[page];
}

export function generateStructuredData(data: object): string {
  return JSON.stringify(data);
}
