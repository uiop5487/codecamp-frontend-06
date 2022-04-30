import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { getAccessToken } from "../libraries/getAccessToken";

export const useAuth = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  useEffect(() => {
    async function aaa() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          alert("로그인을 먼저 해야함?");
          router.push("/logins/login");
        }
      }
    }
    aaa();
  }, []);
};
