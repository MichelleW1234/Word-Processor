import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import {DocumentsProvider} from "./providers/DocumentsProvider.jsx";
import {TrashProvider} from "./providers/TrashProvider.jsx";
import {ActiveDocumentProvider} from "./providers/ActiveDocumentProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DocumentsProvider> <TrashProvider><ActiveDocumentProvider>
      <App />
    </ActiveDocumentProvider></TrashProvider> </DocumentsProvider>
  </StrictMode>,
)
