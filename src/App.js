import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import StaticComponent from "./StaticComponent";
import { useLanguageContext } from "./language-context";

const App = () => {
  const { language } = useLanguageContext();
  return (
    <div>
      <h2>Current Language: {language}</h2>
      <p>Click button to change language</p>
      <LanguageSwitcher />
      <StaticComponent />
    </div>
  );
};

export default App;
