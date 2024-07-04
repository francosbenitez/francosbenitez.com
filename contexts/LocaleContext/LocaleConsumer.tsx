import { ReactNode, useContext, FC } from "react";
import LocaleContext from "./index";

interface LocaleConsumerProps {
  children: (context: any) => ReactNode;
}

const LocaleConsumer: FC<LocaleConsumerProps> = ({ children }) => {
  const context = useContext(LocaleContext);

  return <>{children(context)}</>;
};

export default LocaleConsumer;
