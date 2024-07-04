import { useContext } from "react";
import LocaleContext from "contexts/LocaleContext";

interface LocaleContextType {
  currentLocale: string;
  setCurrentLocale: (locale: string) => void;
}

const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);

  // https://kentcdodds.com/blog/how-to-use-react-context-effectively
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
};

export default useLocale;
