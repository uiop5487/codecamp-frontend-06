import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

export const withAuth =
  (Component: ComponentType) =>
  <P extends {}>(props: P) => {
    const router = useRouter();

    // 권한분기 로직 추가
    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인을 먼저 해야할듯?");
        router.push("/23-04-login-check");
      }
    }, []);

    return <Component {...props} />;
  };
