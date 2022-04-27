import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export const useAuth = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  console.log(accessToken);
  // 권한분기 로직 추가
  useEffect(() => {
    if (!accessToken) {
      alert("로그인을 먼저 해야할듯?");
      router.push("/logins/login");
    }
  }, []);
};
