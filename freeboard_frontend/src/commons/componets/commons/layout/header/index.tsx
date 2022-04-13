import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { FETCH_USER_LOGGED_IN } from "./header.quety";
import * as s from "./header.styles";

const HeaderPage = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const onClickMovePage = () => {
    router.push(`/boards`);
  };

  const onClickMoveLoginPage = () => {
    router.push(`/logins/login`);
  };

  const onClickMoveSignupPage = () => {
    router.push(`/logins/signup`);
  };

  const onClickMoveMyPage = () => {
    router.push(`/mypage`);
  };

  return (
    <s.Wrapper>
      <s.HeaderTextWrapper>
        <s.HeaderImg src="/img/headericon.png" onClick={onClickMovePage} />
        <s.HeaderText onClick={onClickMovePage}>만리장성</s.HeaderText>
      </s.HeaderTextWrapper>
      {!accessToken ? (
        <s.SignupWrapper>
          <s.LoginButton onClick={onClickMoveLoginPage}>로그인</s.LoginButton>
          <s.SignupButton onClick={onClickMoveSignupPage}>
            회원가입
          </s.SignupButton>
        </s.SignupWrapper>
      ) : (
        <s.UserWrapper>
          <s.UserIcon src="/img/userimg.png" onClick={onClickMoveMyPage} />
          <s.UserName onClick={onClickMoveMyPage}>
            {data?.fetchUserLoggedIn.name}
          </s.UserName>
        </s.UserWrapper>
      )}
    </s.Wrapper>
  );
};

export default HeaderPage;
