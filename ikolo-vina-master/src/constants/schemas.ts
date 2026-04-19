// src/constants/schemas.ts
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ikolo-Vina Consortium",
  "url": "https://ikolo-vina.com",
  "logo": "https://ikolo-vina.com/assets/logos/ikolo-vina.png", // Utilisez votre logo existant
  "sameAs": [
    "https://www.facebook.com/ikolovina",
    "https://www.linkedin.com/company/ikolo-vina",
    "https://twitter.com/ikolovina"
  ]
} as const;

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://ikolo-vina.com",
  "name": "Ikolo-Vina Consortium",
  "description": "Consultants multisectoriels à Madagascar",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ikolo-vina.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
} as const;

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ikolo-Vina Consortium",
  "image": "https://ikolo-vina.com/assets/logos/ikolo-vina.png", // Même image
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Madagascar"
  },
  "description": "Consultants multisectoriels spécialisés en BTP, tourisme, communication et développement durable à Madagascar",
  "priceRange": "$$",
  "telephone": "+261-XX-XX-XX-XX"
} as const;