import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/materialConfig/theme";
import createEmotionCache from "../src/materialConfig/createEmotionCache";
import Layout from "../src/components/layout/Layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <ScopedCssBaseline>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScopedCssBaseline>
      </ThemeProvider>
    </CacheProvider>
  );
}
