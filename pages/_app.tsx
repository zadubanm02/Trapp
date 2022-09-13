import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});

//export default MyApp;
