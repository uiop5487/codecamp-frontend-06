import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default function LoginPage() {
  // const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEamil = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.login;
    setAccessToken(accessToken);
    console.log(accessToken);
    alert("로그인에 성공하였습니다.");
    router.push("/22-02-login-success");
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEamil} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
