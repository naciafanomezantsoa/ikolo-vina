// src/components/offers/OffersCarousel.tsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { offersData, type Offer } from "@/data/offersData";
import { OfferModal } from "./OfferModal";
import { useTranslation } from "react-i18next";

export const OffersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === offersData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? offersData.length - 1 : prevIndex - 1
    );
  };

  const handleOfferClick = (offer: Offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  // Sur mobile, on montre seulement l'offre centrale
  const getVisibleOffers = () => {
    if (window.innerWidth < 768) {
      // Mobile: seulement l'offre actuelle
      return [offersData[currentIndex]];
    } else {
      // Desktop: les 3 offres (gauche, centre, droite)
      const visible = [];
      for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + offersData.length) % offersData.length;
        visible.push(offersData[index]);
      }
      return visible;
    }
  };

  const visibleOffers = getVisibleOffers();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <div className="relative">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-6 lg:mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="border-special-1 text-special-1 hover:bg-special-1/10 h-8 w-8 lg:h-10 lg:w-10"
          >
            <ChevronLeft className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
          
          <div className="flex gap-1 lg:gap-2">
            {offersData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-special-1' 
                    : 'bg-gray-300 hover:bg-special-1/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="border-special-1 text-special-1 hover:bg-special-1/10 h-8 w-8 lg:h-10 lg:w-10"
          >
            <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
        </div>

        {/* Carrousel */}
        <div className="flex justify-center">
          <div className={`${isMobile ? 'w-full max-w-sm' : 'grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full'}`}>
            {visibleOffers.map((offer, index) => {
              const position = isMobile ? 0 : index - 1; // Sur mobile, toujours au centre
              const isCenter = isMobile ? true : position === 0;

              return (
                <Card
                  key={offer.id}
                  className={`
                    cursor-pointer transition-all duration-500 transform h-full
                    ${isMobile 
                      ? 'w-full scale-100 shadow-lg border-special-1/30' 
                      : isCenter 
                        ? 'scale-105 shadow-2xl z-10 border-special-1/50' 
                        : 'scale-95 opacity-80 blur-sm hover:blur-0'
                    }
                    hover:scale-105 lg:hover:scale-110 hover:shadow-xl border-2
                  `}
                  onClick={() => handleOfferClick(offer)}
                >
                  <CardContent className="p-4 lg:p-6 text-center h-full flex flex-col">
                    {/* Image de l'offre */}
                    <div className="aspect-video mb-3 lg:mb-4 rounded-lg overflow-hidden bg-linear-to-br from-special-1/20 to-special-2/20 flex items-center justify-center">
                      {offer.image ? (
                        <img 
                          src={offer.image} 
                          alt={t(`offers.${offer.id}.title`)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-3xl lg:text-4xl">{offer.icon}</span>
                      )}
                    </div>
                    
                    {/* Titre */}
                    <h3 className={`
                      text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 transition-colors
                      ${isCenter ? 'text-special-1' : 'text-gray-700'}
                    `}>
                      {t(`offers.${offer.id}.title`)}
                    </h3>
                    
                    {/* Description courte */}
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 grow">
                      {t(`offers.${offer.id}.shortDescription`)}
                    </p>

                    {/* Bouton */}
                    <Button
                      variant={isCenter ? "default" : "outline"}
                      size={isMobile ? "sm" : "default"}
                      className={`
                        w-full transition-all duration-300 mt-auto text-sm lg:text-base
                        ${isCenter 
                          ? 'bg-special-1 hover:bg-special-2 text-white' 
                          : 'border-special-1 text-special-1 hover:bg-special-1/10'
                        }
                      `}
                    >
                      {t('offers.learnMore')}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <OfferModal 
        offer={selectedOffer}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};