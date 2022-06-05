import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_USER } from "./signup.mutaition";
import SignupPresenter from "./signup.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignupData } from "./signup.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 맞지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  name: yup.string().required("이메일은 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수입력입니다."),
  passwordcheck: yup
    .string()
    .required("비밀번호는 필수입력입니다.")
    .oneOf([yup.ref("password"), null], "비밀번호와 일치하지 않습니다."),
});

const SignupContainer = () => {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, formState, handleSubmit } = useForm<ISignupData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickMoveList = () => {
    router.push("/boards");
  };

  const onClickSignup = async (data: ISignupData) => {
    console.log(data);
    await createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
    alert("등록되었습니다.");
    router.push("/logins/login");
  };

  return (
    <SignupPresenter
      onClickSignup={onClickSignup}
      onClickMoveList={onClickMoveList}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignupContainer;
