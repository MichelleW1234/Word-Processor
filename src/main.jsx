import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import {ActiveDocumentProvider} from "./providers/ActiveDocumentProvider.jsx";
import { FullDocumentDictionaryProvider } from "./providers/FullDocumentDictionaryProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FullDocumentDictionaryProvider><ActiveDocumentProvider>
      <App />
    </ActiveDocumentProvider></FullDocumentDictionaryProvider>
  </StrictMode>,
)
