import "antd/dist/antd.css";
// import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../src/componets/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/componets/commons/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjyHVO5AF01UvwX5zu4LGUB53kvpKnedU",
  authDomain: "uiop-44c67.firebaseapp.com",
  projectId: "uiop-44c67",
  storageBucket: "uiop-44c67.appspot.com",
  messagingSenderId: "176551882169",
  appId: "1:176551882169:web:dd1a473b82165cdba11a68",
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 셋팅은 여기서

  return (
    <div>
      {/* <Head>  모든 페이지에서 맵을 다운받기 때문에 비효율적
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2cd360c3fd9a1af9fe28dba59f6c7fcd"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
