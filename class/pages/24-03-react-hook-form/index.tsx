// import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm();

  // 버튼을 한번 누르면 ture로 변경
  // formState.isSubmitting;

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("!!리렌더링 췍!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <input type="text" {...register("contents")} />
      <br />
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}
