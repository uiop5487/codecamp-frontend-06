// import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Inputs01 from "../../src/componets/commons/buttons/01";
import Button01 from "../../src/componets/commons/inputs/01";
import styled from "@emotion/styled";

// validation.ts 라는 파일로 보관
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 맞지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수입력입니다.")
    .min(4, "비밀번호는 최소 4자리 이상입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력 가능합니다."),
});

interface IFormValues {
  email?: string;
  password?: string;
}

const Errors = styled.div`
  color: red;
`;

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("!!리렌더링 췍!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일: <input type="text" {...register("email")} /> */}
      이메일: <Inputs01 type="text" register={register("email")} />
      <br />
      <Errors>{formState.errors.email?.message}</Errors>
      <br />
      {/* 비밀번호: <input type="text" {...register("password")} /> */}
      비밀번호: <Inputs01 type="password" register={register("password")} />
      <br />
      <Errors>{formState.errors.password?.message}</Errors>
      <br />
      <Button01 isActive={formState.isValid} title="로그인 하기" />
      {/* <LoginButton isActive={formState.isValid}>로그인하기</LoginButton> */}
    </form>
  );
}
