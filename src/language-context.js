import React, { useContext, useState } from "react";

// set the defaults
const LanguageContext = React.createContext();

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
