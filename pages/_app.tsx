import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/global.css";
import es from "lang/es.json";
import en from "lang/en.json";
import { IntlProvider } from "react-intl";
import LocaleProvider from "contexts/LocaleContext/LocaleProvider";
import LocaleConsumer from "contexts/LocaleContext/LocaleConsumer";

const App = ({ Component, pageProps }: AppProps) => {
  const messages: { [key: string]: any } = {
    es,
    en,
  };

  return (
    <>
      <LocaleProvider>
        <LocaleConsumer>
          {({ currentLocale }) => (
            <>
              <IntlProvider
                messages={messages[currentLocale]}
                locale={currentLocale}
                defaultLocale={currentLocale}
              >
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </IntlProvider>
            </>
          )}
        </LocaleConsumer>
      </LocaleProvider>
    </>
  );
};

export default App;
