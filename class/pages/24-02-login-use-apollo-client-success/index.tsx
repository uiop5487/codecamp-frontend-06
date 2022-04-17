// import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
import withAuth from "../../src/componets/commons/hocs/withAuth";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인을 먼저 해야할듯?");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{userInfo.name}님 환영합니다.</div>;
}

export default withAuth(LoginSuccessPage);
