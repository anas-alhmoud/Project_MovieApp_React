import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n.use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          tabOne: " Popular movies",
          tabTow: "Search for movies",
          tabThree: "Favorite Movies",
          serBot: "Search",
   
        },
      },
      ar: {
        translation: {
            tabOne: " أحدث الأفلام",
            tabTow: "البحث عن أفلام",
            tabThree: "المفضلة",
            serBot: "بحث",
     

        },
      },


    },
  })

export default i18n