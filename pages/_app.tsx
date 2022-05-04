import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { AuthProvider } from "@components/auth";
import { useRouter } from "next/router";
const ko = require("@lib/locale/ko.json");
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { ko },
    lng: "ko",
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false,
    },
  });

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const router = useRouter();
  const { deviceToken } = router.query;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>semu</title>
          <meta property="og:title" content="semu" key="title" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"
            key="viewport"
          />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
        </Head>
        <AuthProvider deviceToken={deviceToken}>
          <Component {...pageProps} />
        </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
