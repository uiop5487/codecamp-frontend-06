import { ChangeEvent } from "react";
import { IQuery } from "../../../../types/generated/types";

export interface IWriteData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export interface IWriteEdit {
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
  data?: any;
  editBtn: (data: any) => void;
  SubmitButton: (data: any) => void;
  isOpen: boolean;
  EditModal: () => void;
  showModal: () => void;
  isModalVisible: boolean;
  handleComplete: any;
  sumbitModal: () => void;
  onChangeAddressValue: (event: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: any;
  onChangeFileUrl: (imageUrl: any) => void;
  onChangeEditFileUrl: (imageUrl: any, index: number) => void;
  handleSubmit: any;
  register: any;
  formState: any;
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
  images?: any;
}
