import { gql, useQuery } from "@apollo/client";
import withAuth from "../../src/commons/componets/commons/hocs/withAuth";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <div>
      <div>{data?.fetchUserLoggedIn.name}님 어서오세요</div>
      <div>여기는 마이페이지 입니다.</div>
    </div>
  );
}

export default withAuth(MyPage);
