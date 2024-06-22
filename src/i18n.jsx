import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                welcome: "Welcome",
            },
        },
        de: {
            translation: {
                welcome: "Willkommen",
            },
        },
    },
});

export default i18n;
