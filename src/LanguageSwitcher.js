import React, { useContext } from "react";

import { useLanguageContext } from "./language-context";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext();
  return (
    <button
      onClick={() =>
        language === "en" ? setLanguage("jp") : setLanguage("en")
      }
    >
      Switch Language (Current: {language})
    </button>
  );
};

export default LanguageSwitcher;
