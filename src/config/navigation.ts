export interface NavItem {
  label: string;
  href: string;
  anchor?: boolean;
}

export const navigation: NavItem[] = [
  { label: "Início", href: "/", anchor: true },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/#sobre", anchor: true },
  { label: "Contato", href: "/contato" },
];

export const footerNavigation = {
  company: [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Contato", href: "/contato" },
  ],
  services: [
    { label: "Sites institucionais", href: "/servicos#institutional-site" },
    { label: "Landing pages", href: "/servicos#landing-page" },
    { label: "Sistemas web", href: "/servicos#web-system" },
    { label: "Manutenção e suporte", href: "/servicos#maintenance-support" },
  ],
  contact: [
    { label: "WhatsApp", href: "https://wa.me/5542988235256", external: true },
    { label: "Solicitar orçamento", href: "/contato" },
  ],
};
