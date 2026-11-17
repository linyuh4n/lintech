# LIN TECH - Website Institucional

Website institucional da LIN TECH, empresa especializada em desenvolvimento de sites, landing pages e sistemas web personalizados.

**Domínio:** https://lintech.app

## 🚀 Stack Tecnológica

- **React 18** + **TypeScript**
- **Vite** - Build tool e dev server
- **React Router v6** - Roteamento SPA
- **Lucide React** - Ícones
- **CSS Variables** - Design system customizado
- **Vitest** + **React Testing Library** - Testes
- **ESLint** + **Prettier** - Linting e formatação
- **react-helmet-async** - SEO dinâmico

## 📁 Estrutura do Projeto

```
lintech/
├── public/
│   ├── images/
│   │   ├── logos/
│   │   │   └── logo2.png
│   │   ├── portfolio/
│   │   ├── projects/
│   │   └── og/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── manifest.json
├── src/
│   ├── assets/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Logo.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProcessStep.tsx
│   │   ├── FAQ.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── ContactForm.tsx
│   │   ├── SEO.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/            # Seções das páginas
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── DifferentialsSection.tsx
│   │   ├── PortfolioPreviewSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── BudgetSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   ├── pages/               # Páginas completas
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ProjectDetails.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   └── NotFound.tsx
│   ├── config/              # Configurações centralizadas
│   │   ├── company.ts       # Dados da empresa
│   │   ├── services.ts      # Serviços oferecidos
│   │   ├── portfolio.ts     # Projetos do portfólio
│   │   ├── navigation.ts    # Navegação
│   │   └── seo.ts           # SEO por página
│   ├── lib/                 # Utilitários
│   │   ├── whatsapp.ts      # Integração WhatsApp
│   │   ├── formatting.ts    # Formatação
│   │   └── validation.ts    # Validação de formulários
│   ├── hooks/               # Custom hooks
│   │   └── useScroll.ts
│   ├── styles/              # Estilos globais
│   │   ├── variables.css    # CSS Variables (Design System)
│   │   ├── global.css       # Reset e base
│   │   ├── components.css   # Componentes
│   │   └── responsive.css   # Responsividade
│   ├── App.tsx
│   └── main.tsx
├── tests/
│   ├── setup.ts
│   ├── components/
│   ├── pages/
│   └── lib/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.cjs
├── .prettierrc
└── .gitignore
```

## 🛠️ Instalação

```bash
# Clone o repositório
cd lin-tech

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 📋 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor Vite com HMR

# Build
npm run build        # Build de produção (TypeScript + Vite)
npm run preview      # Preview do build de produção

# Testes
npm run test         # Modo watch
npm run test:run     # Execução única (CI)

# Qualidade de código
npm run lint         # ESLint
npm run format       # Prettier
```

## ⚙️ Configuração

### Dados da Empresa (`src/config/company.ts`)

```typescript
export const companyConfig = {
  name: "LIN TECH",
  domain: "https://lintech.app",
  slogan: "Tecnologia que transforma ideias em soluções.",
  whatsapp: {
    number: "5542988235256",
    formatted: "+55 42 98823-5256",
    link: "https://wa.me/5542988235256",
  },
  email: "contato@lintech.app", // Configure quando disponível
  instagram: "https://instagram.com/lintech", // Configure quando disponível
  address: "Sua cidade, Estado", // Configure quando disponível
  legalName: "LIN TECH LTDA", // Configure quando disponível
  cnpj: "00.000.000/0001-00", // Configure quando disponível
};
```

### Serviços (`src/config/services.ts`)

Os serviços estão organizados em 3 categorias:
- **Presença Digital**: Sites institucionais, Landing pages
- **Desenvolvimento de Software**: Sistemas web personalizados
- **Continuidade e Evolução**: Manutenção e suporte

Cada serviço possui:
- ID único
- Nome e descrição
- Lista de funcionalidades
- CTA personalizado
- Mensagem WhatsApp personalizada

### Portfólio (`src/config/portfolio.ts`)

Cadastre projetos com:
- ID, slug, nome
- Categoria (site, landing page, sistema, aplicação)
- Descrições curta e completa
- Problema/Solução
- Funcionalidades e tecnologias
- Imagens (principal + galeria)
- URLs de demo e GitHub
- Status (concluído, em andamento, demonstrativo)
- Identificação se é projeto de cliente real ou demo

**Importante:** Não invente dados. Cadastre apenas projetos reais.

### SEO (`src/config/seo.ts`)

Configuração por página:
- Title, Description, Canonical
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Structured Data (Schema.org)
- Robots

## 🎨 Design System

### Cores (CSS Variables)

```css
:root {
  --color-background: #080B12;
  --color-surface: #111827;
  --color-primary: #2563EB;
  --color-primary-light: #3B82F6;
  --color-text: #F8FAFC;
  --color-text-muted: #94A3B8;
  /* ... mais variáveis */
}
```

### Breakpoints

- **xs**: 0-639px (mobile)
- **sm**: 640-767px (mobile large)
- **md**: 768-1023px (tablet)
- **lg**: 1024-1279px (desktop)
- **xl**: 1280-1535px (desktop large)
- **2xl**: 1536px+ (wide)

## 📱 Responsividade

- Mobile-first
- Header com menu hambúrguer
- Grid fluido (auto-fit/minmax)
- Tipografia responsiva (clamp)
- Botões com área de toque adequada (44px mínimo)

## ♿ Acessibilidade

- HTML semântico
- Navegação por teclado
- Focus visible
- Contraste WCAG AA
- Labels em formulários
- ARIA labels onde necessário
- `prefers-reduced-motion` respeitado
- Skip link para conteúdo principal

## ⚡ Performance

- Code splitting automático (Vite)
- Lazy loading de imagens
- Fontes com `font-display: swap`
- CSS enxuto (sem frameworks pesados)
- JavaScript mínimo
- Metas Core Web Vitals:
  - LCP ≤ 2.5s
  - INP ≤ 200ms
  - CLS ≤ 0.1

## 🔗 WhatsApp Integration

Arquivo: `src/lib/whatsapp.ts`

Funções:
- `openWhatsApp(message)` - Abre WhatsApp com mensagem
- `buildServiceMessage(serviceId)` - Mensagem para serviço
- `buildBudgetMessage(formData)` - Mensagem do formulário
- `buildGeneralMessage()` - Mensagem genérica

Número: **+55 42 98823-5256**

## 🧪 Testes

```bash
# Executar todos os testes
npm run test:run

# Cobertura
npm run test:run -- --coverage
```

Estrutura:
- `tests/components/` - Testes de componentes
- `tests/pages/` - Testes de páginas
- `tests/lib/` - Testes de utilitários

## 🚀 Deploy

### Logotipo

O logotipo da marca está em `public/images/logos/logo2.png` e é utilizado em:
- Header (componente `Logo.tsx`)
- Footer (componente `Footer.tsx`)
- Favicon (32x32, 16x16, apple-touch-icon) via `index.html`
- PWA Manifest (`public/site.webmanifest`)

O componente `Logo.tsx` suporta variantes (`default`, `white`, `inline`) e tamanhos (`sm`, `md`, `lg`).

### Vercel (Recomendado)

1. Conecte o repositório no Vercel
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Configure domínio `lintech.app`
5. Variáveis de ambiente (se necessário)

### Cloudflare Pages

1. Conecte o repositório
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Configure domínio

### Configuração de SPA

Para roteamento client-side, configure redirect:

**Vercel (`vercel.json`):**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Cloudflare (`_redirects`):**
```
/* /index.html 200
```

### Checklist de Deploy

- [ ] Build passa sem erros (`npm run build`)
- [ ] Testes passam (`npm run test:run`)
- [ ] Lint passa (`npm run lint`)
- [ ] Domínio configurado
- [ ] HTTPS ativo
- [ ] Sitemap.xml acessível
- [ ] Robots.txt acessível
- [ ] Favicon funcionando (logo2.png)
- [ ] Open Graph testado (Facebook Debugger, Twitter Card Validator)
- [ ] Google Search Console configurado
- [ ] Google Analytics 4 configurado (quando ID disponível)

## 📝 Atualizações Comuns

### Adicionar novo serviço

1. Edite `src/config/services.ts`
2. Adicione objeto ao array `services`
3. Inclua mensagem WhatsApp personalizada

### Adicionar projeto ao portfólio

1. Adicione imagens em `public/images/projects/`
2. Edite `src/config/portfolio.ts`
3. Adicione objeto ao array `projects`
4. Preencha todos os campos (não invente dados)

### Atualizar WhatsApp

1. Edite `src/config/company.ts` (número formatado e link)
2. Edite `src/lib/whatsapp.ts` (constante WHATSAPP_NUMBER)

### Atualizar logotipo

1. Substitua `public/images/logos/logo2.png` pelo novo arquivo
2. O componente `Logo.tsx` usa automaticamente o novo arquivo
3. Favicons e PWA manifest apontam para o mesmo arquivo

### Atualizar dados da empresa

Edite `src/config/company.ts`

## 🔒 Segurança

- Nenhum segredo no frontend
- Sanitização de inputs (`src/lib/validation.ts`)
- Validação de URLs
- Links externos com `rel="noopener noreferrer"`
- CSP preparado para configuração no servidor

## 📄 Licença

Projeto proprietário da LIN TECH. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela LIN TECH**

https://lintech.app
