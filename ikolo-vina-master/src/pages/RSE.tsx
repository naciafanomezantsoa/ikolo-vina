// src/pages/AccompagnementRSE.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { ORGANIZATION_SCHEMA } from '@/constants/schemas';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Recycle,
  Heart,
  Users,
  CheckCircle,
  Zap,
  Building,
  Coins,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  Globe,
  Shield,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Schéma spécifique à la page RSE
const RSE_SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Responsabilité Sociétale des Entreprises (RSE)",
  "name": "Accompagnement RSE Madagascar - Ikolo-Vina",
  "description": "Accompagnement complet en RSE à Madagascar : stratégie développement durable, économie circulaire, bien-être social et impact communautaire",
  "provider": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "url": "https://ikolo-vina.com"
  },
  "areaServed": "Madagascar",
  "offers": {
    "@type": "Offer",
    "category": "Services RSE et développement durable",
    "includes": [
      "Gestion énergétique durable",
      "Économie circulaire",
      "Bien-être social",
      "Agriculture durable",
      "Gestion des ressources"
    ]
  },
  "keywords": "RSE Madagascar, développement durable, responsabilité sociale, économie circulaire, énergie durable, agriculture durable, impact social"
};

// Schéma pour les solutions RSE
const RSE_SOLUTIONS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Solutions RSE Ikolo-Vina pour entreprises à Madagascar",
  "description": "Nos solutions complètes de RSE et développement durable",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Gestion énergétique durable",
      "description": "Audit énergétique et solutions d'énergie renouvelable pour entreprises",
      "category": "Énergie durable"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Économie circulaire et gestion des déchets",
      "description": "Stratégies de réduction, réutilisation et recyclage des déchets",
      "category": "Économie circulaire"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Bien-être social et QVT",
      "description": "Programmes de qualité de vie au travail et bien-être des employés",
      "category": "Bien-être social"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Agriculture durable et circuits courts",
      "description": "Promotion de l'agriculture durable et circuits d'approvisionnement locaux",
      "category": "Agriculture durable"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "Gestion durable des ressources",
      "description": "Optimisation de l'utilisation des ressources naturelles et économie d'eau",
      "category": "Gestion des ressources"
    }
  ]
};

// Schéma pour les engagements RSE
const RSE_COMMITMENTS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ikolo-Vina Consortium",
  "description": "Entreprise engagée en RSE à Madagascar",
  "ethicsPolicy": "https://ikolo-vina.com/rse",
  "slogan": "Construire un avenir durable pour Madagascar",
  "knowsAbout": [
    "Développement durable Madagascar",
    "Responsabilité sociale des entreprises",
    "Économie circulaire",
    "Énergie renouvelable",
    "Agriculture durable"
  ]
};

const Rse = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('rse.solutions.0.title'),
      description: t('rse.solutions.0.description'),
      benefits: [
        t('rse.solutions.0.benefits.0'),
        t('rse.solutions.0.benefits.1'),
        t('rse.solutions.0.benefits.2'),
        t('rse.solutions.0.benefits.3')
      ],
      image: "/assets/rse/service-energie.png",
      alt: t('rse.solutions.0.alt')
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: t('rse.solutions.1.title'),
      description: t('rse.solutions.1.description'),
      benefits: [
        t('rse.solutions.1.benefits.0'),
        t('rse.solutions.1.benefits.1'),
        t('rse.solutions.1.benefits.2'),
        t('rse.solutions.1.benefits.3')
      ],
      image: "/assets/rse/service-dechets.png",
      alt: t('rse.solutions.1.alt')
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('rse.solutions.2.title'),
      description: t('rse.solutions.2.description'),
      benefits: [
        t('rse.solutions.2.benefits.0'),
        t('rse.solutions.2.benefits.1'),
        t('rse.solutions.2.benefits.2'),
        t('rse.solutions.2.benefits.3')
      ],
      image: "/assets/rse/service-bienetre.png",
      alt: t('rse.solutions.2.alt')
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: t('rse.solutions.3.title'),
      description: t('rse.solutions.3.description'),
      benefits: [
        t('rse.solutions.3.benefits.0'),
        t('rse.solutions.3.benefits.1'),
        t('rse.solutions.3.benefits.2'),
        t('rse.solutions.3.benefits.3')
      ],
      image: "/assets/rse/service-agriculture.png",
      alt: t('rse.solutions.3.alt')
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: t('rse.solutions.4.title'),
      description: t('rse.solutions.4.description'),
      benefits: [
        t('rse.solutions.4.benefits.0'),
        t('rse.solutions.4.benefits.1'),
        t('rse.solutions.4.benefits.2'),
        t('rse.solutions.4.benefits.3')
      ],
      image: "/assets/rse/service-ressources.png",
      alt: t('rse.solutions.4.alt')
    }
  ];

  const valeurs = [
    {
      icon: <Target className="w-10 h-10" />,
      title: t('rse.values.0.title'),
      description: t('rse.values.0.description'),
      image: "/assets/rse/valeur-impact.png",
      alt: t('rse.values.0.alt'),
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: t('rse.values.1.title'),
      description: t('rse.values.1.description'),
      image: "/assets/rse/valeur-excellence.png",
      alt: t('rse.values.1.alt'),
      color: "from-emerald-500 to-green-400"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: t('rse.values.2.title'),
      description: t('rse.values.2.description'),
      image: "/assets/rse/valeur-croissance.png",
      alt: t('rse.values.2.alt'),
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: t('rse.values.3.title'),
      description: t('rse.values.3.description'),
      image: "/assets/rse/valeur-communautaire.png",
      alt: t('rse.values.3.alt'),
      color: "from-purple-500 to-pink-400"
    }
  ];

  const engagements = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('rse.commitments.0.title'),
      description: t('rse.commitments.0.description'),
      stat: t('rse.commitments.0.stat'),
      statLabel: t('rse.commitments.0.statLabel')
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t('rse.commitments.1.title'),
      description: t('rse.commitments.1.description'),
      stat: t('rse.commitments.1.stat'),
      statLabel: t('rse.commitments.1.statLabel')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('rse.commitments.2.title'),
      description: t('rse.commitments.2.description'),
      stat: t('rse.commitments.2.stat'),
      statLabel: t('rse.commitments.2.statLabel')
    }
  ];

  return (
    <>
      {/* Intégration SEO Complète avec React 19 natif */}
      <SEOMetadata
        title="RSE Madagascar - Accompagnement Développement Durable & Responsabilité Sociale | Ikolo-Vina"
        description="Expert en RSE à Madagascar : stratégie développement durable, économie circulaire, énergie renouvelable, agriculture durable et impact social. Accompagnement RSE sur mesure."
        canonical="https://ikolo-vina.com/rse"
        ogImage="/assets/rse/hero-rse.png"
        ogType="website"
        twitterCard="summary_large_image"
        keywords="RSE Madagascar, développement durable, responsabilité sociale des entreprises, économie circulaire Madagascar, énergie renouvelable, agriculture durable, impact social, ESG Madagascar"
        robots="index, follow, max-image-preview:large"
        schema={JSON.stringify(RSE_SERVICES_SCHEMA)} // Schema intégré directement
      />
      
      {/* Structured Data (JSON-LD) */}
      <StructuredData data={ORGANIZATION_SCHEMA} />
      <StructuredData data={RSE_SOLUTIONS_SCHEMA} />
      <StructuredData data={RSE_COMMITMENTS_SCHEMA} />
      
      {/* Contenu de la page */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="/assets/rse/hero-rse.png"
            alt="Accompagnement RSE Madagascar - Développement durable Ikolo-Vina"
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
              <Badge variant="secondary" className="mb-4 bg-special-2/80 backdrop-blur-sm text-white border-none">
                {t('rse.hero.badge')}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {t('rse.hero.title')}
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
                {t('rse.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Notre Vision RSE */}
        <section className="py-16 bg-linear-to-br from-white to-gray-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  {t('rse.vision.title')}
                </h2>
                <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  {t('rse.vision.description')}
                </p>
              </div>

              {/* Section Valeurs - Grille Interactive */}
              <section className="py-10">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valeurs.map((valeur, index) => (
                      <motion.div
                        key={valeur.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                      >
                        {/* Image de fond */}
                        <img
                          src={valeur.image}
                          alt={`Valeur RSE: ${valeur.alt} - Madagascar`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          width="300"
                          height="320"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                        {/* Contenu */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                              {valeur.icon}
                            </div>
                            <h3 className="text-xl font-bold">{valeur.title}</h3>
                          </div>
                          <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                            {valeur.description}
                          </p>
                        </div>

                        {/* Indicateur de survol */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-special-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </section>

        {/* Section Solutions */}
        <section className="py-16 bg-linear-to-br from-special-2/5 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                {t('rse.solutions.title')}
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {t('rse.solutions.subtitle')}
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group ${
                      index === solutions.length - 1 && solutions.length % 2 !== 0
                        ? 'md:w-full flex justify-center'
                        : 'md:w-[calc(50%-12px)]'
                      }`}
                  >
                    <div className={
                      index === solutions.length - 1 && solutions.length % 2 !== 0
                        ? 'w-full max-w-2xl'
                        : 'w-full'
                    }>
                      <Card className="h-full border-0 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden group-hover:shadow-xl transition-all duration-500 border-special-2/20">
                        <div className="flex flex-col md:flex-row h-full">
                          <div className="md:w-2/5">
                            <div className="relative h-48 md:h-full">
                              <img
                                src={solution.image}
                                alt={`Solution RSE: ${solution.alt} - Madagascar`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                                width="300"
                                height="256"
                              />
                              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-linear-to-r from-special-2 to-special-1 flex items-center justify-center shadow-lg">
                                <div className="text-white">
                                  {solution.icon}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="md:w-3/5">
                            <CardContent className="p-6 h-full flex flex-col">
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {solution.title}
                              </h3>

                              <p className="text-gray-600 text-sm mb-4 leading-relaxed grow">
                                {solution.description}
                              </p>

                              <div className="space-y-2">
                                {solution.benefits.map((benefit, idx) => (
                                  <div key={idx} className="flex items-start space-x-2">
                                    <CheckCircle className="w-4 h-4 text-special-2 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Engagements */}
        <section className="pt-10 pb-2 bg-linear-to-br from-white to-gray-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                {t('rse.commitments.title')}
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {t('rse.commitments.subtitle')}
              </p>
            </motion.div>

            {/* Section Engagements - Steps Vertical */}
            <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
                    {engagements.map((engagement, index) => (
                      <motion.div
                        key={engagement.title}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex items-start space-x-6 group cursor-pointer"
                      >
                        {/* Numéro d'étape */}
                        <div className="shrink-0 w-16 h-16 bg-linear-to-r from-special-2 to-special-1 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>

                        {/* Ligne de connexion (sauf pour le dernier) */}
                        {index < engagements.length - 1 && (
                          <div className="absolute left-8 top-16 w-0.5 h-16 bg-linear-to-b from-special-2 to-special-1 transform translate-y-16"></div>
                        )}

                        {/* Contenu */}
                        <div className="grow">
                          <div className="flex items-center mb-3">
                            <div className="text-special-2 mr-3">
                              {engagement.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {engagement.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {engagement.description}
                          </p>

                          {/* Statistique en badge */}
                          <div className="inline-flex items-center space-x-2 bg-special-2/10 px-4 py-2 rounded-full border border-special-2/20">
                            <span className="text-special-2 font-bold text-lg">
                              {engagement.stat}
                            </span>
                            <span className="text-gray-700 text-sm">
                              {engagement.statLabel}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Message de conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="bg-linear-to-r from-special-2/10 to-special-1/10 rounded-2xl p-8 border border-special-2/20 max-w-3xl mx-auto">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {t('rse.mission.title')}
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t('rse.mission.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section CTA Finale */}
        <section className="py-5 bg-linear-to-br from-white to-gray-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-linear-to-r from-special-1/15 via-special-3/10 to-special-2/15 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                    {t('rse.cta.title')}
                  </h3>

                  <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                    {t('rse.cta.description')}
                  </p>

                  {/* Phrase clignotante */}
                  <motion.p
                    className="text-special-3 font-bold text-lg lg:text-xl mb-6"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
                  >
                    {t('rse.cta.offer')}
                  </motion.p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to="/contact"
                      className="bg-linear-to-r from-special-1 to-special-2 hover:from-special-2 hover:to-special-3 text-black px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border border-black"
                      aria-label="Demander un accompagnement RSE Madagascar"
                    >
                      {t('rse.cta.button')}
                      <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </Link>
                  </div>

                  <p className="text-gray-500 text-xs lg:text-sm mt-4 lg:mt-6">
                    {t('rse.cta.footer')}
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

export default Rse;