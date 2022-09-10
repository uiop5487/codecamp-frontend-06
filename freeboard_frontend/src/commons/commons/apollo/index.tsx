import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { accessTokenState } from "../store";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../componets/commons/libraries/getAccessToken";

interface IAplloSettingProps {
  children: ReactNode;
}
const APOLLO_CACHE = new InMemoryCache();

export default function ApolloSetting(props: IAplloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => setAccessToken(newAccessToken));
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);

              operation.setContext({
                //
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         return fromPromise(
  //           getAccessToken().then((newAccessToken) => {
  //             setAccessToken(newAccessToken);
  //             operation.setContext({
  //               headers: {
  //                 …operation.getContext().headers,
  //                 Authorization: `Bearer ${newAccessToken}`,
  //               },
  //             });
  //           })
  //         ).flatMap(() => forward(operation));
  //       }
  //     }
  //   }
  // });

  const uploadlink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadlink]),
    cache: APOLLO_CACHE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
