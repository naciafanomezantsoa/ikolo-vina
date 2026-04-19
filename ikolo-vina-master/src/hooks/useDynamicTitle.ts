// src/hooks/useDynamicTitle.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useDynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Ikolo Vina";

    switch (path) {
      case "/":
        title = "Accueil • Ikolo Vina";
        break;
      case "/digital":
        title = "Solutions Digitales • Ikolo Vina";
        break;
      case "/events":
        title = "Événementiel • Ikolo Vina";
        break;
      case "/wellness":
        title = "Bien-être • Ikolo Vina";
        break;
      case "/enterprise":
        title = "Entreprise • Ikolo Vina";
        break;
      case "/rse":
        title = "RSE • Ikolo Vina";
        break;
      case "/blog":
        title = "Blog • Ikolo Vina";
        break;
      case "/contact":
        title = "Contact • Ikolo Vina";
        break;
      case "/privacy":
        title = "Politique de Confidentialité • Ikolo Vina";
        break;
      case "/legal":
        title = "Mentions Légales • Ikolo Vina";
        break;
      default:
        title = "Ikolo Vina";
    }

    document.title = title;
  }, [location]);
}
