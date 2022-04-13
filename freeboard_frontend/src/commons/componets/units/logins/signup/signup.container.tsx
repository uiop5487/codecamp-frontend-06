import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_USER } from "./signup.mutaition";
import SignupPresenter from "./signup.presenter";

const SignupContainer = () => {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    passwordcheck: "",
  });

  const [error, setError] = useState({
    email: "",
    name: "",
    password: "",
    passwordcheck: "",
  });

  const onChangeValues = (event: any) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
    if (!/^\w+@\w+\.\w+$/.test(values.email)) {
      setError((prev) => ({
        ...prev,
        email: "이메일 형식이 올바르지 않습니다.",
      }));
      return;
    } else {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }
    if (event.target.value) {
      setError((prev) => ({ ...prev, [event.target.id]: "" }));
    }
  };

  const onClickMoveList = () => {
    router.push("/boards");
  };

  const onClickSignup = async () => {
    setError({
      email: values.email ? "" : "이메일을 입력해주세요",
      name: values.name ? "" : "이름을 입력해주세요",
      password: values.password ? "" : "비밀번호를 입력해주세요",
      passwordcheck: values.passwordcheck ? "" : "비밀번호 확인을 입력해주세요",
    });
    if (
      Object.values(values).every((el) => el) &&
      !/^\w+@\w+\.\w+$/.test(values.email)
    ) {
      setError((prev) => ({
        ...prev,
        email: "이메일 형식이 올바르지 않습니다.",
      }));
      return;
    }
    if (values.password !== values.passwordcheck) {
      setError((prev) => ({
        ...prev,
        passwordcheck: "비밀번호가 같지 않습니다.",
      }));
      return;
    }
    if (Object.values(values).every((el) => el)) {
      await createUser({
        variables: {
          createUserInput: {
            email: values.email,
            password: values.password,
            name: values.name,
          },
        },
      });
      alert("등록되었습니다.");
      router.push("/logins/login");
    }
  };

  return (
    <SignupPresenter
      onChangeValues={onChangeValues}
      error={error}
      onClickSignup={onClickSignup}
      onClickMoveList={onClickMoveList}
    />
  );
};

export default SignupContainer;
