import React from "react";
import { useLanguageContext } from "./language-context";
const StaticComponent = () => {
  console.log("static comp");
  const { language } = useLanguageContext();
  return <div>Current language in Static Comp: ${language}</div>;
};

export default React.memo(StaticComponent);
