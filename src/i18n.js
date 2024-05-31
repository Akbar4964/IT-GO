import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzbeklanguage from "./languages/uzbeklanguage.json";
import russianlanguage from "./languages/russianlanguage.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultLanguage: "uz",
    lang: language,
    debug: true,
    resources: {
      uz: { translation: uzbeklanguage },
      ru: { translation: russianlanguage },
    },
  });

export default i18n;
