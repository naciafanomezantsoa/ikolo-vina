// src/components/SEOMetadata.tsx (NOUVEAU)
interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
  robots?: string;
  schema?: string;
}

const SEOMetadata = ({
  title = "Ikolo-Vina - Consortium de consultants multisectoriels à Madagascar",
  description = "Expertise en BTP, tourisme, communication, développement durable, ingénierie et audit informatique. Conseil sur mesure pour vos projets à Madagascar.",
  canonical = "https://ikolo-vina.com",
  ogImage = "assets/digital/ikoloVinaDigital.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = "consulting Madagascar, BTP Madagascar, développement durable, tourisme, communication, ingénierie, audit informatique",
  robots = "index, follow",
  schema = ""
}: SEOProps) => {
  const siteTitle = title.includes("Ikolo-Vina") 
    ? title 
    : `${title} | Ikolo-Vina Consortium`;

  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `https://ikolo-vina.com${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`;

  return (
    <>
      {/* Balises de base - React 19 les injecte automatiquement dans <head> */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Ikolo-Vina Consortium" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Schema.org - JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </>
  );
};

export default SEOMetadata;