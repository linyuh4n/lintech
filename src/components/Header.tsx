import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { navigation } from "../config/navigation";
import { companyConfig } from "../config/company";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} role="banner">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label={`${companyConfig.name} - Página inicial`}>
          <Logo size="md" />
        </Link>

        <nav className={`header-nav ${mobileOpen ? "open" : ""}`} role="navigation" aria-label="Navegação principal">
          <ul className="header-nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                {item.anchor ? (
                  <a
                    href={item.href}
                    className={`header-nav-link ${location.pathname === "/" && location.hash === item.href ? "active" : ""}`}
                    onClick={(e) => {
                      if (location.pathname !== "/") {
                        return;
                      }
                      e.preventDefault();
                      const target = document.getElementById(item.href.replace("#", ""));
                      if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                      closeMobileMenu();
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`header-nav-link ${location.pathname === item.href ? "active" : ""}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="header-cta">
            <a
              href={companyConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span className="hide-mobile">WhatsApp</span>
            </a>
            <Link
              to="/contato"
              className="btn btn-primary btn-sm"
              onClick={closeMobileMenu}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Solicitar orçamento</span>
            </Link>
          </div>
        </nav>

        <button
          className="header-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}
