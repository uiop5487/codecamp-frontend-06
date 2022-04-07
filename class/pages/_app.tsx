import "antd/dist/antd.css";
// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/componets/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
  // 업로드 설정을 하고 변수에 담아 따로 uri에 넣어준다.
  // 이후에 나오는 링크들을 담아 연결시켜줘야 하기 때문에 배열에 담아 넣어준다.
  const uploadlink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadlink]),
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
