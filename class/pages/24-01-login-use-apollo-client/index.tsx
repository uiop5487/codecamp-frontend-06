import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      name
    }
  }
`;

export default function LoginPage() {
  // const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

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
    // 1. 로그인 하기
    const result = await loginUser({
      variables: {
        ...values,
      },
    });
    const accessToken = result;
    console.log(accessToken);

    // 2. 유저정보 받아오기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        // 특정 http를 보낼때 헤더나 추가로 입력하고 싶은 부분을 context라고 한다.
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data;
    console.log(userInfo);

    // 3. 글로벌스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    // 로컬 스토리지에 들어가는 것은 문자열이나 숫자타입이다.
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // 4. 로그인 성공페이지 이동하기
    alert("로그인에 성공하였습니다.");
    router.push("24-02-login-use-apollo-client-success");
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
