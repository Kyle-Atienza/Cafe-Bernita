import "../styles/globals.css";

import App from "next/app";

import Layout from "../components/layout";

import { RecoilRoot } from "recoil";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHCMS_URI,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ApolloProvider>
  );
}

/* MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}; */

export default MyApp;
