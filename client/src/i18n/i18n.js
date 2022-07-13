import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

i18n

  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(
    {
      fallbackLng: "en",
      whitelist: ["en", "bg", "ru"],

      interpolation: {
        escapeValue: false // react already safes from xss
      }
    }
  );

export default i18n;