import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginPresenter {
  onClickLogin: (data: ILoginData) => void;
  onClickMoveList: () => void;
  register: UseFormRegister<ILoginData>;
  formState: FormState<ILoginData>;
  handleSubmit: UseFormHandleSubmit<ILoginData>;
}
