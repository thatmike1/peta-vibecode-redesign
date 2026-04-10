import { useLanguage } from "@/contexts/language-context";
import * as cs from "@/data/content";
import * as en from "@/data/content.en";

export function useContent() {
  const { lang } = useLanguage();
  return lang === "en" ? en : cs;
}
