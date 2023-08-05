import React from "react";
import ReactDOM from "react-dom";
import { LanguageContextProvider } from "./language-context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>,
  rootElement
);
