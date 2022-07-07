import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import withReduxSaga from 'next-redux-saga';
import React from "react";
import { AuthProvider } from "@components/auth";
import { useRouter } from "next/router";
const ko = require("@lib/locale/ko.json");
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Layout from "../layout";
import Meta from "layout/Meta";
import { Provider } from 'react-redux';
import { wrapper, store } from '@store/index'

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

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [queryClient] = React.useState(() => new QueryClient());
  const router = useRouter();
  const { deviceToken } = router.query;

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}
          <Layout>
            <Meta />
            <AuthProvider deviceToken={deviceToken}>
              <Component {...pageProps} />
            </AuthProvider>
          </Layout>
        {/* </Hydrate> */}
      </QueryClientProvider>
    </Provider>
  );
};

export default wrapper.withRedux(withReduxSaga(MyApp));
