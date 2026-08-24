import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { CounterContextProvider } from "./context/CounterContext.jsx";
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2 - criar provider */}
    <CounterContextProvider>
      {/** 5 - criando contexto mais complexo */}
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
);
