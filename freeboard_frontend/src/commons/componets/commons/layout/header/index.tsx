import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 62px 360px 58px 360px;
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 14px;
  border-radius: 18px;
  cursor: pointer;
`;

const HeaderText = styled.div`
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SignupButton = styled.div`
  width: 92px;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  background-color: darkred;
  text-align: center;
  line-height: 44px;
  border-radius: 14px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #944343;
  }
`;

const LoginButton = styled.div`
  line-height: 44px;
  padding-right: 20px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

const HeaderPage = () => {
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

  return (
    <Wrapper>
      <HeaderTextWrapper>
        <HeaderImg src="/img/headericon.png" onClick={onClickMovePage} />
        <HeaderText onClick={onClickMovePage}>만리장성</HeaderText>
      </HeaderTextWrapper>
      <SignupWrapper>
        <LoginButton onClick={onClickMoveLoginPage}>로그인</LoginButton>
        <SignupButton onClick={onClickMoveSignupPage}>회원가입</SignupButton>
      </SignupWrapper>
    </Wrapper>
  );
};

export default HeaderPage;
