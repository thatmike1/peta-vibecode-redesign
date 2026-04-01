import V1 from "@/pages/v1-original";
import { LanguageProvider } from "@/contexts/language-context";

export default function App() {
  return (
    <LanguageProvider>
      <V1 />
    </LanguageProvider>
  );
}
