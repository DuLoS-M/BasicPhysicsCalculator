import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-electron-fs-backend";
import path from "path";

const i18nPromise = i18n
    .use(backend)
    .use(initReactI18next)
    .init({
        lng: "en",
        backend: {
            loadPath: "./src/locales/{{ns}}/{{lng}}.json",
            addPath: "./src/locales/{{ns}}/{{lng}}.missing.json",
            contextBridgeApiKey: "api",
        },
        fallbackLng: "en",
        debug: true,
        ns: ["translation"],
        defaultNS: "translation",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ",",
        },
    });

export default i18n;
export { i18nPromise };
