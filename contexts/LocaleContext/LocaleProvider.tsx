import { ReactNode, useState, FC } from "react";
import LocaleContext from "./index";

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleProvider: FC<LocaleProviderProps> = ({ children }) => {
  const locale =
    typeof window !== "undefined"
      ? localStorage.getItem("locale") || "es"
      : "es";

  const [currentLocale, setCurrentLocale] = useState<string>(locale);

  return (
    <LocaleContext.Provider
      value={{
        currentLocale,
        setCurrentLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
