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
          <s.Input type="text" {...props.register("email")} />
          <s.Error>{props.formState.errors.email?.message}</s.Error>
        </div>
        <div>
          <s.InputTitle>이름</s.InputTitle>
          <s.Input type="text" {...props.register("name")} />
          <s.Error>{props.formState.errors.email?.name}</s.Error>
        </div>
        <div>
          <s.InputTitle>비밀번호</s.InputTitle>
          <s.Input type="password" {...props.register("password")} />
          <s.Error>{props.formState.errors.email?.password}</s.Error>
        </div>
        <div>
          <s.InputTitle>비밀번호 확인</s.InputTitle>
          <s.Input type="password" {...props.register("passwordcheck")} />
          <s.Error>{props.formState.errors.email?.passwordcheck}</s.Error>
        </div>
      </s.InputWrapper>
      <s.Button onClick={props.onClickSignup}>회원가입</s.Button>
    </s.Wrapper>
  );
};

export default SignupPresenter;
