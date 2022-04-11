import * as s from "./login.styles";
import { ILoginPresenter } from "./login.types";

const LoginPresenter = (props: ILoginPresenter) => {
  return (
    <s.Wrapper>
      <s.MoveBoardWrapper>
        <s.MoveBordListButton onClick={props.onClickMoveList}>
          나가기
        </s.MoveBordListButton>
      </s.MoveBoardWrapper>
      <div>
        <s.TitleWrapper>
          <s.Icon>盡人事待天命 </s.Icon>
          <s.Title>만리장성</s.Title>
        </s.TitleWrapper>
        <s.InputWrapper>
          <s.Input id="email" type="text" onChange={props.onChangeValues} />
          <s.Error>{props.error.email}</s.Error>
        </s.InputWrapper>
        <s.InputWrapper2>
          <s.Input id="password" type="text" onChange={props.onChangeValues} />
          <s.Error>{props.error.password}</s.Error>
        </s.InputWrapper2>
        <s.CheckButtonWrapper>
          <s.CheckButton>체크버튼</s.CheckButton>
          <s.CheckButtonText>로그인 상태 유지</s.CheckButtonText>
        </s.CheckButtonWrapper>
        <s.ButtonWrapper>
          <s.Button onClick={props.onClickLogin}>로그인하기</s.Button>
        </s.ButtonWrapper>
        <s.FooterWrapper>
          <s.FooterText>이메일 찾기</s.FooterText>
          <s.FooterText>비밀번호 찾기</s.FooterText>
          <s.FooterText>회원가입</s.FooterText>
        </s.FooterWrapper>
      </div>
    </s.Wrapper>
  );
};

export default LoginPresenter;
