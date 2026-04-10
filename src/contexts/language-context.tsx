import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "cs" | "en";

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "cs",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem("lang") as Lang) ?? "cs",
  );

  const toggle = () => {
    const next: Lang = lang === "cs" ? "en" : "cs";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
