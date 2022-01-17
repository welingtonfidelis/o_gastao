import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBr from "./locales/pt_br.json";

i18n
  .use(initReactI18next)
  .init({
    interpolation: {
    },

    resources: {
      ptBr: {
        common: ptBr,
      },
      // en: {
      //   common: en.en,
      // },
    },

    lng: "ptBr",
    fallbackLng: "ptBr",

    ns: ["common"],

    defaultNS: "common",
  });

export default i18n;