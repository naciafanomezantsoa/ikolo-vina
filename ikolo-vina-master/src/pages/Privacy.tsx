// src/pages/Privacy.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

// Schéma spécifique pour la politique de confidentialité
const PRIVACY_POLICY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Politique de confidentialité - Ikolo-Vina Consortium",
  "description": "Politique de confidentialité et protection des données personnelles du site Ikolo-Vina. Conformité RGPD et respect de la vie privée.",
  "url": "https://ikolo-vina.com/privacy",
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "publisher": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "url": "https://ikolo-vina.com"
  },
  "about": {
    "@type": "Thing",
    "name": "Protection des données personnelles"
  },
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "Politique de confidentialité",
    "text": "Document détaillant la collecte, l'utilisation et la protection des données personnelles sur le site Ikolo-Vina."
  }
};

// Schéma pour la protection des données
const DATA_PROTECTION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DataFeed",
  "name": "Protection des données Ikolo-Vina",
  "description": "Nos engagements en matière de protection des données personnelles",
  "dataFeedElement": [
    {
      "@type": "DataFeedItem",
      "name": "Collecte minimale",
      "description": "Nous collectons uniquement les données nécessaires"
    },
    {
      "@type": "DataFeedItem",
      "name": "Sécurité renforcée",
      "description": "Protection des données par chiffrement et mesures techniques"
    },
    {
      "@type": "DataFeedItem",
      "name": "Droits des utilisateurs",
      "description": "Accès, rectification et suppression des données"
    }
  ]
};

const Privacy = () => {
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
        title="Politique de Confidentialité - Protection des Données Personnelles | Ikolo-Vina"
        description="Consultez notre politique de confidentialité complète. Ikolo-Vina s'engage à protéger vos données personnelles conformément au RGPD et aux lois malgaches. Transparence et sécurité garanties."
        canonical="https://ikolo-vina.com/privacy"
        ogImage="/assets/logos/ikolo-vina.png"
        ogType="website"
        twitterCard="summary"
        keywords="politique de confidentialité Madagascar, protection données personnelles, RGPD Madagascar, confidentialité consulting, données personnelles, vie privée, sécurité données, loi informatique et libertés"
        robots="index, follow, max-image-preview:large"
        schema={JSON.stringify(PRIVACY_POLICY_SCHEMA)} // Schema intégré directement
      />
      
      {/* Structured Data (JSON-LD) */}
      <StructuredData data={DATA_PROTECTION_SCHEMA} />
      
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
                {t('privacy.hero.title')}
              </h1>
              <p className="text-lg lg:text-xl text-gray-900">
                {t('privacy.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-5 lg:py-2">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Eye className="h-6 w-6 text-black" aria-label="Icône collecte données" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('privacy.cards.dataCollection.title')}</h3>
                <p className="text-gray-600 text-sm">{t('privacy.cards.dataCollection.content')}</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-linear-to-br from-special-3 to-special-4 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Lock className="h-6 w-6 text-black" aria-label="Icône protection sécurité" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('privacy.cards.protection.title')}</h3>
                <p className="text-gray-600 text-sm">{t('privacy.cards.protection.content')}</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-linear-to-br from-special-2 to-special-3 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-6 w-6 text-black" aria-label="Icône droits utilisateurs" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('privacy.cards.rights.title')}</h3>
                <p className="text-gray-600 text-sm">{t('privacy.cards.rights.content')}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="prose prose-gray max-w-none">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{t('privacy.information.commitment.title')}</h2>
                <p className="text-gray-600 mb-6">
                  {t('privacy.information.commitment.content')}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('privacy.information.dataUsage.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('privacy.information.dataUsage.content')}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">{t('privacy.information.dataSharing.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('privacy.information.dataSharing.content')}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">{t('privacy.information.gdprRights.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('privacy.information.gdprRights.content')}</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-special-1/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-special-1" aria-label="Icône contact email" />
                    <div>
                      <p className="font-semibold text-gray-900">{t('privacy.information.contact.title')}</p>
                      <p className="text-gray-600 text-sm">{t('privacy.information.contact.email')}</p>
                    </div>
                  </div>
                </div>

                {/* Section juridique supplémentaire pour le SEO */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Informations juridiques complémentaires</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Conformité avec la loi malgache n°2014-038 sur la protection des données personnelles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Application du Règlement Général sur la Protection des Données (RGPD) pour les ressortissants européens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Durée de conservation des données : 3 ans maximum après le dernier contact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-special-1 mr-2">•</span>
                      <span>Droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                {t('privacy.lastUpdate')}: {formattedDate}
              </p>
            </div>

            {/* Liens vers autres pages légales (pour le SEO interne) */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 text-center">Documents légaux et informations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a 
                  href="/legal" 
                  className="text-special-1 hover:text-special-2 hover:underline text-sm flex items-center justify-center gap-2 p-2 bg-white rounded"
                  aria-label="Consulter les mentions légales"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Mentions légales
                </a>
                <a 
                  href="/contact" 
                  className="text-special-1 hover:text-special-2 hover:underline text-sm flex items-center justify-center gap-2 p-2 bg-white rounded"
                  aria-label="Nous contacter pour questions sur la confidentialité"
                >
                  <Mail className="w-4 h-4" />
                  Contact Délégué à la Protection des Données
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;