import { createContext, Dispatch, SetStateAction } from "react";

interface LocaleContextType {
  currentLocale: string;
  setCurrentLocale: Dispatch<SetStateAction<string>>;
}

const defaultValue: LocaleContextType = {
  currentLocale: "es", // Default locale value
  setCurrentLocale: () => {}, // Placeholder function
};

const LocaleContext = createContext<LocaleContextType>(defaultValue);

export default LocaleContext;
