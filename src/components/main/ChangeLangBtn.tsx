import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FloatButton } from "antd";

export default function ChangeLangBtn() {
    const [language, setLanguage] = useState("en");
    const { i18n, ready } = useTranslation();
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        document.documentElement.lang = language;
        if (ready) {
            i18n.changeLanguage(language);
        }
    }, [language]);

    const nextLanguage = language === "en" ? "es" : "en";
    const description = nextLanguage.toUpperCase();
    const tooltip =
        nextLanguage === "en"
            ? "Change language to English"
            : "Cambiar idioma a Español";

    return (
        <FloatButton
            onClick={() => {
                setLanguage(nextLanguage);
            }}
            shape="square"
            description={description}
            tooltip={tooltip}
        />
    );
}
