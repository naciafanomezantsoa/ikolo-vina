// src/pages/Wellness.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { ORGANIZATION_SCHEMA } from '@/constants/schemas';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Animations
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Schéma spécifique à la page Wellness
const WELLNESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Bien-être & Phytothérapie",
  "name": "Nature Wellness Program - Ikolo-Vina",
  "description": "Programme complet de bien-être et phytothérapie utilisant les plantes médicinales de Madagascar",
  "provider": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "url": "https://ikolo-vina.com"
  },
  "areaServed": "Madagascar",
  "offers": {
    "@type": "Offer",
    "category": "Services de bien-être",
    "includes": [
      "Diagnostic des centres de bien-être",
      "Optimisation architecturale",
      "Formation & ateliers",
      "Marketing & communication",
      "Leadership & management",
      "Recherche & développement",
      "Suivi & évaluation",
      "Pack essentiel"
    ]
  },
  "keywords": "phytothérapie Madagascar, bien-être naturel, spa Madagascar, plantes médicinales"
};

// Schéma pour les produits phyto-thérapeutiques
const PHYTO_PRODUCTS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Produits Phyto-thérapeutiques Ikolo-Vina",
  "description": "Produits naturels à base de plantes malgaches pour le bien-être",
  "numberOfItems": 4,
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Huiles essentielles malgaches",
      "description": "Huiles essentielles pures extraites de plantes endémiques de Madagascar",
      "category": "Produits de bien-être"
    },
    {
      "@type": "Product",
      "position": 2,
      "name": "Infusions médicinales",
      "description": "Mélanges d'herbes traditionnelles pour la santé et le bien-être",
      "category": "Produits de santé"
    },
    {
      "@type": "Product",
      "position": 3,
      "name": "Cosmétiques naturels",
      "description": "Produits de beauté à base d'ingrédients naturels malgaches",
      "category": "Cosmétiques biologiques"
    },
    {
      "@type": "Product",
      "position": 4,
      "name": "Compléments alimentaires",
      "description": "Suppléments naturels pour la santé et le bien-être général",
      "category": "Nutrition"
    }
  ]
};

const Wellness = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Intégration SEO Complète avec React 19 natif */}
      <SEOMetadata
        title="Bien-être & Phytothérapie Madagascar - Nature Wellness Program | Ikolo-Vina"
        description="Découvrez notre programme Nature Wellness : phytothérapie, produits naturels malgaches, conseils bien-être et solutions pour centres spa. Expertise en plantes médicinales de Madagascar."
        canonical="https://ikolo-vina.com/wellness"
        ogImage="/assets/wellness/nature.png"
        ogType="website"
        twitterCard="summary_large_image"
        keywords="phytothérapie Madagascar, bien-être naturel, plantes médicinales, produits naturels Madagascar, spa Madagascar, huiles essentielles malgaches, centre bien-être, Nature Wellness Program, Ikolo-Vina bien-être"
        robots="index, follow, max-image-preview:large"
        schema={JSON.stringify(WELLNESS_SCHEMA)} // Schema intégré directement
      />
      
      {/* Structured Data (JSON-LD) */}
      <StructuredData data={ORGANIZATION_SCHEMA} />
      <StructuredData data={PHYTO_PRODUCTS_SCHEMA} />
      
      {/* Contenu de la page */}
      <div className="min-h-screen">
        {/* Section Hero avec Bannière */}
        <section className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-16 lg:py-20">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="/assets/wellness/nature.png" 
            alt="Nature Wellness Program - Programme de bien-être et phytothérapie à Madagascar"
            className="w-full h-full object-cover absolute inset-0 blur-[1px]"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="container mx-auto px-4 relative z-20">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Badge variant="secondary" className="mb-4 bg-special-1/80 backdrop-blur-sm text-white border-none">
                {t('wellness.hero.badge')}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                {t('wellness.hero.title')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
                {t('wellness.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section NW */}
        <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Colonne de gauche - Logo et texte principal */}
              <motion.div 
                className="order-1 lg:order-1 flex flex-col items-center lg:items-start space-y-6 lg:space-y-8"
                variants={fadeInScale}
              >
                <div className="text-center flex flex-col items-center space-y-0 -mt-1">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                    <span className="text-special-1">{t('wellness.program.title')}</span>
                  </h2>

                  <div className="relative group flex justify-center">
                    <div className="absolute -inset-2 lg:-inset-4 bg-linear-to-r from-special-1/20 to-special-2/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="/assets/logos/Nature Wellness.png" 
                      alt="Logo Nature Wellness Program - Programme de bien-être naturel Madagascar"
                      className="relative h-96 lg:h-96 xl:h-96 w-auto transform group-hover:scale-115 transition-transform duration-500 mx-auto rounded-ss-3xl rounded-ee-3xl"
                      loading="lazy"
                      width="384"
                      height="384"
                    />
                  </div>
                  
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {t('wellness.program.description')}
                  </p>
                </div>
              </motion.div>

              {/* Colonne de droite - Cartes valeurs */}
              <motion.div 
                className="order-2 lg:order-2"
                variants={fadeInUp}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {/* Carte pour centres existants */}
                  <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {/* Icône pourrait être ajoutée ici */}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                        {t('wellness.existingCenters.title')}
                      </h3>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                        {t('wellness.existingCenters.description')}
                        <br />
                        <br />
                        <strong className="underline decoration-2 decoration-special-1">
                          {t('wellness.existingCenters.deliverables')}
                        </strong>
                        {t('wellness.existingCenters.deliverablesList')}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Image Spa 1 */}
                  <Card className="border-0 shadow-none bg-transparent group backdrop-blur-sm flex items-center justify-center">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="from-special-3 to-special-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <img 
                          src="/assets/wellness/Spa1.png" 
                          alt="Centre de bien-être spa Madagascar - Installation moderne"
                          className="object-cover w-full h-48"
                          loading="lazy"
                          width="300"
                          height="192"
                        />
                      </div>
                    </CardContent>
                  </Card> 

                  {/* Image Spa 2 */}
                  <Card className="border-0 shadow-none bg-transparent group backdrop-blur-sm flex items-center justify-center">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="from-special-3 to-special-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <img 
                          src="/assets/wellness/Spa2.png" 
                          alt="Spa Madagascar - Ambiance relaxante et naturelle"
                          className="object-cover w-full h-48"
                          loading="lazy"
                          width="300"
                          height="192"
                        />
                      </div>
                    </CardContent>
                  </Card> 

                  {/* Carte pour nouveaux centres */}
                  <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-4 to-special-5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {/* Icône pourrait être ajoutée ici */}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                        {t('wellness.newCenters.title')}
                      </h3>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                        {t('wellness.newCenters.description')}
                        <br/>
                        <br />
                        <strong className="underline decoration-2 decoration-special-1">
                          {t('wellness.newCenters.deliverables')}
                        </strong>
                        {t('wellness.newCenters.deliverablesList')}
                      </p>
                    </CardContent>
                  </Card> 
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Bénéfices globaux */}
        <div className="relative group flex justify-center">                
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            <strong className="underline decoration-2 decoration-special-1">
              {t('wellness.globalBenefits.title')}
            </strong>
            {t('wellness.globalBenefits.description')}
          </p>
        </div>

        {/* Produits et Services */}
        <section className="pt-5 pb-0 bg-linear-to-br from-white to-gray-50/30">
          <div className="container mx-auto px-4">
            {/* Titre de section */}
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                {t('wellness.productsServices.title')}
              </h2>
            </motion.div>
          </div>

          <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
            <div className="container mx-auto px-4">
              {/* Colonne de gauche */}
              <motion.div 
                className="order-2 lg:order-1"
                variants={fadeInUp}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {/* Carte 1 - DIAGNOSTIC INITIAL */}
                  <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
                    <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src="/assets/wellness/Diagnostique.png" 
                        alt="Diagnostic initial centre bien-être - Analyse complète"
                        className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="300"
                        height="128"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center max-w-4xl mx-auto px-4">
                          <h3 className="text-xl font-bold leading-tight">
                            {t('wellness.services.diagnostic.title')}
                          </h3>
                          <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                            {t('wellness.services.diagnostic.subtitle')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                      <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                        {t('wellness.services.diagnostic.description')}
                      </h5>
                      <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
                        {(((t('wellness.services.diagnostic.features', { returnObjects: true }) as string[]) || []).map((feature: string, index: number) => (
                          <li key={`${index}-${(feature || '').slice(0,30)}`} className="flex items-start">
                            <span className="text-special-1 mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        )))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Carte 2 - OPTIMISATION ARCHITECTURALE */}
                  <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
                    <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src="/assets/wellness/Optimisation.png" 
                        alt="Optimisation architecturale spa - Conception espace bien-être"
                        className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="300"
                        height="128"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center max-w-4xl mx-auto px-4">
                          <h3 className="text-xl font-bold leading-tight">
                            {t('wellness.services.optimization.title')}
                          </h3>
                          <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                            {t('wellness.services.optimization.subtitle')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                      <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                        {t('wellness.services.optimization.description')}
                      </h5>
                      <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
                        {(((t('wellness.services.optimization.features', { returnObjects: true }) as string[]) || []).map((feature: string, index: number) => (
                          <li key={`${index}-${(feature || '').slice(0,30)}`} className="flex items-start">
                            <span className="text-special-1 mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        )))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Carte 3 - FORMATION & ATELIERS */}
                  <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
                    <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src="/assets/wellness/FormationAtelier.png" 
                        alt="Formation et ateliers bien-être - Expertise phytothérapie"
                        className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="300"
                        height="128"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center max-w-4xl mx-auto px-4">
                          <h3 className="text-xl font-bold leading-tight">
                            {t('wellness.services.training.title')}
                          </h3>
                          <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                            {t('wellness.services.training.subtitle')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                      <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
                        {(((t('wellness.services.training.features', { returnObjects: true }) as string[]) || []).map((feature: string, index: number) => (
                          <li key={`${index}-${(feature || '').slice(0,30)}`} className="flex items-start">
                            <span className="text-special-1 mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        )))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Carte 4 - MARKETING & COMMUNICATION */}
                  <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
                    <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src="/assets/wellness/Mark&Comm1.png" 
                        alt="Marketing et communication bien-être - Stratégie digitale"
                        className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="300"
                        height="128"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center max-w-4xl mx-auto px-4">
                          <h3 className="text-xl font-bold leading-tight">
                            {t('wellness.services.marketing.title')}
                          </h3>
                          <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                            {t('wellness.services.marketing.subtitle')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                      <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
                        {(((t('wellness.services.marketing.features', { returnObjects: true }) as string[]) || []).map((feature: string, index: number) => (
                          <li key={`${index}-${(feature || '').slice(0,30)}`} className="flex items-start">
                            <span className="text-special-1 mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        )))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Colonne de droite */}
              <motion.div 
                className="order-2 lg:order-1"
                variants={fadeInUp}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {/* Carte 5 - LEADERSHIP & MANAGEMENT */}
                  <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100 mt-8 lg:mt-12">
                    <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src="/assets/wellness/LeadMan.png" 
                        alt="Leadership et management centre bien-être - Gestion équipe"
                        className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="300"
                        height="128"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center max-w-4xl mx-auto px-4">
                          <h3 className="text-xl font-bold leading-tight">
                            {t('wellness.services.leadership.title')}
                          </h3>
                          <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                            {t('wellness.services.leadership.subtitle')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                      <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                        {t('wellness.services.leadership.description')}
                      </h5>
                      <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
                        {(((t('wellness.services.leadership.features', { returnObjects: true }) as string[]) || []).map((feature: string, index: number) => (
                          <li key={`${index}-${(feature || '').slice(0,30)}`} className="flex items-start">
                            <span className="text-special-1 mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        )))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Carte 6 - RECHERCHE & DEVELOPPEMENT */}
                  <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100 mt-8 lg:mt-12">
                    <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src="/assets/wellness/Recherche.png" 
                        alt="Recherche et développement phytothérapie - Innovation produits naturels"
                        className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="300"
                        height="128"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center max-w-4xl mx-auto px-4">
                          <h3 className="text-xl font-bold leading-tight">
                            {t('wellness.services.research.title')}
                          </h3>
                          <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                            {t('wellness.services.research.subtitle')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                      <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                        {t('wellness.services.research.description')}
                      </h5>
                      <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
                        {(((t('wellness.services.research.features', { returnObjects: true }) as string[]) || []).map((feature: string, index: number) => (
                          <li key={`${index}-${(feature || '').slice(0,30)}`} className="flex items-start">
                            <span className="text-special-1 mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        )))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Carte 7 - SUIVI & EVALUATION */}
                  <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
                    <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src="/assets/wellness/Suivi.png" 
                        alt="Suivi et évaluation centre bien-être - Analyse performance"
                        className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="300"
                        height="128"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center max-w-4xl mx-auto px-4">
                          <h3 className="text-xl font-bold leading-tight">
                            {t('wellness.services.monitoring.title')}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                      <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                        {t('wellness.services.monitoring.description')}
                      </h5>
                    </CardContent>
                  </Card>

                  {/* Carte 8 - PACK ESSENTIEL */}
                  <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
                    <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src="/assets/wellness/Pack.png" 
                        alt="Pack essentiel bien-être - Solution complète phytothérapie"
                        className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="300"
                        height="128"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center max-w-4xl mx-auto px-4">
                          <h3 className="text-xl font-bold leading-tight">
                            {t('wellness.services.pack.title')}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                      <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                        {t('wellness.services.pack.description')}
                      </h5>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>
        </section>

        <hr className="my-0 border-t border-black w-3/4 mx-auto opacity-50" />

        {/* CTA Section */}
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
                {t('wellness.cta.title')}
              </h3>
              
              <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                {t('wellness.cta.description')}
              </p>

              {/* Phrase clignotante */}
              <motion.p
                className="text-special-3 font-bold text-lg lg:text-xl mb-6"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
              >
                {t('wellness.cta.offer')}
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-linear-to-r from-special-1 to-special-2 hover:from-special-2 hover:to-special-3 text-black px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border border-black"
                  aria-label="Contactez-nous pour un devis bien-être et phytothérapie"
                >
                  {t('wellness.cta.button')}
                </Link>
              </div>
              
              <p className="text-gray-500 text-xs lg:text-sm mt-4 lg:mt-6">
                {t('wellness.cta.footer')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Wellness;