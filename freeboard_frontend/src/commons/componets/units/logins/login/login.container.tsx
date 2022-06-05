import { useRouter } from "next/router";
import LoginPresenter from "./login.presenter";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { LOGIN_USER } from "./login.qurey";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginData } from "./login.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 맞지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수입력입니다."),
});

const LoginContainer = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [LoginUser] = useMutation(LOGIN_USER);
  const { register, formState, handleSubmit } = useForm<ILoginData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();

  const onClickLogin = async (data: ILoginData) => {
    console.log(data);
    try {
      const result = await LoginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      alert("로그인 성공!");
      router.push("/products");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickMoveList = () => {
    router.push("/boards");
  };

  return (
    <LoginPresenter
      onClickLogin={onClickLogin}
      onClickMoveList={onClickMoveList}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
