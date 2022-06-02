import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../types/generated/types";

export interface IWriteData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
}

export interface IWriteEdit {
  writer: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  password: string;
}

export interface Istyle {
  imageActive?: boolean | undefined;
  isActive?: boolean;
}

export interface IWriteNew {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
}

export interface IInputEvent {}

export interface IError {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: object;
}

export interface IMyBoardAdress {
  address?: string;
  addressDetail?: string;
  zipcode?: string;
}

export interface IWriteNewUI {
  addressInput: IMyBoardAdress;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
  editBtn: (data: IWriteEdit) => void;
  SubmitButton: (data: IWriteData) => void;
  isOpen: boolean;
  EditModal: () => void;
  showModal: () => void;
  isModalVisible: boolean;
  handleComplete: (data: Address) => void;
  sumbitModal: () => void;
  onChangeAddressValue: (event: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  onChangeFileUrl: (imageUrl: string) => void;
  onChangeEditFileUrl: (imageUrl: string, index: number) => void;
  handleSubmit: UseFormHandleSubmit<IWriteData | IWriteEdit>;
  register: UseFormRegister<IWriteData | IWriteEdit>;
  formState: FormState<IWriteData | IWriteEdit>;
}

export interface IOnchangeValue {
  writer: (event: ChangeEvent<HTMLInputElement>) => void;
  password: (event: ChangeEvent<HTMLInputElement>) => void;
  title: (event: ChangeEvent<HTMLInputElement>) => void;
  contents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  youtubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IMyVariables {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: object;
  images?: string[];
}
