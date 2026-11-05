import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { MessageSquare, MapPin, Mail, Instagram, Linkedin } from "lucide-react";
import { companyConfig } from "../config/company";
import { footerNavigation } from "../config/navigation";
import { formatDate } from "../lib/formatting";

export function Footer() {
  const currentYear = formatDate(new Date(), { year: "numeric" });

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label={`${companyConfig.name} - Página inicial`}>
              <Logo size="lg" variant="white" />
            </Link>
            <p className="footer-description">
              {companyConfig.description}
            </p>
            <div className="footer-social" role="list" aria-label="Redes sociais">
              {companyConfig.instagram && (
                <a
                  href={companyConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              <a
                href={companyConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${companyConfig.email}`}
                className="footer-social-link"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="footer-column" aria-label="Navegação">
            <h3 className="footer-column-title">Navegação</h3>
            <ul className="footer-links">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-column" aria-label="Serviços">
            <h3 className="footer-column-title">Serviços</h3>
            <ul className="footer-links">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column" aria-label="Contato">
            <h3 className="footer-column-title">Contato</h3>
            <ul className="footer-links">
              <li>
                <a
                  href={companyConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="footer-link flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>E-mail</span>
                </a>
              </li>
              <li>
                <Link to="/contato" className="footer-link flex items-center gap-2">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Solicitar orçamento</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {companyConfig.name}. Todos os direitos reservados.
          </p>
          <div className="footer-legal">
            <Link to="/privacidade" className="footer-legal-link">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="footer-legal-link">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
