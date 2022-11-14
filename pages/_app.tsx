import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-theme";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import sk from "../lang/sk.json";
import { useRouter } from "next/router";

const messages = {
  en,
  sk,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    // @ts-ignore
    <IntlProvider locale={locale as string} messages={messages[locale]}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});

//export default MyApp;
