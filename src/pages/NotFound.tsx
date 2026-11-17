import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { openWhatsApp, buildGeneralMessage } from "../lib/whatsapp";
import { Home, Search } from "lucide-react";

export function NotFound() {
  const handleWhatsApp = () => openWhatsApp(buildGeneralMessage());

  return (
    <>
      <SEO
        config={{
          title: "Página não encontrada | LIN TECH",
          description: "A página que você procura não existe ou foi movida.",
          canonical: "https://lintech.app/404",
          ogTitle: "Página não encontrada | LIN TECH",
          ogDescription: "A página que você procura não existe ou foi movida.",
          robots: "noindex, follow",
        }}
      />
      <section style={{ padding: "calc(var(--header-height) + var(--space-20)) 0 var(--space-20)", textAlign: "center", minHeight: "calc(100vh - var(--header-height))", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="container">
          <div className="card" style={{ maxWidth: "480px", margin: "0 auto", padding: "var(--space-16)" }}>
            <div style={{ fontSize: "var(--text-fluid-6xl)", fontWeight: "var(--font-bold)", color: "var(--color-primary)", lineHeight: 1, marginBottom: "var(--space-4)", fontFamily: "var(--font-mono)" }}>
              404
            </div>
            <h1 style={{ fontSize: "var(--text-fluid-2xl)", marginBottom: "var(--space-4)" }}>
              Página não encontrada
            </h1>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
              A página que você procura não existe ou foi movida. 
              Verifique o endereço ou navegue pelas opções abaixo.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/" className="btn btn-primary">
                <Home className="w-4 h-4" aria-hidden="true" />
                Página inicial
              </Link>
              <Link to="/servicos" className="btn btn-outline">
                <Search className="w-4 h-4" aria-hidden="true" />
                Nossos serviços
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                Ver portfólio
              </Link>
              <WhatsAppButton variant="inline" onClick={handleWhatsApp} showText={false} />
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton variant="float" />
    </>
  );
}
