import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useAuth } from "../../src/commons/componets/commons/hooks/useAuth";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MyPage() {
  useAuth();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  const onClickMoveBasket = () => {
    router.push(`/mypage/basket`);
  };

  return (
    <div>
      <div>{data?.fetchUserLoggedIn.name}님 어서오세요</div>
      <div>여기는 마이페이지 입니다.</div>
      <button onClick={onClickMoveBasket}>장바구니 ㄱ</button>
    </div>
  );
}

export default MyPage;
