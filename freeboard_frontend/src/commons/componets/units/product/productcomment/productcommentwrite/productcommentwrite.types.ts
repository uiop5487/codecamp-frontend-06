import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ICommentData {
  contents: string;
}

export interface IProductCommentWritePresenterProps {
  register: UseFormRegister<ICommentData>;
  handleSubmit: UseFormHandleSubmit<ICommentData>;
  formState: FormState<ICommentData>;
  onClickSubmit: (data: ICommentData) => void;
}
