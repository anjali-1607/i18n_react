import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

export default function App() {
    const { t, i18n } = useTranslation();

    const languages = [
        { code: "en", name: "English" },
        { code: "de", name: "German" },
    ];
    return (
        <>
            <div>
                <h1>{t("welcome")} Monster...</h1>
                {languages.map((language) => (
                    <button
                        style={{ marginRight: "1rem" }}
                        onClick={() => i18n.changeLanguage(language.code)}
                        key={language.code}>
                        {language.name}
                    </button>
                ))}
            </div>
        </>
    );
}
