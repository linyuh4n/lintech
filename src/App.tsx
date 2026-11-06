import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { NotFound } from "./pages/NotFound";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";
import "./styles/responsive.css";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content" style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectDetails />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
