import { SEO } from "../components/SEO";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { companyConfig } from "../config/company";

export function Privacy() {
  return (
    <>
      <SEO
        config={{
          title: "Política de Privacidade | LIN TECH",
          description: "Política de privacidade da LIN TECH. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
          canonical: "https://lintech.app/privacidade",
          ogTitle: "Política de Privacidade | LIN TECH",
          ogDescription: "Política de privacidade da LIN TECH. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
          robots: "index, follow",
        }}
      />
      <section className="page-hero" style={{ padding: "calc(var(--header-height) + var(--space-16)) 0 var(--space-16)", textAlign: "center", background: "var(--gradient-hero)" }}>
        <div className="container">
          <span className="section-label" style={{ display: "inline-block", marginBottom: "var(--space-3)" }}>
            LEGAL
          </span>
          <h1 style={{ fontSize: "var(--text-fluid-5xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-4)", color: "var(--color-text)" }}>
            Política de Privacidade
          </h1>
          <p style={{ fontSize: "var(--text-fluid-xl)", color: "var(--color-text-muted)", maxWidth: "720px", margin: "0 auto" }}>
            "Última atualização": {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="privacy-title">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="card" style={{ padding: "var(--space-8)" }}>
              <h2 id="privacy-title" style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                1. Introdução
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                A <strong>LIN TECH</strong> ("nós", "nosso", "nos") valoriza a privacidade dos visitantes do nosso site e clientes.
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais
                quando você acessa nosso site <a href={companyConfig.domain} className="text-primary-light underline">{companyConfig.domain}</a>,
                preenche formulários de contato ou interage conosco via WhatsApp.
              </p>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política.
                Se não concordar com esta política, por favor, não utilize nosso site ou serviços.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                2. Informações que Coletamos
              </h2>

              <h3 style={{ fontSize: "var(--text-fluid-lg)", fontWeight: "var(--font-semibold)", marginBottom: "var(--space-3)", color: "var(--color-text)" }}>
                2.1 Informações fornecidas voluntariamente
              </h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Quando você preenche nosso formulário de orçamento ou entra em contato via WhatsApp, podemos coletar:
              </p>
              <ul style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)", paddingLeft: "var(--space-6)" }}>
                <li>Nome completo</li>
                <li>Nome da empresa (opcional)</li>
                <li>Endereço de e-mail</li>
                <li>Número de WhatsApp</li>
                <li>Tipo de serviço de interesse</li>
                <li>Descrição do projeto</li>
                <li>Prazo desejado (opcional)</li>
                <li>Faixa de orçamento estimada (opcional)</li>
              </ul>

              <h3 style={{ fontSize: "var(--text-fluid-lg)", fontWeight: "var(--font-semibold)", marginBottom: "var(--space-3)", color: "var(--color-text)" }}>
                2.2 Dados de navegação (automáticos)
              </h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Ao acessar nosso site, coletamos automaticamente certas informações através de tecnologias padrão da web:
              </p>
              <ul style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)", paddingLeft: "var(--space-6)" }}>
                <li>Endereço IP (anonimizado quando possível)</li>
                <li>Tipo e versão do navegador</li>
                <li>Sistema operacional</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Referrer (página de origem)</li>
                <li>Data e hora do acesso</li>
              </ul>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                3. Como Usamos suas Informações
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Utilizamos as informações coletadas para:
              </p>
              <ul style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)", paddingLeft: "var(--space-6)" }}>
                <li><strong>Responder solicitações de orçamento:</strong> Entrar em contato via WhatsApp ou e-mail para entender suas necessidades e enviar proposta comercial.</li>
                <li><strong>Melhorar nosso site:</strong> Analisar navegação anônima para otimizar experiência do usuário e performance.</li>
                <li><strong>Comunicações comerciais:</strong> Enviar informações sobre nossos serviços, novidades ou promoções (apenas com seu consentimento).</li>
                <li><strong>Cumprir obrigações legais:</strong> Atender requisições judiciais ou regulatórias, se aplicável.</li>
              </ul>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                <strong>"Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing."</strong>
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                4. Compartilhamento de Dados
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Podemos compartilhar suas informações apenas nas seguintes situações:
              </p>
              <ul style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)", paddingLeft: "var(--space-6)" }}>
                <li><strong>WhatsApp Business API / Meta:</strong> Ao clicar em nossos botões de WhatsApp, você é redirecionado para o aplicativo/site do WhatsApp. A Meta (WhatsApp) processa seus dados conforme <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-light underline">sua própria política de privacidade</a>.</li>
                <li><strong>Provedores de hospedagem e analytics:</strong> Serviços como Vercel (hospedagem) e Google Analytics (quando configurado) recebem dados de navegação anonimizados para operação técnica do site.</li>
                <li><strong>Obrigação legal:</strong> Se exigido por lei, ordem judicial ou regulamentação governamental.</li>
              </ul>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                5. Cookies e Tecnologias Similares
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Nosso site utiliza cookies essenciais para funcionamento técnico e, quando configurado, cookies de analytics:
              </p>
              <ul style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)", paddingLeft: "var(--space-6)" }}>
                <li><strong>Cookies essenciais:</strong> Necessários para navegação, segurança e funcionalidades básicas (não podem ser desativados).</li>
                <li><strong>Cookies de analytics (Google Analytics 4):</strong> Coletam dados anonimizados de uso do site para melhorias. Ativados apenas após consentimento ou configuração.</li>
              </ul>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Você pode gerenciar cookies nas configurações do seu navegador. A desativação de cookies essenciais pode impedir o funcionamento correto do site.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                6. Seus Direitos (LGPD)
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
              </p>
              <ul style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)", paddingLeft: "var(--space-6)" }}>
                <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los.</li>
                <li><strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados.</li>
                <li><strong>Anonimização, bloqueio ou eliminação:</strong> De dados desnecessários, excessivos ou tratados em desconformidade.</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado.</li>
                <li><strong>Eliminação:</strong> Solicitar exclusão dos dados tratados com consentimento.</li>
                <li><strong>Informação sobre compartilhamento:</strong> Saber com quais entidades públicas ou privadas compartilhamos dados.</li>
                <li><strong>Revogação do consentimento:</strong> Retirar consentimento a qualquer momento.</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento com base em hipóteses de dispensa de consentimento.</li>
              </ul>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Para exercer seus direitos, entre em contato conosco via WhatsApp ou e-mail.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                7. Retenção de Dados
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Mantemos seus dados pessoais apenas pelo tempo necessário para:
              </p>
              <ul style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)", paddingLeft: "var(--space-6)" }}>
                <li>Cumprir a finalidade para a qual foram coletados (ex: processo de orçamento).</li>
                <li>Cumprir obrigações legais ou regulatórias.</li>
                <li>Resolver disputas e fazer cumprir nossos acordos.</li>
              </ul>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Dados de formulários de orçamento são mantidos por até <strong>12 meses</strong> após o último contato,
                salvo se você solicitar exclusão antecipada ou se houver obrigação legal de retenção por período maior.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                8. Segurança dos Dados
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Implementamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não autorizado,
                alteração, divulgação ou destruição, incluindo:
              </p>
              <ul style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)", paddingLeft: "var(--space-6)" }}>
                <li>HTTPS/TLS em todas as páginas.</li>
                <li>Sanitização e validação de entradas no frontend.</li>
                <li>Headers de segurança (CSP, X-Frame-Options, etc.).</li>
                <li>Acesso restrito a dados (princípio do menor privilégio).</li>
              </ul>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                <strong>"Nenhum sistema é 100% seguro."</strong> Não podemos garantir segurança absoluta, mas nos comprometemos a
                notificá-lo e às autoridades competentes em caso de incidente de segurança que ofereça risco relevante aos seus direitos.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                9. Links para Sites de Terceiros
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Nosso site pode conter links para sites externos (WhatsApp, GitHub, redes sociais, etc.).
                Não somos responsáveis pelas práticas de privacidade ou conteúdo desses sites.
                Recomendamos ler as políticas de privacidade de cada site que visitar.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                10. Alterações nesta Política
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Podemos atualizar esta Política de Privacidade periodicamente. A data de "Última atualização" no topo desta página
                indica a revisão mais recente. Mudanças significativas serão comunicadas através de aviso em destaque no site
                ou por e-mail (se tivermos seu contato).
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-8)", marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-fluid-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-6)", color: "var(--color-text)" }}>
                11. Contato
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                Dúvidas, solicitações ou exercício de direitos referentes a esta Política de Privacidade:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <a href={companyConfig.whatsapp.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ maxWidth: "fit-content" }}>
                  WhatsApp: {companyConfig.whatsapp.formatted}
                </a>
                {companyConfig.email && (
                  <a href={`mailto:${companyConfig.email}`} className="btn btn-outline" style={{ maxWidth: "fit-content" }}>
                    E-mail: {companyConfig.email}
                  </a>
                )}
              </div>
              <p style={{ color: "var(--color-text-dim)", fontSize: "var(--text-sm)", marginTop: "var(--space-4)" }}>
                Responsável pelo tratamento de dados: {companyConfig.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="float" />
    </>
  );
}
