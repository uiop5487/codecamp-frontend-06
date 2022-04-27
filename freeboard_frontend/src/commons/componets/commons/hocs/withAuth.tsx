import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

// @ts-ignore
const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  // 권한분기 로직 추가
  useEffect(() => {
    if (!accessToken) {
      alert("로그인을 먼저 해야함?");
      router.push("/logins/login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
