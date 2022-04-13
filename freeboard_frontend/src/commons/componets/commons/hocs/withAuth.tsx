import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore
const withAuth = (Component) => (props) => {
  const router = useRouter();

  // 권한분기 로직 추가
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해야함?");
      router.push("/logins/login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
