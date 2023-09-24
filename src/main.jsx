import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import global_en from "./../src/translations/en/global.json";
import global_bn from "./../src/translations/bn/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    bn: {
      global: global_bn,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
