"use client";
import React, { createContext, useContext, useState } from "react";

type Lang = "vi" | "en";
interface LanguageContextProps {
  lang: Lang;
  setLanguageFunction: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("vi");
  const setLanguageFunction = (value: Lang) => {
    console.log(value);
    setLang(value);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLanguageFunction }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
