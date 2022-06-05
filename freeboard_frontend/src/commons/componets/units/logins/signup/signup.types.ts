import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignupData {
  email: string;
  password: string;
  name: string;
  passwordcheck: string;
}

export interface ISignupPresenter {
  onClickSignup: (data: ISignupData) => void;
  onClickMoveList: () => void;
  register: UseFormRegister<ISignupData>;
  formState: FormState<ISignupData>;
  handleSubmit: UseFormHandleSubmit<ISignupData>;
}
