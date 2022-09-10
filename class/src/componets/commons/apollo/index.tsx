import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";
import { WebSocketLink } from "apollo-link-ws";

interface IApolloSetting {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSetting) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [, setUserInfo] = useRecoilState(userInfoState);

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
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급 받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => setAccessToken(newAccessToken));
  }, []);

  // 프리렌더링 시 문제되는 코드
  // const myLocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(myLocalstorageAccessToken || "");

  // 방금 실패한 쿼리 operation, 얘를 전송해줘 forward
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQLErrors) {
      // 에러를 한개씩 반복문 돌린다.
      for (const err of graphQLErrors) {
        // 해당 에러가 토큰만료인지를 확인(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 재발급한 액세스토큰 글로벌에 저장
            setAccessToken(newAccessToken);

            // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청
            // 방금 요청한 쿼리에 헤더를 바꿔치기 할 수 있다.
            operation.setContext({
              //
              headers: {
                // 기존 헤더를 스프레드로 복사해주고 액세스 토큰만 변경을 해준다.
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            // 변경된 오퍼레이션 재요청
            return forward(operation);
          });
        }
      }
    }
  });

  // 업로드 설정을 하고 변수에 담아 따로 uri에 넣어준다.
  // 이후에 나오는 링크들을 담아 연결시켜줘야 하기 때문에 배열에 담아 넣어준다.
  const uploadlink = createUploadLink({
    uri: "http://localhost:4000/graphql",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBhYWEuY29tIiwic3ViIjoiMjRlOWNlY2EtNTllNy00MmE4LTgyM2YtNjVjNDVjNGM0YzNmIiwiaWF0IjoxNjYyNjIwMjUxLCJleHAiOjE2NjI2MzQ2NTF9.aogZTlHkK7tBkYTRXBNrEWEglW2thuqmhDVeF1b5Tf8`,
    },
    // 중요한 정보를 포함 여부
    credentials: "include",
  });

  // const wsLink = new WebSocketLink({
  //   uri: `ws://localhost:4000/graphql/`,
  //   options: {
  //     reconnect: true,
  //   },
  // });

  const client = new ApolloClient({
    // 에러링크도 추가
    link: ApolloLink.from([errorLink, uploadlink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
