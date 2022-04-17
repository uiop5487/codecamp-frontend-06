import * as s from "./signup.styles";
import { ISignupPresenter } from "./signup.types";

const SignupPresenter = (props: ISignupPresenter) => {
  return (
    <s.Wrapper>
      <s.MoveBoardWrapper>
        <s.MoveBordListButton onClick={props.onClickMoveList}>
          나가기
        </s.MoveBordListButton>
      </s.MoveBoardWrapper>
      <s.Title>회원가입</s.Title>
      <s.InputWrapper>
        <div>
          <s.InputTitle>이메일</s.InputTitle>
          <s.Input id="email" type="text" onChange={props.onChangeValues} />
          <s.Error id="email">{props.error.email}</s.Error>
        </div>
        <div>
          <s.InputTitle>이름</s.InputTitle>
          <s.Input id="name" type="text" onChange={props.onChangeValues} />
          <s.Error id="name">{props.error.name}</s.Error>
        </div>
        <div>
          <s.InputTitle>비밀번호</s.InputTitle>
          <s.Input
            id="password"
            type="password"
            onChange={props.onChangeValues}
          />
          <s.Error id="password">{props.error.password}</s.Error>
        </div>
        <div>
          <s.InputTitle>비밀번호 확인</s.InputTitle>
          <s.Input
            id="passwordcheck"
            type="text"
            onChange={props.onChangeValues}
          />
          <s.Error id="passwordcheck">{props.error.passwordcheck}</s.Error>
        </div>
      </s.InputWrapper>
      <s.Button onClick={props.onClickSignup}>회원가입</s.Button>
    </s.Wrapper>
  );
};

export default SignupPresenter;
