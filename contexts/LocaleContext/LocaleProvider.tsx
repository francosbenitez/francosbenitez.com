import { useState } from "react";
import LocaleContext from "./index";

const LocaleProvider = ({ children }) => {
  const locale =
    typeof window !== "undefined"
      ? localStorage.getItem("locale") || "es"
      : "es";

  const [currentLocale, setCurrentLocale] = useState(locale);

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
