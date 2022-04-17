import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";

interface IApolloSetting {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSetting) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // 1. 더이상 지원되지 않는 부분
  // if(process.browser){

  // } else {

  // }

  // 2. 두번째 방법!!
  // if (typeof window !== "undefined") {
  //   const myLocalstorageAccessToken = localStorage.getItem("accessToken");
  //   setAccessToken(myLocalstorageAccessToken || "");
  // } else {
  //   console.log("여기는 프론트엔드");
  // }

  // 3. 세번째 방법
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo);
  }, []);

  // 프리렌더링 시 문제되는 코드
  // const myLocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(myLocalstorageAccessToken || "");

  // 업로드 설정을 하고 변수에 담아 따로 uri에 넣어준다.
  // 이후에 나오는 링크들을 담아 연결시켜줘야 하기 때문에 배열에 담아 넣어준다.
  const uploadlink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    // headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadlink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
