import { ChangeEvent } from "react";

export interface Istyle {
  isActive: boolean;
}

export interface IWriteNew {
  // title: string;
  isEdit: boolean;
  data?: any;
}

export interface IInputEvent {}

export interface IWriteNewUI {
  isEdit: boolean;
  data?: any;
  isActive: boolean;
  editBtn: () => void;
  SubitButton: () => void;
  isOpen: boolean;
  // Modal: () => void;
  EditModal: () => void;
  Toggle: () => void;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  handleComplete: any;
  sumbitModal: () => void;
  onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressValue: (event: ChangeEvent<HTMLInputElement>) => void;
  addressInput: IMyBoardAdress;
  blankError?: IError;
}

export interface IOnchangeValue {
  writer: (event: ChangeEvent<HTMLInputElement>) => void;
  password: (event: ChangeEvent<HTMLInputElement>) => void;
  title: (event: ChangeEvent<HTMLInputElement>) => void;
  contents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  youtubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
}

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

export interface IMyVariables {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: object;
}
