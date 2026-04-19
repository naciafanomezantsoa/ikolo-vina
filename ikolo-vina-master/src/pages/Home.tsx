// src/pages/Home.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '@/constants/schemas';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Handshake, Globe2, Briefcase, FlaskConical } from "lucide-react";
import { OffersCarousel } from "@/components/offers/OffersCarousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { partnersData } from "@/data/partnersData";
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

// Schéma spécifique à la page d'accueil
const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Accueil - Ikolo-Vina Consortium",
  "description": "Consortium de consultants multisectoriels à Madagascar spécialisé en BTP, tourisme, communication et développement durable",
  "url": "https://ikolo-vina.com",
  "mainEntity": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "alternateName": "Vina Consulting",
    "description": "Experts en BTP, tourisme, communication, développement durable, ingénierie et audit informatique à Madagascar",
    "founder": [
      {
        "@type": "Person",
        "name": "RAMAHANDRISON Felana Anna",
        "jobTitle": "Fondatrice & co-gérante de Vina Consulting"
      },
      {
        "@type": "Person",
        "name": "RAKOTOMALALA NOROHARILIVA Holy",
        "jobTitle": "Consultante ingénieure Phytochimiste"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Madagascar"
    },
    "knowsAbout": [
      "BTP & Infrastructures",
      "Tourisme Madagascar",
      "Communication & Marketing",
      "Développement Durable",
      "Ingénierie",
      "Audit Informatique"
    ]
  }
};

// Schéma pour les services (offres)
const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services Ikolo-Vina",
  "description": "Nos services de consulting multisectoriels à Madagascar",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Bien-être & Phytothérapie",
      "description": "Solutions de bien-être et produits phyto-thérapeutiques à base de plantes malgaches",
      "url": "https://ikolo-vina.com/wellness"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Solutions Digitales",
      "description": "Développement web, marketing digital et transformation numérique pour entreprises",
      "url": "https://ikolo-vina.com/digital"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Événementiel Professionnel",
      "description": "Organisation et gestion d'événements professionnels, séminaires et conférences",
      "url": "https://ikolo-vina.com/events"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Conseil Entreprise",
      "description": "Accompagnement stratégique et opérationnel pour les entreprises à Madagascar",
      "url": "https://ikolo-vina.com/enterprise"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "RSE & Développement Durable",
      "description": "Stratégies RSE, développement durable et responsabilité sociale des entreprises",
      "url": "https://ikolo-vina.com/rse"
    }
  ]
};

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Intégration SEO Complète avec React 19 natif */}
      <SEOMetadata
        title="Ikolo-Vina - Consortium de consultants multisectoriels à Madagascar"
        description="Expertise en BTP, tourisme, communication, développement durable, ingénierie et audit informatique. Conseil sur mesure pour vos projets à Madagascar."
        canonical="https://ikolo-vina.com"
        ogImage="/assets/ikoloVina/banniere.png"
        ogType="website"
        twitterCard="summary_large_image"
        keywords="consulting Madagascar, BTP Madagascar, développement durable, tourisme, communication, ingénierie, audit informatique, conseil entreprise, RSE Madagascar"
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        schema={JSON.stringify(HOME_SCHEMA)} // Schema intégré directement
      />
      
      {/* Structured Data (JSON-LD) - Maintenant géré par React 19 natif */}
      <StructuredData data={ORGANIZATION_SCHEMA} />
      <StructuredData data={WEBSITE_SCHEMA} />
      <StructuredData data={SERVICES_SCHEMA} />
      
      {/* Contenu de la page */}
      <div className="min-h-screen">
        {/* Section Hero avec Bannière */}
        <section className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="/assets/ikoloVina/banniere.png"
            alt="Bannière Ikolo Vina - Consortium de consultants multisectoriels à Madagascar"
            className="w-full h-[70vh] object-cover blur-[1px]"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              className="text-center max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-special-1/80 backdrop-blur-sm text-white border-none"
              >
                {t("home.hero.badge")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="px-6 py-3 lg:px-8 lg:py-3 transition-all duration-300 text-sm lg:text-base"
                  style={{
                    backgroundColor: "var(--color-special-1)",
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-special-2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-special-1)";
                  }}
                  onClick={() => {
                    const section = document.getElementById("offres");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("home.hero.discoverButton")}
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-6 py-3 lg:px-8 lg:py-3 transition-all duration-300 border-white text-white text-sm lg:text-base"
                    style={{
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-special-2)";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "white";
                    }}
                  >
                    {t("home.hero.contactButton")}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Le Consortium */}
        <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Colonne de gauche - Cartes valeurs */}
              <motion.div className="order-2 lg:order-1" variants={fadeInUp}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FlaskConical className="h-5 w-5 lg:h-8 lg:w-8 text-black" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                        {t("home.consortium.expertise.title")}
                      </h3>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                        {t("home.consortium.expertise.description")}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-3 to-special-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="h-5 w-5 lg:h-8 lg:w-8 text-black" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                        {t("home.consortium.leadership.title")}
                      </h3>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                        {t("home.consortium.leadership.description")}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-2 to-special-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Globe2 className="h-5 w-5 lg:h-8 lg:w-8 text-black" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                        {t("home.consortium.vision.title")}
                      </h3>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                        {t("home.consortium.vision.description")}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-4 to-special-5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Handshake className="h-5 w-5 lg:h-8 lg:w-8 text-black" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                        {t("home.consortium.partnerships.title")}
                      </h3>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                        {t("home.consortium.partnerships.description")}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Colonne de droite - Logo et texte principal */}
              <motion.div
                className="order-1 lg:order-2 flex flex-col items-center lg:items-start space-y-6 lg:space-y-8"
                variants={fadeInScale}
              >
                <div className="text-center flex flex-col items-center space-y-4 lg:space-y-6">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                    <span className="text-special-1">{t("home.consortium.title")}</span>
                  </h2>

                  <div className="relative group flex justify-center">
                    <div className="absolute -inset-2 lg:-inset-4 bg-linear-to-r from-special-1/20 to-special-2/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src="/assets/logos/ikolo-vina.png"
                      alt="Logo Consortium Ikolo-Vina - Consultants multisectoriels Madagascar"
                      className="relative h-32 lg:h-48 xl:h-64 w-auto transform group-hover:scale-105 transition-transform duration-500 mx-auto"
                      loading="lazy"
                      width="256"
                      height="256"
                    />
                  </div>

                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                    {t("home.consortium.subtitle")}
                  </h2>

                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {t("home.consortium.description")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section Les Fondatrices */}
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
                {t("home.founders.title")}
              </h2>
            </motion.div>

            {/* Version Desktop - 3 colonnes */}
            <motion.div
              className="hidden lg:grid grid-cols-3 gap-6 lg:gap-2 items-end"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Colonne 1 - Felana Anna RAMAHANDRISON */}
              <motion.div
                className="relative text-center flex flex-col justify-end"
                variants={fadeInUp}
              >
                {/* Logo Vina flottant en arrière-plan */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <img
                    src="/assets/logos/vina.png"
                    alt="Logo Vina Consulting - Consulting Madagascar"
                    className="h-32 lg:h-40 opacity-10 animate-float"
                    style={{
                      animation: "float 6s ease-in-out infinite",
                    }}
                    loading="lazy"
                    width="160"
                    height="160"
                  />
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {t("home.founders.felana.name")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {t("home.founders.felana.description")}
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="/assets/logos/vina.png"
                      alt="Vina Consulting - Consulting entreprise Madagascar"
                      className="h-10 lg:h-12 opacity-80"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Colonne 2 - Photo centrale */}
              <motion.div
                className="flex justify-center items-end"
                variants={fadeInScale}
              >
                <img
                  src="/assets/ikoloVina/AnnaHoly.png"
                  alt="Felana Anna RAMAHANDRISON et Holiniaina Norohariliva RAKOTOMALALA - Fondatrices Ikolo-Vina"
                  className="max-h-96 w-auto object-contain"
                  loading="lazy"
                  width="400"
                  height="384"
                />
              </motion.div>

              {/* Colonne 3 - Holiniaina Norohariliva RAKOTOMALALA */}
              <motion.div
                className="relative text-center flex flex-col justify-end"
                variants={fadeInUp}
              >
                {/* Logo Ikolo flottant en arrière-plan */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <img
                    src="/assets/logos/ikolo.png"
                    alt="Logo Ikolo - Solutions développement durable Madagascar"
                    className="h-32 lg:h-40 opacity-10 animate-float"
                    style={{
                      animation: "float 6s ease-in-out infinite 2s",
                    }}
                    loading="lazy"
                    width="160"
                    height="160"
                  />
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {t("home.founders.holiniaina.name")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {t("home.founders.holiniaina.description")}
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="/assets/logos/ikolo.png"
                      alt="Ikolo - Solutions phyto-thérapeutiques Madagascar"
                      className="h-10 lg:h-12 opacity-80"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Version Mobile */}
            <div className="lg:hidden space-y-8">
              {/* Photo en premier */}
              <div className="flex justify-center">
                <img
                  src="/assets/ikoloVina/AnnaHoly.png"
                  alt="Fondatrices Ikolo-Vina - Felana Anna et Holiniaina Norohariliva"
                  className="h-64 w-auto rounded-lg shadow-xl"
                  loading="lazy"
                  width="256"
                  height="256"
                />
              </div>

              {/* Textes des fondatrices */}
              <div className="grid grid-cols-1 gap-8">
                {/* Felana Anna RAMAHANDRISON */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center items-center gap-3 mb-3">
                    <Star className="h-5 w-5 text-special-1" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {t("home.founders.felana.name")}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {t("home.founders.felana.mobileDescription")}
                  </p>
                  <div className="flex justify-center mt-3">
                    <img
                      src="/assets/logos/vina.png"
                      alt="Vina Consulting Logo"
                      className="h-8 opacity-80"
                      loading="lazy"
                      width="32"
                      height="32"
                    />
                  </div>
                </div>

                {/* Holiniaina Norohariliva RAKOTOMALALA */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center items-center gap-3 mb-3">
                    <Star className="h-5 w-5 text-special-2" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {t("home.founders.holiniaina.name")}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {t("home.founders.holiniaina.mobileDescription")}
                  </p>
                  <div className="flex justify-center mt-3">
                    <img
                      src="/assets/logos/ikolo.png"
                      alt="Ikolo Logo"
                      className="h-8 opacity-80"
                      loading="lazy"
                      width="32"
                      height="32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-0 border-t border-black w-3/4 mx-auto opacity-50" />

        {/* Section Les Offres */}
        <section
          id="offres"
          className="pb-0 pt-5 bg-linear-to-br from-white to-gray-50/30"
        >
          <div className="container mx-auto px-4">
            {/* En-tête de section */}
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                {t("home.offers.title")}
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("home.offers.subtitle")}
              </p>
            </motion.div>

            {/* Carrousel des offres */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <OffersCarousel />
            </motion.div>

            {/* Section Partenaires */}
            <section className="pt-10 pb-4 bg-linear-to-br from-white to-gray-50/30">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* En-tête de section */}
                  <div className="text-center mb-4 mt-2 lg:mb-4">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                      {t("home.partners.title")}
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      {t("home.partners.subtitle")}
                    </p>
                  </div>

                  {/* Carrousel automatique */}
                  <div className="relative overflow-hidden">
                    <div className="flex animate-marquee space-x-4 lg:space-x-6 py-4">
                      {[...partnersData, ...partnersData, ...partnersData].map(
                        (partner, index) => (
                          <motion.a
                            key={`${partner.id}-${index}`}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:border-special-1/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40"
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <img
                              src={partner.logo}
                              alt={`Logo partenaire ${partner.name} - Ikolo-Vina`}
                              className="w-24 h-12 lg:w-32 lg:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                              loading="lazy"
                              width="128"
                              height="64"
                            />
                          </motion.a>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

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
                    {t("home.cta.title")}
                  </h3>

                  <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                    {t("home.cta.description")}
                  </p>

                  {/* Phrase clignotante */}
                  <motion.p
                    className="text-special-3 font-bold text-lg lg:text-xl mb-6"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    {t("home.cta.offer")}
                  </motion.p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to="/contact"
                      className="bg-linear-to-r from-special-1 to-special-2 hover:from-special-2 hover:to-special-3 text-black px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border border-black"
                      aria-label="Contactez Ikolo-Vina pour un projet"
                    >
                      {t("home.cta.contactButton")}
                    </Link>
                  </div>

                  <p className="text-gray-500 text-xs lg:text-sm mt-4 lg:mt-6">
                    {t("home.cta.footer")}
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

export default Home;