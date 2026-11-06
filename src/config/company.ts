export const companyConfig = {
  name: "LIN TECH LTDA",
  domain: "https://lintech.app",
  slogan: "Tecnologia que transforma ideias em soluções.",
  description:
    "A LIN TECH desenvolve experiências digitais e soluções de software sob medida para empresas que desejam crescer, otimizar processos e fortalecer sua presença digital.",
  whatsapp: {
    number: "5542988235256",
    formatted: "+55 42 98823-5256",
    link: "https://wa.me/5542988235256",
  },
  email: null, // TODO: configurar quando disponível
  instagram: null, // TODO: configurar quando disponível
  address: null, // TODO: configurar quando disponível
  legalName: null, // TODO: razão social
  cnpj: "69.947.534/0001-26", // TODO: CNPJ
  foundedYear: new Date().getFullYear(),
};

export type CompanyConfig = typeof companyConfig;
