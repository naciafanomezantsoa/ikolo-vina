// src/data/offersData.ts
export interface Offer {
  id: number;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const offersData: Offer[] = [
  {
    id: 1,
    icon: "🌿",
    image: "/assets/offers/natureWellness.png",
    features: Array(7).fill(''), // 7 features pour l'offre 1
    benefits: Array(5).fill('')  // 5 benefits pour l'offre 1
  },
  {
    id: 2,
    icon: "💻",
    image: "/assets/offers/online.png",
    features: Array(6).fill(''), // 6 features pour l'offre 2
    benefits: Array(5).fill('')  // 5 benefits pour l'offre 2
  },
  {
    id: 3,
    icon: "🎯",
    image: "/assets/offers/events.png",
    features: Array(5).fill(''), // 5 features pour l'offre 3
    benefits: Array(5).fill('')  // 5 benefits pour l'offre 3
  },
  {
    id: 4,
    icon: "🚀",
    image: "/assets/offers/enterprise.png",
    features: Array(5).fill(''), // 5 features pour l'offre 4
    benefits: Array(5).fill('')  // 5 benefits pour l'offre 4
  },
  {
    id: 5,
    icon: "🌍",
    image: "/assets/offers/rse.png",
    features: Array(5).fill(''), // 5 features pour l'offre 5
    benefits: Array(5).fill('')  // 5 benefits pour l'offre 5
  }
];