import { ChangeEvent } from "react";

export interface Istyle {
  imageActive?: boolean | undefined;
  isActive?: boolean;
}

export interface IWriteNew {
  // title: string;
  isEdit: boolean;
  data?: any;
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
  blankError: IError;
  handleComplete: any;
  sumbitModal: () => void;
  onChangeValue: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeAddressValue: (event: ChangeEvent<HTMLInputElement>) => void;
  // addressInput: IMyBoardAdress;
  // blankError?: IError;
  imageUrls: any;
  onChangeFileUrl: (imageUrl: any, index: number) => void;
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
