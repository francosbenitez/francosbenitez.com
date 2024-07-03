import { useContext } from "react";
import LocaleContext from "./index";

const LocaleConsumer = ({ children }) => {
  const context = useContext(LocaleContext);

  return children(context);
};

export default LocaleConsumer;
