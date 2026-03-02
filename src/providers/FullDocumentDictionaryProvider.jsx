/*
  Keeps track of all all documents existing within Documents or Trash (if any)
*/

import { createContext, useContext, useState, useEffect } from "react";

const FullDocumentDictionaryContext = createContext();

export function FullDocumentDictionaryProvider({ children }) {

  const [FullDocumentDictionary, setFullDocumentDictionary] = useState(() => {
    try {

      const storedDocsRaw = localStorage.getItem("Documents");
      const storedDocs = storedDocsRaw ? JSON.parse(storedDocsRaw) : [];


      const stored = JSON.parse(localStorage.getItem("FullDocumentDictionary"));
      return stored && typeof stored === "object"
          ? {
              //"Documents": Array.isArray(stored["Documents"]) ? stored["Documents"] : [],

              "Documents": [
                // Start with the existing FullDocumentDictionary Documents
                ...(Array.isArray(stored["Documents"]) ? stored["Documents"] : []),
                // Then add any documents from the separate Documents key
                ...(Array.isArray(storedDocs) ? storedDocs : [])
              ],
              "Trash": Array.isArray(stored["Trash"]) ? stored["Trash"] : [],
          }
          : { "Documents": [], "Trash": [] };
    } catch {
      return { "Documents": [], "Trash": [] };
    }
  });

  useEffect(() => {
    localStorage.setItem("FullDocumentDictionary", JSON.stringify(FullDocumentDictionary));
  }, [FullDocumentDictionary]);


  return (
    <FullDocumentDictionaryContext.Provider value={{ FullDocumentDictionary, setFullDocumentDictionary }}>
      {children}
    </FullDocumentDictionaryContext.Provider>
  );
}

export function useFullDocumentDictionary() {
  return useContext(FullDocumentDictionaryContext);
}

