// src/pages/Entreprise.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { ORGANIZATION_SCHEMA } from '@/constants/schemas';
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Schéma spécifique à la page Conseil Entreprise
const ENTERPRISE_CONSULTING_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Conseil et accompagnement d'entreprise",
  "name": "Conseil Entreprise - Ikolo-Vina",
  "description": "Accompagnement stratégique et opérationnel des entreprises à Madagascar : appui à la formation, accompagnement au changement, digitalisation et transformation",
  "provider": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "url": "https://ikolo-vina.com"
  },
  "areaServed": "Madagascar",
  "offers": {
    "@type": "Offer",
    "category": "Services de conseil en entreprise",
    "includes": [
      "Appui à la formation",
      "Accompagnement au changement",
      "Digitalisation d'entreprise",
      "Stratégie organisationnelle",
      "Transformation digitale"
    ]
  },
  "keywords": "conseil entreprise Madagascar, accompagnement entreprise, formation entreprise, digitalisation Madagascar, transformation organisationnelle"
};

// Schéma pour les services d'accompagnement
const ENTERPRISE_SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services d'accompagnement d'entreprise Ikolo-Vina",
  "description": "Services de conseil et accompagnement pour les entreprises à Madagascar",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Appui à la formation",
      "description": "Diagnostic des besoins en formation et mise en œuvre de plans de développement des compétences",
      "category": "Formation & développement"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Accompagnement au changement",
      "description": "Support dans les transformations organisationnelles et accompagnement des équipes",
      "category": "Transformation organisationnelle"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Digitalisation d'entreprise",
      "description": "Accompagnement dans la transformation digitale et l'implémentation de nouvelles technologies",
      "category": "Digitalisation & innovation"
    }
  ]
};

// Schéma pour les bénéfices clients
const ENTERPRISE_BENEFITS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Bénéfices du conseil entreprise",
  "description": "Avantages et retours sur investissement de l'accompagnement d'entreprise",
  "about": {
    "@type": "Thing",
    "name": "Productivité et performance d'entreprise"
  }
};

const Entreprise = () => { 
    const { t } = useTranslation();

    const services = [
        {
            id: 1,
            title: t('enterprise.services.0.title'),
            description: t('enterprise.services.0.description'),
            image: "/assets/appui/AppuiFormation.png",
            reverse: true
        },
        {
            id: 2,
            title: t('enterprise.services.1.title'),
            description: t('enterprise.services.1.description'),
            image: "/assets/appui/accompagnement.png",
            reverse: false
        },
        {
            id: 3,
            title: t('enterprise.services.2.title'),
            description: t('enterprise.services.2.description'),
            image: "/assets/appui/Digitalisation.png",
            reverse: true
        }
    ];

    return (
        <>
            {/* Intégration SEO Complète avec React 19 natif */}
            <SEOMetadata
                title="Conseil Entreprise Madagascar - Accompagnement Stratégique & Digitalisation | Ikolo-Vina"
                description="Accompagnement des entreprises à Madagascar : appui à la formation, gestion du changement, digitalisation et transformation stratégique. Experts en conseil organisationnel."
                canonical="https://ikolo-vina.com/enterprise"
                ogImage="/assets/appui/banniere1.png"
                ogType="website"
                twitterCard="summary_large_image"
                keywords="conseil entreprise Madagascar, accompagnement stratégique, formation entreprise, digitalisation Madagascar, transformation organisationnelle, consulting Madagascar, appui aux entreprises, gestion du changement"
                robots="index, follow, max-image-preview:large"
                schema={JSON.stringify(ENTERPRISE_CONSULTING_SCHEMA)} // Schema intégré directement
            />
            
            {/* Structured Data (JSON-LD) */}
            <StructuredData data={ORGANIZATION_SCHEMA} />
            <StructuredData data={ENTERPRISE_SERVICES_SCHEMA} />
            <StructuredData data={ENTERPRISE_BENEFITS_SCHEMA} />
            
            {/* Contenu de la page */}
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img
                        src="/assets/appui/banniere1.png"
                        alt="Conseil entreprise Madagascar - Accompagnement stratégique Ikolo-Vina"
                        className="w-full h-full object-cover absolute inset-0 blur-[1px]"
                        loading="eager"
                        width="1920"
                        height="1080"
                    />
                    <div className="container mx-auto px-4 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <Badge variant="secondary" className="mb-4 bg-special-1/80 backdrop-blur-sm text-white border-none">
                                {t('enterprise.hero.badge')}
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                                {t('enterprise.hero.title')}
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
                                {t('enterprise.hero.subtitle')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Section Nos Services */}
                <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16 mt-5"
                        >
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                                {t('enterprise.services.title')}
                            </h2>
                            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                {t('enterprise.services.subtitle')}
                            </p>
                        </motion.div>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-16">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`flex flex-col lg:flex-row items-start gap-8 ${
                                    service.reverse ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                <div className="lg:w-2/5">
                                    <div className="relative group">
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                            <img
                                                src={service.image}
                                                alt={`${service.title} - Conseil entreprise Madagascar`}
                                                className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                                width="400"
                                                height="256"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className={`absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-${service.id} to-special-${(service.id % 3) + 1} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                                {/* Icône optionnelle à ajouter ici */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section Bénéfices */}
                <section className="pt-0 pb-5 bg-linear-to-br from-white to-gray-50/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mt-10"
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                {t('enterprise.benefits.title')}
                            </h2>
                            <p className="text-base text-gray-600 max-w-2xl mx-auto">
                                {t('enterprise.benefits.subtitle')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Section CTA Finale */}
                <section className="py-5 bg-linear-to-br from-white to-gray-50/30">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            className="text-center mt-2 pt-2 border-t border-gray-200/50"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-linear-to-r from-special-1/15 via-special-3/10 to-special-2/15 rounded-3xl p-6 lg:p-8 max-w-5xl mx-auto relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                                        {t('enterprise.cta.title')}
                                    </h3>
                                    
                                    <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                                        {t('enterprise.cta.description')}
                                    </p>

                                    {/* Phrase clignotante */}
                                    <motion.p
                                        className="text-special-3 font-bold text-lg lg:text-xl mb-6"
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
                                    >
                                        {t('enterprise.cta.offer')}
                                    </motion.p>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <Link
                                            to="/contact"
                                            className="bg-linear-to-r from-special-1 to-special-2 hover:from-special-2 hover:to-special-3 text-black px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border border-black"
                                            aria-label="Demander un devis pour conseil entreprise Madagascar"
                                        >
                                            {t('enterprise.cta.button')}
                                        </Link>
                                    </div>
                                    
                                    <p className="text-gray-500 text-xs lg:text-sm mt-4 lg:mt-6">
                                        {t('enterprise.cta.footer')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Entreprise;