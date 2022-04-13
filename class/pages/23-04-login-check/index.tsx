import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChangeValues = (event: any) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        ...values,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    console.log(accessToken);
    alert("로그인에 성공하였습니다.");
    router.push("/23-05-login-check-success");
  };

  return (
    <>
      이메일: <input id="email" type="text" onChange={onChangeValues} />
      <br />
      비밀번호:
      <input id="password" type="password" onChange={onChangeValues} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
