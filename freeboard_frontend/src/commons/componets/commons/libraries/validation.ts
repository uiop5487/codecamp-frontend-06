import * as yup from "yup";

// 프리보드 yup 스키마
export const BoardCreateSchema = yup.object({
  writer: yup.string().required("작성자는 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
  title: yup.string().required("제목은 필수 입력 사항입니다."),
  contents: yup.string().required("내용은 필수 입력 사항입니다."),
});

export const BoardEditSchema = yup.object({
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
});

// 중고마켓 yup 스키마
export const ProductCreateSchema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력 사항입니다."),
  contents: yup.string().required("상품설명은 필수 입력 사항입니다."),
  price: yup.string().required("판매가격은 필수 입력 사항입니다."),
});
