// src/pages/Blog.tsx
import SEOMetadata from '@/components/SEOMetadata'; // Changé de SEO à SEOMetadata
import StructuredData from '@/components/StructuredData';
import { ORGANIZATION_SCHEMA } from '@/constants/schemas';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, X, ChevronLeft, ChevronRight, Target, Puzzle, Megaphone, Handshake, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import type { ComponentType, SVGProps } from 'react';
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

// Durées des intervalles (en millisecondes)
const HOVER_INTERVAL_MS = 3500; // délai sur hover avant de passer à la photo suivante
const MODAL_INTERVAL_MS = 6000; // délai d'auto-scroll dans la modal

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  images: string[];
  content: string;
}

// Schéma pour la page Blog
const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog Ikolo-Vina - Actualités & Conseils Madagascar",
  "description": "Blog professionnel sur le consulting, le développement durable, la RSE et l'événementiel à Madagascar. Actualités, conseils et retours d'expérience.",
  "url": "https://ikolo-vina.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Ikolo-Vina Consortium",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ikolo-vina.com/assets/logos/ikolo-vina.png"
    }
  },
  "keywords": "blog consulting Madagascar, actualités développement durable, conseils entreprise Madagascar, événementiel Madagascar, RSE Madagascar"
};

const Blog = () => {
  const { t } = useTranslation();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [hoverImageIndex, setHoverImageIndex] = useState<{ [key: number]: number }>({});
  const hoverIntervalRef = useRef<{ [key: number]: number }>({});

  // Charger les données des articles depuis les traductions
  const articlesData: Article[] = [
    {
      id: 1,
      title: t('blog.articles.0.title'),
      excerpt: t('blog.articles.0.excerpt'),
      category: t('blog.articles.0.category'),
      date: t('blog.articles.0.date'),
      readTime: t('blog.articles.0.readTime'),
      images: [
        "/assets/blog/SIAE 1.jpg",
        "/assets/blog/SIAE 2.jpg",
        "/assets/blog/SIAE 3.jpg",
        "/assets/blog/SIAE 4.jpg",
        "/assets/blog/SIAE 5.jpg",
        "/assets/blog/SIAE 6.jpg",
        "/assets/blog/SIAE 7.jpg",
        "/assets/blog/SIAE 8.jpg"
      ],
      content: t('blog.articles.0.content')
    },
    {
      id: 2,
      title: t('blog.articles.1.title'),
      excerpt: t('blog.articles.1.excerpt'),
      category: t('blog.articles.1.category'),
      date: t('blog.articles.1.date'),
      readTime: t('blog.articles.1.readTime'),
      images: [
        "/assets/blog/inim1.jpeg.jpg",
        "/assets/blog/inim2.JPG",
        "/assets/blog/inim3.JPG"
      ],
      content: t('blog.articles.1.content')
    },
    {
      id: 3,
      title: t('blog.articles.2.title'),
      excerpt: t('blog.articles.2.excerpt'),
      category: t('blog.articles.2.category'),
      date: t('blog.articles.2.date'),
      readTime: t('blog.articles.2.readTime'),
      images: [
        "/assets/blog/DT1.jpg",
        "/assets/blog/DT2.jpg",
        "/assets/blog/DT3.jpg",
        "/assets/blog/DT4.jpg"
      ],
      content: t('blog.articles.2.content')
    },
    {
      id: 4,
      title: t('blog.articles.3.title'),
      excerpt: t('blog.articles.3.excerpt'),
      category: t('blog.articles.3.category'),
      date: t('blog.articles.3.date'),
      readTime: t('blog.articles.3.readTime'),
      images: [
        "/assets/blog/kengo1.jpeg",
        "/assets/blog/kengo2.jpeg",
        "/assets/blog/kengo3.jpeg",
        "/assets/blog/kengo4.jpeg",
        "/assets/blog/kengo5.jpeg",
        "/assets/blog/kengo6.jpeg",
        "/assets/blog/kengo7.jpg"
      ],
      content: t('blog.articles.3.content')
    }
  ];

  // Créer les schémas d'articles pour le SEO
  const generateArticleSchemas = (articles: Article[]) => {
    return articles.map((article) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "image": article.images.map(img => `https://ikolo-vina.com${img}`),
      "datePublished": article.date,
      "dateModified": article.date,
      "author": {
        "@type": "Organization",
        "name": "Ikolo-Vina Consortium",
        "url": "https://ikolo-vina.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ikolo-Vina Consortium",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ikolo-vina.com/assets/logos/ikolo-vina.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://ikolo-vina.com/blog#article-${article.id}`
      },
      "keywords": article.category,
      "articleSection": "Consulting Madagascar",
      "timeRequired": article.readTime,
      "wordCount": article.content.length / 5 // Estimation
    }));
  };

  const articleSchemas = generateArticleSchemas(articlesData);

  const openModal = (article: Article) => {
    // Clear any hover intervals for this article to avoid continued background cycling
    if (hoverIntervalRef.current[article.id]) {
      clearInterval(hoverIntervalRef.current[article.id]);
      delete hoverIntervalRef.current[article.id];
    }
    // Also defensively clear any other lingering intervals
    Object.values(hoverIntervalRef.current).forEach(intervalId => {
      if (intervalId) clearInterval(intervalId);
    });
    hoverIntervalRef.current = {};

    setSelectedArticle(article);
    setCurrentImageIndex(0);
    setDirection(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (!selectedArticle) return;
    setDirection(1);
    setCurrentImageIndex((prev) => 
      prev === selectedArticle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedArticle) return;
    setDirection(-1);
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedArticle.images.length - 1 : prev - 1
    );
  };

  // Gestion du survol des articles
  const handleArticleHover = (articleId: number, article: Article) => {
    if (article.images.length > 1) {
      // Si un interval existe déjà pour cet article, ne pas en créer un autre.
      // Cela évite la multiplication des intervalles lorsque on entre plusieurs fois
      // (ou que des re-renders provoquent des créations supplémentaires).
      if (hoverIntervalRef.current[articleId]) return;

      // Démarrer le défilement automatique pour cet article
      hoverIntervalRef.current[articleId] = window.setInterval(() => {
        setHoverImageIndex(prev => ({
          ...prev,
          [articleId]: ((prev[articleId] || 0) + 1) % article.images.length
        }));
      }, HOVER_INTERVAL_MS); // Change d'image toutes les X ms
    }
  };

  const handleArticleLeave = (articleId: number) => {
    // Clear the interval(s) related to this article.
    const intervalId = hoverIntervalRef.current[articleId];
    if (intervalId) {
      clearInterval(intervalId);
      delete hoverIntervalRef.current[articleId];
    }
    // Defensive: if for any reason other intervals linger, clear them too.
    Object.keys(hoverIntervalRef.current).forEach(key => {
      const id = hoverIntervalRef.current[Number(key)];
      if (id) {
        clearInterval(id);
        delete hoverIntervalRef.current[Number(key)];
      }
    });
  };

  // Auto-scroll des images dans la modal
  useEffect(() => {
    if (!selectedArticle) return;
    const interval = window.setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) =>
        prev === selectedArticle.images.length - 1 ? 0 : prev + 1
      );
    }, MODAL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [selectedArticle]);

  // Nettoyer les intervalles à la destruction
  useEffect(() => {
    return () => {
      Object.values(hoverIntervalRef.current).forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <>
      {/* Intégration SEO Complète avec React 19 natif */}
      <SEOMetadata
        title="Blog Consulting Madagascar - Actualités, Conseils & Retours d'Expérience | Ikolo-Vina"
        description="Découvrez notre blog professionnel sur le consulting à Madagascar : actualités du développement durable, conseils RSE, événementiel et accompagnement d'entreprises. Retours d'expérience et analyses sectorielles."
        canonical="https://ikolo-vina.com/blog"
        ogImage="/assets/blog/banniere.png"
        ogType="website"
        twitterCard="summary_large_image"
        keywords="blog consulting Madagascar, actualités développement durable, conseils entreprise Madagascar, événementiel Madagascar, RSE Madagascar, articles consulting, retours d'expérience, analyse sectorielle"
        robots="index, follow, max-image-preview:large, max-snippet:-1"
        schema={JSON.stringify(BLOG_SCHEMA)} // Schema intégré directement
      />
      
      {/* Structured Data (JSON-LD) */}
      <StructuredData data={ORGANIZATION_SCHEMA} />
      {articleSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      
      {/* Contenu de la page */}
      <div className="min-h-screen bg-linear-to-br from-white via-gray-50/50 to-special-4/10">
        {/* Section Hero */}
        <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent z-20"></div>
          <img
            src="/assets/blog/banniere.png"
            alt="Blog Ikolo-Vina - Actualités et conseils consulting Madagascar"
            className="w-full h-full object-cover absolute inset-0 blur-[1px]"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="container mx-auto px-4 relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                {t('blog.hero.title')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed font-light max-w-3xl mx-auto">
                {t('blog.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Articles */}
        <section className="py-5 lg:pt-5 pb-15 relative">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-50/20 pointer-events-none"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {articlesData.map((article) => (
                <motion.div 
                  key={article.id} 
                  variants={fadeInUp}
                  className="group"
                  onMouseEnter={() => handleArticleHover(article.id, article)}
                  onMouseLeave={() => handleArticleLeave(article.id)}
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <meta itemProp="datePublished" content={article.date} />
                  <meta itemProp="dateModified" content={article.date} />
                  <meta itemProp="headline" content={article.title} />
                  
                  <Card 
                    className="hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/80 backdrop-blur-sm border border-gray-100/50 overflow-hidden hover:border-special-1/20 h-full flex flex-col"
                    onClick={() => openModal(article)}
                    itemProp="mainEntityOfPage"
                  >
                    <div className="relative overflow-hidden h-64 lg:h-80">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.img 
                          key={hoverImageIndex[article.id] || 0}
                          src={article.images[hoverImageIndex[article.id] || 0]}
                          alt={`${article.title} - Article consulting Madagascar`}
                          className="w-full h-full object-cover absolute inset-0"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3 }}
                          loading="lazy"
                          width="600"
                          height="320"
                          itemProp="image"
                        />
                      </AnimatePresence>
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="bg-special-1/95 backdrop-blur-sm text-white border-none shadow-lg px-3 py-1.5 text-xs font-semibold">
                          {article.category}
                        </Badge>
                      </div>

                      {/* Image counter */}
                      {article.images.length > 1 && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                            {((hoverImageIndex[article.id] || 0) + 1)} / {article.images.length}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6 lg:p-8 flex-1 flex flex-col">
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar className="h-4 w-4 mr-2 text-special-1" />
                        <span className="mr-4 font-medium" itemProp="datePublished">{article.date}</span>
                        <Clock className="h-4 w-4 mr-2 text-special-1" />
                        <span className="font-medium" itemProp="timeRequired">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-special-1 transition-colors duration-300 leading-tight min-h-14 flex items-start" itemProp="headline">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2 text-base font-light min-h-12 flex items-start" itemProp="description">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-special-1/30 transition-colors duration-300 mt-auto">
                        <span className="text-special-1 font-semibold group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                          {t('blog.readMore')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                        <div className="flex space-x-1">
                          {article.images.slice(0, 3).map((_, index) => (
                            <div 
                              key={index}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                (hoverImageIndex[article.id] || 0) === index 
                                  ? 'bg-special-1' 
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                          {article.images.length > 3 && (
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Modal Article */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white rounded-2xl max-w-4xl max-h-[95vh] overflow-hidden flex flex-col w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="datePublished" content={selectedArticle.date} />
                <meta itemProp="dateModified" content={selectedArticle.date} />
                <meta itemProp="headline" content={selectedArticle.title} />
                
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-linear-to-r from-white to-gray-50/50">
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-special-1 text-white border-none shadow-lg px-4 py-2">
                      {selectedArticle.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span itemProp="datePublished">{selectedArticle.date}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeModal}
                    className="hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Fermer l'article"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  {/* Carousel d'images */}
                  <div className="relative h-80 lg:h-96 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.img
                        key={currentImageIndex}
                        src={selectedArticle.images[currentImageIndex]}
                        alt={`${selectedArticle.title} - Image ${currentImageIndex + 1} - Consulting Madagascar`}
                        className="w-full h-full object-cover absolute inset-0"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        loading="lazy"
                        width="800"
                        height="384"
                        itemProp="image"
                      />
                    </AnimatePresence>

                    {/* Navigation arrows */}
                    {selectedArticle.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                          aria-label="Image précédente"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                          aria-label="Image suivante"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}

                    {/* Indicators */}
                    {selectedArticle.images.length > 1 && (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                        {selectedArticle.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${
                              index === currentImageIndex 
                                ? 'bg-white scale-125' 
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                            onClick={() => {
                              setDirection(index > currentImageIndex ? 1 : -1);
                              setCurrentImageIndex(index);
                            }}
                            aria-label={`Aller à l'image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Image counter */}
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
                      {currentImageIndex + 1} / {selectedArticle.images.length}
                    </div>
                  </div>

                  {/* Contenu de l'article */}
                  <div className="p-8 lg:p-12">
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight tracking-tight" itemProp="headline">
                        {selectedArticle.title}
                      </h2>

                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" itemProp="articleBody">
                        {selectedArticle.content.split('\n\n').map((paragraph, pIndex) => (
                          <motion.p 
                            key={pIndex} 
                            className="mb-6 text-lg leading-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: pIndex * 0.1 }}
                          >
                            {paragraph.split('**').map((text, i) => {
                              const renderTextWithIcons = (input: string, keyBase: string | number) => {
                                const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
                                  '🎯': Target,
                                  '🧩': Puzzle,
                                  '📣': Megaphone,
                                  '🤝': Handshake,
                                  '🌿': Leaf,
                                  '🌱': Leaf
                                };
                                const escapeRegExp = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
                                const keys = Object.keys(ICON_MAP).map(escapeRegExp);
                                const re = new RegExp(`(${keys.join('|')})`, 'g');
                                const parts = input.split(re);
                                return parts.map((part, idx) => {
                                  if (ICON_MAP[part]) {
                                    const Icon = ICON_MAP[part];
                                    return <Icon key={`${keyBase}-icon-${idx}`} className="inline mr-3 h-5 w-5 text-special-1 align-text-bottom" />;
                                  }
                                  return part;
                                });
                              };

                              return i % 2 === 1 ? (
                                <strong key={i} className="text-special-1 font-semibold bg-linear-to-r from-special-1 to-special-2 bg-clip-text text-transparent">
                                  {renderTextWithIcons(text, `${pIndex}-${i}`)}
                                </strong>
                              ) : (
                                <span key={i}>{renderTextWithIcons(text, `${pIndex}-${i}`)}</span>
                              );
                            })}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Blog;