import { useRouter } from "next/router";
import { useState } from "react";
import LoginPresenter from "./login.presenter";

const LoginContainer = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
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

  const onClickLogin = () => {
    setError({
      email: values.email ? "" : "이메일을 입력해주세요",
      password: values.password ? "" : "비밀번호를 입력해주세요",
    });
    if (Object.values(values).every((el) => el)) {
      setError((prev) => ({
        ...prev,
        email: /^\w+@\w+\.\w+$/.test(values.email)
          ? ""
          : "이메일 형식이 올바르지 않습니다.",
      }));
    }
    if (Object.values(values).every((el) => el)) {
      alert("등록되었습니다.");
      router.push("/boards");
    }
  };

  const onClickMoveList = () => {
    router.push("/boards");
  };

  return (
    <LoginPresenter
      onChangeValues={onChangeValues}
      onClickLogin={onClickLogin}
      onClickMoveList={onClickMoveList}
      error={error}
    />
  );
};

export default LoginContainer;
