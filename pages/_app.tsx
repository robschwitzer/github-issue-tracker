import "styles/globals.css";
import Layout from "components/Layout";
import PageHeader from "components/PageHeader";
import HeaderContext, { IHeaderContext } from "context/headerContext";

import type { AppProps } from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [headerConfig, setHeaderConfig] = useState<IHeaderContext>({});

  return (
    <Layout>
      <HeaderContext.Provider value={{ ...headerConfig, setHeaderConfig }}>
        <PageHeader />
        <Component {...pageProps} />
      </HeaderContext.Provider>
    </Layout>
  );
}

export default MyApp;
