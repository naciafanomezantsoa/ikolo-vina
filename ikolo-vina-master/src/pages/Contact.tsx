// src/pages/Contact.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA } from '@/constants/schemas';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

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

// Configuration EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_vg1zjdj',
  TEMPLATE_ID: 'template_f5rop5u',
  PUBLIC_KEY: '50rCSQFtVa4FLIB7m',
  USER_ID: '50rCSQFtVa4FLIB7m'
};

// ⚠️ CLÉ DE PRODUCTION ⚠️
const RECAPTCHA_SITE_KEY = "6Lc01SQsAAAAAPWL_-V9tGaeY1PdVqSJ__RW5fSl"; 

// Schéma spécifique pour la page Contact
const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact - Ikolo-Vina Consortium",
  "description": "Contactez nos experts consultants multisectoriels à Madagascar pour vos projets en BTP, tourisme, digital, événementiel et développement durable.",
  "url": "https://ikolo-vina.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@ikolo-vina.com",
      "availableLanguage": ["French", "English"],
      "areaServed": "MG"
    }
  }
};

// Composant personnalisé pour l'icône TikTok
const TikTokIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-label="TikTok"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const Contact = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Configuration des réseaux sociaux avec traductions
  const socialLinks = [
    {
      label: t('contact.social.facebook'),
      url: 'https://facebook.com',
      icon: <Facebook className="w-5 h-5" />,
      color: 'bg-blue-600',
      hoverColor: 'bg-blue-700',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      label: t('contact.social.instagram'),
      url: 'https://instagram.com',
      icon: <Instagram className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      hoverColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-gradient-to-r from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    },
    {
      label: t('contact.social.tiktok'),
      url: 'https://tiktok.com',
      icon: <TikTokIcon className="w-5 h-5" />,
      color: 'bg-black',
      hoverColor: 'bg-gray-800',
      textColor: 'text-gray-800',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      label: t('contact.social.linkedin'),
      url: 'https://linkedin.com',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'bg-blue-700',
      hoverColor: 'bg-blue-800',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ];

  // Couleurs de la palette pour le formulaire
  const colors = {
    primary: "#2987A6",
    secondary: "#A65329",
    accent1: "#005F7F",
    accent2: "#00804B",
  };

  // Styles personnalisés pour les toasts
  const toastStyles = {
    success: {
      background: 'linear-gradient(135deg, #2987A6, #00804B)',
      color: 'white',
      fontWeight: '500',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(41, 135, 166, 0.3)',
    },
    error: {
      background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
      color: 'white',
      fontWeight: '500',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(220, 38, 38, 0.3)',
    },
    loading: {
      background: 'linear-gradient(135deg, #475569, #334155)',
      color: 'white',
      fontWeight: '500',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }
  };

  // Informations de contact structurées pour le SEO
  const contactInfo = {
    email: "contact@ikolo-vina.com",
    phone: "+261 XX XX XXX XX",
    address: {
      street: "5 Rue Pasteur",
      city: "Antananarivo",
      country: "Madagascar",
      postalCode: "101"
    },
    businessHours: "Lundi - Vendredi: 8h00 - 17h00"
  };

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Initialiser EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // Gestion du reCAPTCHA
  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
    setIsCaptchaValid(!!value);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaValue(null);
    setIsCaptchaValid(false);
  };

  // Fonction pour gérer la soumission du formulaire avec EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérification reCAPTCHA
    if (!recaptchaValue) {
      toast.error(t('contact.form.recaptchaError'), {
        style: toastStyles.error,
        icon: '⚠️',
        duration: 4000,
      });
      return;
    }

    if (!formRef.current) {
      return;
    }

    // Démarrer la soumission
    const loadingToast = toast.loading(t('contact.form.submitting'), {
      style: toastStyles.loading,
      duration: Infinity,
    });

    setIsSubmitting(true);

    try {
      // Utiliser EmailJS pour envoyer l'email directement depuis le frontend
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        // Succès
        toast.dismiss(loadingToast);
        toast.success(t('contact.form.successMessage'), {
          style: toastStyles.success,
          icon: '✅',
          duration: 5000,
        });

        // Réinitialiser le formulaire
        formRef.current.reset();
        recaptchaRef.current?.reset();
        setRecaptchaValue(null);
        setIsCaptchaValid(false);
      } else {
        // Erreur EmailJS
        toast.dismiss(loadingToast);
        toast.error(t('contact.form.submitError'), {
          style: toastStyles.error,
          icon: '❌',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      
      // Gestion d'erreur détaillée
      let errorMessage = t('contact.form.networkError');
      
      if (typeof error === 'object' && error !== null) {
        const emailjsError = error as { text?: string };
        if (emailjsError.text) {
          errorMessage = `${t('contact.form.submitError')}: ${emailjsError.text}`;
        }
      }
      
      toast.dismiss(loadingToast);
      toast.error(errorMessage, {
        style: toastStyles.error,
        icon: '🚨',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Logique pour le survol du formulaire
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isMobile) {
      const relatedTarget = e.relatedTarget as Node;
      if (formContainerRef.current && !formContainerRef.current.contains(relatedTarget)) {
        setIsHovered(false);
      }
    }
  };

  // Sur mobile, le formulaire est toujours ouvert
  useEffect(() => {
    if (isMobile) {
      setIsHovered(true);
    }
  }, [isMobile]);

  // Dimensions communes pour les trois blocs
  const fixedDimensions = {
    width: isMobile ? "w-full max-w-md" : "w-[450px]",
    height: "h-[500px]",
  };

  // Le formulaire change de taille au survol
  const formDimensions = {
    width: isMobile ? "w-full max-w-md" : isHovered ? "w-[450px]" : "w-[400px]",
    height: isMobile ? "h-[500px]" : isHovered ? "h-[500px]" : "h-[200px]",
  };

  return (
    <>
      {/* Intégration SEO Complète avec React 19 natif */}
      <SEOMetadata
        title="Contactez Ikolo-Vina - Experts Consulting Madagascar | Devis Gratuit"
        description="Prenez contact avec nos experts consultants multisectoriels à Madagascar. BTP, tourisme, digital, événementiel, RSE. Première consultation gratuite et devis personnalisé."
        canonical="https://ikolo-vina.com/contact"
        ogImage="/assets/contact/contact-og.jpg"
        ogType="website"
        twitterCard="summary_large_image"
        keywords="contact consulting Madagascar, devis gratuit, experts Madagascar, consultation BTP Madagascar, conseil tourisme, digitalisation entreprise, événementiel professionnel, RSE Madagascar"
        robots="index, follow, max-image-preview:large"
        schema={JSON.stringify(CONTACT_PAGE_SCHEMA)} // Schema intégré directement
      />
      
      {/* Structured Data (JSON-LD) */}
      <StructuredData data={ORGANIZATION_SCHEMA} />
      <StructuredData data={LOCAL_BUSINESS_SCHEMA} />
      
      {/* Toast Container - Positionné en haut */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            maxWidth: '400px',
            padding: '16px',
            fontSize: '14px',
            paddingTop: '12px',
          },
        }}
        containerStyle={{
          top: 20,
        }}
      />
      
      <motion.div
        className="flex justify-center items-center min-h-screen p-4 md:p-5 relative overflow-x-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        style={{
          backgroundImage: "url('/assets/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Layout principal responsive */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Section réseaux sociaux */}
          <motion.div
            className={`${fixedDimensions.width} ${fixedDimensions.height} order-2 lg:order-1`}
            variants={fadeInScale}
          >
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-200 w-full h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center">
                <MessageCircle
                  className="w-5 h-5 mr-2"
                  style={{ color: colors.primary }}
                  aria-label="Message icon"
                />
                {t('contact.social.title')}
              </h3>

              <div className="flex flex-col gap-3 md:gap-4 flex-1">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-3 p-3 ${social.bgColor} ${
                      social.textColor
                    } rounded-xl hover:${social.bgColor.replace(
                      "50",
                      "100"
                    )} transition-all duration-300 transform border ${
                      social.borderColor
                    } flex-1`}
                    aria-label={`Suivez-nous sur ${social.label}`}
                  >
                    <div
                      className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white shrink-0`}
                    >
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  {t('contact.social.community')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box principal du formulaire */}
          <motion.div
            ref={formContainerRef}
            className={`relative rounded-3xl flex justify-center items-center transition-all duration-700 overflow-hidden cursor-pointer group
              ${formDimensions.width} ${formDimensions.height}
              bg-linear-to-br from-blue-700 to-green-500 border-2 border-blue-900 shadow-2xl z-10 order-1 lg:order-2`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={fadeInScale}
            itemScope
            itemType="https://schema.org/ContactPage"
          >
            {/* Effet de bordure colorée au survol */}
            <motion.div
              className={`absolute inset-0 rounded-3xl transition-all duration-1000
                ${isHovered ? "opacity-20 blur-sm" : "opacity-0"}`}
              style={{
                background: "linear-gradient(135deg, #2987A6, #005F7F)",
              }}
            />

            {/* Fond intérieur */}
            <div className="absolute inset-0.5 bg-white rounded-2xl z-10" />

            {/* Contenu avec bordure et effet glass */}
            <motion.div
              className={`absolute transition-all duration-700 rounded-2xl bg-linear-to-br from-gray-300 to-gray-400 text-gray-800 z-20 overflow-visible backdrop-blur-sm border border-gray-200
                ${isMobile ? "inset-4" : isHovered ? "inset-4" : "inset-8"}`}
              variants={fadeInUp}
            >
              <div className="relative flex flex-col items-center justify-start w-full h-full gap-3 p-2">
                {/* Titre */}
                <motion.h2
                  className={`absolute text-center whitespace-nowrap transition-all duration-700 font-light tracking-widest
                    ${
                      isMobile || isHovered
                        ? "top-3 left-1/2 transform -translate-x-1/2 text-base z-30"
                        : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl"
                    }`}
                  variants={fadeInUp}
                  itemProp="name"
                >
                  <span
                    className={`transition-all duration-700 inline-block font-light
                      ${isHovered || isMobile ? "font-medium" : ""}
                    `}
                    style={
                      isHovered || isMobile
                        ? {
                            background:
                              "linear-gradient(to right, #2987A6, #00804B)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : { color: "#374151" }
                    }
                  >
                    <MessageCircle
                      className="w-4 h-4 inline mr-3"
                      style={{ color: colors.primary }}
                      aria-label="Contact form icon"
                    />
                    {t('contact.form.title')}
                    <i
                      className="fa-solid fa-bolt ml-3"
                      style={{ color: colors.secondary }}
                    />
                  </span>
                </motion.h2>

                {/* Champs de formulaire */}
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className={`w-full flex flex-col gap-3 transition-all duration-700 overflow-y-auto p-3 custom-scrollbar
                    ${
                      isMobile
                        ? "opacity-100 visible translate-y-0 mt-12 max-h-[380px]"
                        : isHovered
                        ? "opacity-100 visible translate-y-0 mt-12 max-h-[380px]"
                        : "opacity-0 invisible translate-y-8 max-h-96"
                    }`}
                  variants={staggerContainer}
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <motion.div variants={fadeInUp}>
                    <input
                      type="text"
                      name="nom"
                      placeholder={t('contact.form.name.placeholder')}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:border-[#2987A6] focus:ring-2 focus:ring-[#2987A6]/20 text-sm md:text-base"
                      aria-label="Votre nom complet"
                      itemProp="name"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.email.placeholder')}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:border-[#A65329] focus:ring-2 focus:ring-[#A65329]/20 text-sm md:text-base"
                      aria-label="Votre adresse email"
                      itemProp="email"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <textarea
                      name="message"
                      placeholder={t('contact.form.message.placeholder')}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 resize-vertical min-h-20 transition-all duration-300 focus:border-[#A65329] focus:ring-2 focus:ring-[#A65329]/20 text-sm md:text-base"
                      aria-label="Votre message"
                      itemProp="description"
                    />
                  </motion.div>

                  {/* Section reCAPTCHA */}
                  <motion.div
                    variants={fadeInUp}
                    className="bg-gray-100 p-3 rounded-xl border border-gray-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">
                        {t('contact.form.recaptcha.title')}
                      </span>
                      <i
                        className="fa-solid fa-shield-alt"
                        style={{ color: colors.primary }}
                        aria-label="Security shield icon"
                      ></i>
                    </div>

                    <div className="flex justify-center overflow-hidden">
                      <div className="transform scale-90 md:scale-100 origin-center">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={handleRecaptchaChange}
                          onExpired={handleRecaptchaExpired}
                          size={isMobile ? "compact" : "normal"}
                          aria-label="Vérification de sécurité reCAPTCHA"
                        />
                      </div>
                    </div>

                    {!isCaptchaValid && (
                      <p className="text-red-500 text-xs mt-2 flex items-center justify-center text-center">
                        <i className="fa-solid fa-exclamation-triangle mr-1" aria-label="Warning icon" />
                        {t('contact.form.recaptcha.error')}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeInUp} className="mt-2">
                    <button
                      type="submit"
                      disabled={!isCaptchaValid || isSubmitting}
                      className={`w-full px-4 py-3 text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-95 text-sm md:text-base ${
                        !isCaptchaValid || isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      style={{
                        background: "linear-gradient(to right, #2987A6, #00804B)",
                      }}
                      onMouseEnter={(e) => {
                        if (isCaptchaValid && !isSubmitting) {
                          e.currentTarget.style.background =
                            "linear-gradient(to right, #005F7F, #A65329)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (isCaptchaValid && !isSubmitting) {
                          e.currentTarget.style.background =
                            "linear-gradient(to right, #2987A6, #00804B)";
                        }
                      }}
                      aria-label="Envoyer le formulaire de contact"
                      itemProp="potentialAction"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin mr-2" aria-label="Loading" />
                          {t('contact.form.submitting')}
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-paper-plane mr-2" aria-label="Send" />
                          {isCaptchaValid
                            ? t('contact.form.submit')
                            : t('contact.form.completeSecurity')}
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>

          {/* Carte Google Maps */}
          <motion.div
            className={`${fixedDimensions.width} ${fixedDimensions.height} order-3`}
            variants={fadeInScale}
            itemScope
            itemType="https://schema.org/Place"
          >
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-200 w-full h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center">
                <MapPin
                  className="w-5 h-5 mr-2"
                  style={{ color: colors.primary }}
                  aria-label="Location icon"
                />
                {t('contact.location.title')}
              </h3>
              <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-gray-300 mb-4 shrink-0" itemProp="hasMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.256635416602!2d47.51714927599731!3d-18.90686108233018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e00f0b7f79d%3A0x6e63e5a492a9c857!2s5%20Rue%20Pasteur%2C%20Antananarivo%2C%20Madagascar!5e0!3m2!1sen!2sfr!4v1690000000000!5m2!1sen!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Ikolo-Vina Consortium à Antananarivo, Madagascar"
                  aria-label="Carte Google Maps montrant notre localisation"
                ></iframe>
              </div>
              <div className="text-sm text-gray-600 space-y-2 flex-1 flex flex-col justify-center" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p
                  className="font-medium text-center text-base"
                  style={{ color: colors.primary }}
                >
                  {t('contact.location.area')}
                </p>
                <p className="text-center" itemProp="streetAddress">{t('contact.location.address')}</p>
                <p className="text-center" itemProp="addressLocality">{t('contact.location.city')}</p>
                <p className="text-center" itemProp="addressCountry">{t('contact.location.country')}</p>
                <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-200">
                  <Mail className="w-4 h-4" style={{ color: colors.secondary }} aria-label="Email icon" />
                  <span className="text-xs text-gray-500" itemProp="email">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: colors.secondary }} aria-label="Phone icon" />
                  <span className="text-xs text-gray-500" itemProp="telephone">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-200">
                  <i
                    className="fa-solid fa-clock"
                    style={{ color: colors.secondary }}
                    aria-label="Clock icon"
                  ></i>
                  <span className="text-xs text-gray-500">{t('contact.location.hours')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;