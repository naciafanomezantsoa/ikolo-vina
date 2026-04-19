import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// 🔹 Vérifie si une langue est déjà sauvegardée dans le localStorage
const savedLanguage = localStorage.getItem("language") || "fr";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: savedLanguage, // Définit la langue sauvegardée ou "fr" par défaut
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

// 🔹 Écoute les changements de langue et les sauvegarde
i18n.on("languageChanged", (lang) => {
  localStorage.setItem("language", lang);
});

export default i18n;
