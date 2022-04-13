import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { accessTokenState } from "../store";

interface IAplloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IAplloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const myLocalstorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(myLocalstorageAccessToken || "");
  }, []);

  const uploadlink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadlink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
