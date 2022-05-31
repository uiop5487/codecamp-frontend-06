import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ICommentData {
  writer: string;
  password: string;
  contents: string;
}

export interface ICommentUI {
  ratingValue: number;
  handleChange: (event: number) => void;
  submitBtn: (commentData: ICommentData) => void;
  handleSubmit: UseFormHandleSubmit<ICommentData>;
  register: UseFormRegister<ICommentData>;
  watch: (data: string) => void | string;
}

export interface IIsEdit {
  isEdit: boolean;
}
