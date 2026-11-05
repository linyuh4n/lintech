# Deploy na Vercel - LIN TECH

## 🚀 Deploy Rápido

### Opção 1: Vercel CLI (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
cd D:\Projetos\lintech
vercel

# 4. Deploy de produção
vercel --prod
```

### Opção 2: GitHub + Vercel Dashboard

1. Push para GitHub:
```bash
cd D:\Projetos\lintech
git init
git add .
git commit -m "Initial commit - LIN TECH website"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/lintech.git
git push -u origin main
```

2. No [Vercel Dashboard](https://vercel.com/dashboard):
   - "Add New Project"
   - Import do repositório GitHub
   - Framework: **Vite** (detecta automaticamente)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Deploy

## ⚙️ Configuração de Domínio

### Domínio: `lintech.app`

1. No Vercel Dashboard > Project > Settings > Domains
2. Add `lintech.app` e `www.lintech.app`
3. Configure DNS no seu provedor:

**Tipo A (apex):**
```
@  76.76.21.21
```

**Tipo CNAME (www):**
```
www  cname.vercel-dns.com
```

4. Vercel provisiona SSL automaticamente

## 🔧 Variáveis de Ambiente (Opcional)

No Vercel Dashboard > Settings > Environment Variables:

| Variável | Valor | Ambiente |
|----------|-------|----------|
| `VITE_GA_ID` | `G-XXXXXXXXXX` | Production |
| `VITE_GTM_ID` | `GTM-XXXXXXX` | Production |

*Use prefixo `VITE_` para variáveis acessíveis no cliente*

## ✅ Checklist Pós-Deploy

- [ ] Build passa sem erros
- [ ] Domínio `lintech.app` funcionando
- [ ] HTTPS ativo (certificado válido)
- [ ] Redirecionamento `www` → apex (ou vice versa)
- [ ] Sitemap acessível: `https://lintech.app/sitemap.xml`
- [ ] Robots.txt acessível: `https://lintech.app/robots.txt`
- [ ] Favicon carregando
- [ ] Open Graph testado:
  - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Google Search Console configurado
- [ ] Google Analytics 4 configurado (quando ID disponível)

## 📁 Arquivos de Configuração

- `vercel.json` - Rewrites para SPA + Headers de segurança + Cache
- `vite.config.ts` - Build otimizado com code splitting
- `public/robots.txt` - Permite crawlers
- `public/sitemap.xml` - URLs principais
- `public/manifest.json` - PWA ready

## 🔄 CI/CD Automático

Cada push para `main` faz deploy automático na Vercel.
Preview deployments para PRs.

## 💡 Dicas

- **Cache**: Assets em `/assets/*` têm cache de 1 ano (hash no filename)
- **SPA**: Rewrite `/(.*)` → `/index.html` garante roteamento client-side
- **Segurança**: Headers CSP, X-Frame-Options, etc. configurados
- **Analytics**: Adicione GA4 via variável `VITE_GA_ID` quando disponível
