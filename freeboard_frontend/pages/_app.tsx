import "antd/dist/antd.css";
import "../styles/globals.css";
import { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../src/commons/componets/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { RecoilRoot } from "recoil";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ApolloSetting from "../src/commons/commons/apollo";
import Head from "next/head";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClK27rXKd2w_jOgcW6aG_vVSAcrZr0DTI",
  authDomain: "uiop-freeboard.firebaseapp.com",
  projectId: "uiop-freeboard",
  storageBucket: "uiop-freeboard.appspot.com",
  messagingSenderId: "884110789609",
  appId: "1:884110789609:web:f568f991fd9e8880199978",
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 셋팅은 여기서

  return (
    <>
      <Head>
        <link rel="icon" href="/img/icon.webp" />
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
