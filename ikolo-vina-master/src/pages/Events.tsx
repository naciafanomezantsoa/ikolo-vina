// src/pages/Events.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { ORGANIZATION_SCHEMA } from '@/constants/schemas';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Schéma spécifique à la page Événementiel
const EVENTS_SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Organisation d'événements",
  "name": "Événementiel Professionnel - Ikolo-Vina",
  "description": "Organisation complète d'événements professionnels à Madagascar : conférences, séminaires, inaugurations, team building et cérémonies officielles",
  "provider": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "url": "https://ikolo-vina.com"
  },
  "areaServed": "Madagascar",
  "offers": {
    "@type": "Offer",
    "category": "Services événementiels",
    "includes": [
      "Conférences & séminaires",
      "Inaugurations officielles",
      "Team building",
      "Cérémonies de lancement",
      "Événements corporatifs"
    ]
  },
  "keywords": "événementiel Madagascar, organisation événement, séminaire Antananarivo, conférence Madagascar, team building entreprise"
};

// Schéma pour les types d'événements
const EVENT_TYPES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Types d'événements organisés par Ikolo-Vina",
  "description": "Services d'organisation d'événements professionnels à Madagascar",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "Event",
      "position": 1,
      "name": "Conférences & Séminaires",
      "description": "Organisation complète de conférences et séminaires professionnels",
      "eventAttendanceMode": "MixedEventAttendanceMode",
      "eventStatus": "EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Madagascar",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MG"
        }
      }
    },
    {
      "@type": "Event",
      "position": 2,
      "name": "Inaugurations Officielles",
      "description": "Organisation d'inaugurations et cérémonies officielles",
      "eventAttendanceMode": "OfflineEventAttendanceMode",
      "eventStatus": "EventScheduled"
    },
    {
      "@type": "Event",
      "position": 3,
      "name": "Team Building & Événements Corporatifs",
      "description": "Organisation d'événements team building et activités corporatives",
      "eventAttendanceMode": "OfflineEventAttendanceMode",
      "eventStatus": "EventScheduled"
    }
  ]
};

const Events = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      color: "#005F7F",
      image: "/assets/events/holy.png",
      badge: t('events.services.0.badge'),
      title: t('events.services.0.title'),
      description: t('events.services.0.description'),
      features: [
        t('events.services.0.features.0'),
        t('events.services.0.features.1'),
        t('events.services.0.features.2'),
        t('events.services.0.features.3'),
        t('events.services.0.features.4')
      ]
    },
    {
      id: 2,
      color: "#A65329",
      image: "/assets/events/annah.png",
      badge: t('events.services.1.badge'),
      title: t('events.services.1.title'),
      description: t('events.services.1.description'),
      features: [
        t('events.services.1.features.0'),
        t('events.services.1.features.1'),
        t('events.services.1.features.2'),
        t('events.services.1.features.3'),
        t('events.services.1.features.4')
      ],
      reverse: true
    },
    {
      id: 3,
      color: "#00804B",
      image: "/assets/events/hasina.png",
      badge: t('events.services.2.badge'),
      title: t('events.services.2.title'),
      description: t('events.services.2.description'),
      features: [
        t('events.services.2.features.0'),
        t('events.services.2.features.1'),
        t('events.services.2.features.2'),
        t('events.services.2.features.3'),
        t('events.services.2.features.4')
      ]
    }
  ];

  const approachSteps = [
    {
      step: 1,
      title: t('events.approach.steps.0.title'),
      description: t('events.approach.steps.0.description')
    },
    {
      step: 2,
      title: t('events.approach.steps.1.title'),
      description: t('events.approach.steps.1.description')
    },
    {
      step: 3,
      title: t('events.approach.steps.2.title'),
      description: t('events.approach.steps.2.description')
    },
    {
      step: 4,
      title: t('events.approach.steps.3.title'),
      description: t('events.approach.steps.3.description')
    }
  ];

  const deliverables = [
    {
      title: t('events.deliverables.0.title'),
      description: t('events.deliverables.0.description')
    },
    {
      title: t('events.deliverables.1.title'),
      description: t('events.deliverables.1.description')
    },
    {
      title: t('events.deliverables.2.title'),
      description: t('events.deliverables.2.description')
    }
  ];

  return (
    <>
      {/* Intégration SEO Complète avec React 19 natif */}
      <SEOMetadata
        title="Organisation d'événements Madagascar - Événementiel Professionnel | Ikolo-Vina"
        description="Agence événementielle à Madagascar : organisation complète de conférences, séminaires, inaugurations, team building et événements corporatifs. Expertise événementielle professionnelle."
        canonical="https://ikolo-vina.com/events"
        ogImage="/assets/events/banniere.png"
        ogType="website"
        twitterCard="summary_large_image"
        keywords="événementiel Madagascar, organisation événement Antananarivo, agence événementielle, séminaire Madagascar, conférence professionnelle, team building entreprise, inauguration officielle, événement corporatif"
        robots="index, follow, max-image-preview:large"
        schema={JSON.stringify(EVENTS_SERVICES_SCHEMA)} // Schema intégré directement
      />
      
      {/* Structured Data (JSON-LD) */}
      <StructuredData data={ORGANIZATION_SCHEMA} />
      <StructuredData data={EVENT_TYPES_SCHEMA} />
      
      {/* Contenu de la page */}
      <div className="min-h-screen">
        {/* Section Hero - Événementiel */}
        <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="/assets/events/banniere.png"
            alt="Événementiel professionnel Madagascar - Organisation événements Ikolo-Vina"
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
                {t('events.hero.badge')}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {t('events.hero.title')}
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
                {t('events.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Services Événementiels - Version 3 lignes */}
        <section id="services" className="py-0">
          {services.map((service) => (
            <div key={service.id} style={{ backgroundColor: service.color }} className="text-white">
              <div className="container mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[500px] ${
                  service.reverse ? 'lg:grid-cols-2' : ''
                }`}>
                  {/* Colonne Image */}
                  <div className={`relative ${service.reverse ? 'order-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={`${service.title} - Service événementiel Madagascar`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="600"
                      height="500"
                    />
                  </div>
                  
                  {/* Colonne Contenu */}
                  <div className={`p-8 lg:p-8 flex flex-col justify-center ${service.reverse ? 'order-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="mb-4 bg-white/20 text-white border-none backdrop-blur-sm">
                        {service.badge}
                      </Badge>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        {service.title}
                      </h2>
                      <p className="text-lg mb-6 text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-white mr-3" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Section Notre Approche Événementielle */}
        <section className="py-16 bg-linear-to-br from-white to-gray-50/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                {t('events.approach.title')}
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('events.approach.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Colonne de gauche - Étapes */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {approachSteps.map((step) => (
                  <div key={step.step} className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                    <div className={`shrink-0 w-12 h-12 bg-special-${step.step} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Colonne de droite - Avantages */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200/50">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                    {t('events.whyChoose.title')}
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: t('events.whyChoose.items.0.title'),
                        description: t('events.whyChoose.items.0.description')
                      },
                      {
                        title: t('events.whyChoose.items.1.title'),
                        description: t('events.whyChoose.items.1.description')
                      },
                      {
                        title: t('events.whyChoose.items.2.title'),
                        description: t('events.whyChoose.items.2.description')
                      },
                      {
                        title: t('events.whyChoose.items.3.title'),
                        description: t('events.whyChoose.items.3.description')
                      },
                      {
                        title: t('events.whyChoose.items.4.title'),
                        description: t('events.whyChoose.items.4.description')
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className={`h-6 w-6 text-special-${(index % 4) + 1} mt-1 shrink-0`} />
                        <div>
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-special-1/10 rounded-lg border border-special-1/20">
                    <p className="text-sm text-gray-700 text-center">
                      {t('events.whyChoose.commitment')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Livrables */}
        <section className="py-5 bg-linear-to-br from-white to-gray-50/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                {t('events.deliverables.title')}
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('events.deliverables.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-special-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{deliverable.title}</h3>
                      <p className="text-gray-600">
                        {deliverable.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                    {t('events.cta.title')}
                  </h3>
                  
                  <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                    {t('events.cta.description')}
                  </p>

                  {/* Phrase clignotante */}
                  <motion.p
                      className="text-special-3 font-bold text-lg lg:text-xl mb-6"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
                  >
                      {t('events.cta.offer')}
                  </motion.p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to="/contact"
                      className="bg-linear-to-r from-special-1 to-special-2 hover:from-special-2 hover:to-special-3 text-black px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border border-black"
                      aria-label="Demander un devis pour organisation événement Madagascar"
                    >
                      {t('events.cta.button')}
                      <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-500 text-xs lg:text-sm mt-4 lg:mt-6">
                    {t('events.cta.footer')}
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

export default Events;