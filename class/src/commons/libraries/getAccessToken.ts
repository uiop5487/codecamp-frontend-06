import { GraphQLClient, gql } from "graphql-request";

const RESTOER_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      "http://localhost:4000/graphql",
      // 중요한 정보를 포함 여부
      { credentials: "include" }
    );

    // 리절트안에 바로 토큰이 들어가 있다
    const result = await graphQLClient.request(RESTOER_ACCESS_TOKEN);

    const newAccessToken = result.data;

    return newAccessToken;
  } catch (error: any) {
    console.log(error.message);
  }
}
