import React, { useEffect, useState, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FloatButton } from "antd";

export default function ChangeLangBtn() {
    const [language, setLanguage] = useState("en");
    const { i18n, ready } = useTranslation();

    function switchLanguage(nextLanguage: string) {
        setLanguage(nextLanguage);
        document.documentElement.lang = nextLanguage;
        if (ready) {
            i18n.changeLanguage(nextLanguage);
        }
    }

    const nextLanguage = language === "en" ? "es" : "en";
    const description = nextLanguage.toUpperCase();
    const tooltip =
        nextLanguage === "en"
            ? "Change language to English"
            : "Cambiar idioma a Español";

    return (
        <FloatButton
            onClick={() => {
                switchLanguage(nextLanguage);
            }}
            shape="square"
            description={description}
            tooltip={tooltip}
        />
    );
}
