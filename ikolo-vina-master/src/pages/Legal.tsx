// src/pages/Legal.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { motion } from "framer-motion";
import { Scale, Building, Users, Globe, Copyright, Server, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

// Schéma spécifique pour les mentions légales
const LEGAL_NOTICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Mentions Légales - Ikolo-Vina Consortium",
  "description": "Mentions légales complètes du site Ikolo-Vina. Informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et les conditions d'utilisation.",
  "url": "https://ikolo-vina.com/legal",
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "publisher": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "url": "https://ikolo-vina.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Madagascar",
      "addressRegion": "Analamanga",
      "addressLocality": "Antananarivo"
    }
  },
  "about": {
    "@type": "Thing",
    "name": "Informations légales et juridiques"
  },
  "mainEntity": {
    "@type": "LegalDocument",
    "name": "Mentions Légales",
    "legalName": "Ikolo-Vina Consortium",
    "jurisdiction": "Madagascar"
  }
};

// Schéma pour l'organisation
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ikolo-Vina Consortium",
  "alternateName": ["Ikolo-Vina", "Ikolo Vina Consortium"],
  "url": "https://ikolo-vina.com",
  "logo": "https://ikolo-vina.com/assets/logos/ikolo-vina.png",
  "description": "Consortium de consulting multisectoriel à Madagascar spécialisé dans le développement durable, la transformation digitale et l'accompagnement stratégique.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Madagascar",
    "addressRegion": "Analamanga",
    "addressLocality": "Antananarivo"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@ikolo-vina.com",
    "availableLanguage": ["French", "English", "Malagasy"]
  },
  "member": [
    {
      "@type": "Organization",
      "name": "Ikolo",
      "description": "Solutions durables et innovation écologique à Madagascar"
    },
    {
      "@type": "Organization",
      "name": "Vina Consulting",
      "description": "Conseil en stratégie d'entreprise et transformation digitale"
    }
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Équipe Ikolo"
    },
    {
      "@type": "Person",
      "name": "Équipe Vina Consulting"
    }
  ]
};

const Legal = () => {
  const { t } = useTranslation();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      {/* Intégration SEO Complète avec React 19 natif */}
      <SEOMetadata
        title="Mentions Légales - Ikolo-Vina Consortium | Informations juridiques"
        description="Consultez les mentions légales complètes d'Ikolo-Vina Consortium. Éditeur, hébergeur, propriété intellectuelle, droits d'auteur et conditions d'utilisation du site."
        canonical="https://ikolo-vina.com/legal"
        ogImage="/assets/logos/ikolo-vina.png"
        ogType="website"
        twitterCard="summary"
        keywords="mentions légales Madagascar, informations légales, propriété intellectuelle Madagascar, éditeur site web, hébergement web Madagascar, droits d'auteur, conditions d'utilisation, loi commerce électronique Madagascar"
        robots="index, follow, max-image-preview:large"
        schema={JSON.stringify(LEGAL_NOTICE_SCHEMA)} // Schema intégré directement
      />
      
      {/* Structured Data (JSON-LD) */}
      <StructuredData data={ORGANIZATION_SCHEMA} />
      
      {/* Contenu de la page */}
      <div className="min-h-screen bg-linear-to-br from-white to-gray-50/30">
        {/* Hero Section */}
        <section className="relative text-white py-10 lg:py-10">
          <div className="container mx-auto px-4 relative z-20">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex justify-center items-center gap-6 mb-6">
                <img 
                  src="/assets/logos/ikolo.png" 
                  alt="Logo Ikolo - Solutions durables Madagascar" 
                  className="h-10 lg:h-14 w-auto opacity-90"
                  loading="lazy"
                  width="56"
                  height="56"
                />
                <img 
                  src="/assets/logos/ikolo-vina.png" 
                  alt="Logo Ikolo-Vina Consortium - Consulting multisectoriel Madagascar" 
                  className="h-12 lg:h-16 w-auto"
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <img 
                  src="/assets/logos/vina.png" 
                  alt="Logo Vina Consulting - Conseil entreprise Madagascar" 
                  className="h-10 lg:h-14 w-auto opacity-90"
                  loading="lazy"
                  width="56"
                  height="56"
                />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                {t('legal.hero.title')}
              </h1>
              <p className="text-lg lg:text-xl text-gray-900">
                {t('legal.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-5 lg:py-2">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Building className="h-6 w-6 text-black" aria-label="Icône éditeur" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('legal.cards.publisher.title')}</h3>
                <p className="text-gray-600 text-sm">{t('legal.cards.publisher.content')}</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-linear-to-br from-special-3 to-special-4 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-black" aria-label="Icône publication" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('legal.cards.publication.title')}</h3>
                <p className="text-gray-600 text-sm">{t('legal.cards.publication.content')}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-black" aria-label="Icône balance juridique" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{t('legal.information.title')}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('legal.information.consortium.title')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <p className="font-medium">{t('legal.information.consortium.ikolo.title')}</p>
                      <p>{t('legal.information.consortium.ikolo.content')}</p>
                    </div>
                    <div>
                      <p className="font-medium">{t('legal.information.consortium.vina.title')}</p>
                      <p>{t('legal.information.consortium.vina.content')}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Copyright className="h-4 w-4 text-special-1" />
                    <h3 className="font-semibold text-gray-900">{t('legal.information.intellectualProperty.title')}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t('legal.information.intellectualProperty.content')}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="h-4 w-4 text-special-1" />
                    <h3 className="font-semibold text-gray-900">{t('legal.information.hosting.title')}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t('legal.information.hosting.content')}
                  </p>
                </div>

                {/* Section juridique supplémentaire pour le SEO */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-4 w-4 text-special-1" />
                    <h3 className="font-semibold text-gray-900">Informations juridiques complémentaires</h3>
                  </div>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Conformité avec la loi malgache n°2003-044 sur le commerce électronique</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Application des dispositions du Code de la Consommation malgache</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Droits de reproduction réservés - Tous droits réservés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Marques déposées : Ikolo®, Vina Consulting®, Ikolo-Vina Consortium®</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Numéro d'identification fiscale : En cours d'obtention</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-special-1/10 rounded-lg mt-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-special-1" aria-label="Icône contact email" />
                    <div>
                      <p className="font-semibold text-gray-900">{t('legal.information.contact.title')}</p>
                      <p className="text-gray-600 text-sm">{t('legal.information.contact.email')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                {t('legal.lastUpdate')}: {formattedDate}
              </p>
            </div>

            {/* Liens vers autres pages légales (pour le SEO interne) */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 text-center">Documents légaux et informations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <a 
                  href="/privacy" 
                  className="text-special-1 hover:text-special-2 hover:underline text-sm flex items-center justify-center gap-2 p-2 bg-white rounded"
                  aria-label="Consulter la politique de confidentialité"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Politique de confidentialité
                </a>
                <a 
                  href="/contact" 
                  className="text-special-1 hover:text-special-2 hover:underline text-sm flex items-center justify-center gap-2 p-2 bg-white rounded"
                  aria-label="Nous contacter pour questions légales"
                >
                  <Mail className="w-4 h-4" />
                  Contact service juridique
                </a>
                <a 
                  href="/" 
                  className="text-special-1 hover:text-special-2 hover:underline text-sm flex items-center justify-center gap-2 p-2 bg-white rounded"
                  aria-label="Retour à l'accueil"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Retour à l'accueil
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Legal;