import { useState, useRef, useEffect } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageFloatingButton = () => {
  const { i18n } = useTranslation();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [lang, setLang] = useState<string>(i18n.language || "fr");
  const langRef = useRef<HTMLDivElement | null>(null);

  // Fermer le dropdown en cliquant ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setShowLangDropdown(false);
  };

  return (
    <div
      ref={langRef}
      className="fixed right-0 bottom-0 z-[9999] cursor-pointer"
    >
      {/* Bouton principal */}
      {/* Button rendered as a quarter-circle on desktop (clip-path) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowLangDropdown((prev) => !prev)}
      className="bg-gray-300 shadow-md p-3 hover:bg-gray-100 transition flex items-center justify-center relative overflow-hidden"
        aria-label="Choisir la langue"
        style={{
          width: 102,
          height: 102,
          // clip to a quarter circle anchored on the bottom-right corner
          clipPath: 'circle(60% at 100% 100%)',
        }}
      >
        {/* decorative border for the quarter-circle (blue) */}
        <span
          className="absolute right-0 bottom-0 w-[102px] h-[102px] border-2 border-blue-500 pointer-events-none z-10"
          style={{ clipPath: 'circle(60% at 100% 100%)' }}
        />

        {/* place the icon in the visible bottom-right quadrant */}
        <span className="absolute right-3 bottom-3 z-20">
          <AiOutlineGlobal className="h-6 w-6 text-special-1" />
        </span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {showLangDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full right-0 mb-0 mt-2 bg-white shadow-lg rounded-xl p-2 w-40 cursor-pointer flex flex-col gap-1 border translate-x-[-10%]"
          >
            <button
              onClick={() => changeLanguage("fr")}
              className={`px-3 py-1 text-sm text-left rounded-md cursor-pointer ${
                lang === "fr"
                  ? "bg-green-100 text-special-1 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 text-sm text-left rounded-md cursor-pointer ${
                lang === "en"
                  ? "bg-green-100 text-special-1 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              🇬🇧 English
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageFloatingButton;
