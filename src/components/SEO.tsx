import { Helmet } from "react-helmet-async";
import { getSEOConfig, type SEOConfig } from "../config/seo";
import { companyConfig } from "../config/company";

interface SEOProps {
  config?: Partial<SEOConfig>;
  page?: keyof typeof import("../config/seo").seoConfig;
  structuredData?: object;
}

export function SEO({ config, page, structuredData }: SEOProps) {
  const baseConfig = page ? getSEOConfig(page) : {};
  const finalConfig: SEOConfig = { ...baseConfig, ...config } as SEOConfig;
  const finalStructuredData = structuredData || finalConfig.structuredData;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{finalConfig.title}</title>
      <meta name="description" content={finalConfig.description} />
      <link rel="canonical" href={finalConfig.canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={finalConfig.ogTitle} />
      <meta property="og:description" content={finalConfig.ogDescription} />
      <meta property="og:image" content={finalConfig.ogImage} />
      <meta property="og:type" content={finalConfig.ogType} />
      <meta property="og:url" content={finalConfig.canonical} />
      <meta property="og:site_name" content={companyConfig.name} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content={finalConfig.twitterCard} />
      <meta name="twitter:title" content={finalConfig.twitterTitle} />
      <meta name="twitter:description" content={finalConfig.twitterDescription} />
      <meta name="twitter:image" content={finalConfig.twitterImage} />

      {/* Robots */}
      <meta name="robots" content={finalConfig.robots} />

      {/* Theme color */}
      <meta name="theme-color" content="#080B12" />

      {/* Structured Data */}
      {finalStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(finalStructuredData) }}
        />
      )}

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/images/og/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
}
