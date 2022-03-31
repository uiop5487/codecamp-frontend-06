import "antd/dist/antd.css";
// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/componets/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 셋팅은 여기서
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
