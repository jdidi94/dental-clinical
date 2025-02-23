"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Translation } from "@/types/translation";

// Import translations
import en from "../locales/en.json";
import ar from "../locales/ar.json";

type TranslationMap = {
  en: Translation;
  ar: Translation;
};

type TranslationContextType = {
  t: Translation;
  currentLanguage: keyof TranslationMap;
  setLanguage: (lang: keyof TranslationMap) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

const translations: TranslationMap = { en, ar };

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] =
    useState<keyof TranslationMap>("en");
  const [t, setT] = useState<Translation>(translations.en);

  useEffect(() => {
    const savedLanguage =
      (localStorage.getItem("language") as keyof TranslationMap) || "en";
    setCurrentLanguage(savedLanguage);
    setT(translations[savedLanguage]);
  }, []);

  const setLanguage = (lang: keyof TranslationMap) => {
    localStorage.setItem("language", lang);
    setCurrentLanguage(lang);
    setT(translations[lang]);
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
