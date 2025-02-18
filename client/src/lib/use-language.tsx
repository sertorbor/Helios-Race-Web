import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'nav.join': 'Join Us',
    // Add more translations as needed
  },
  es: {
    'nav.about': 'Acerca',
    'nav.team': 'Equipo',
    'nav.partners': 'Partners',
    'nav.contact': 'Contacto',
    'nav.join': 'Únete',
    // Add more translations as needed
  },
} as const;

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
