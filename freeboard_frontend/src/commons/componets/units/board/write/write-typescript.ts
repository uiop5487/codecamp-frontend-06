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
  savedName: (event: ChangeEvent<HTMLInputElement>) => void;
  nameError: string;
  savedPassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: any;
  passwordError: string;
  savedTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  titleError: string;
  savedContet: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contentError: string;
  savedZipCode: (event: ChangeEvent<HTMLInputElement>) => void;
  savedAdress: (event: ChangeEvent<HTMLInputElement>) => void;
  savedDetailAdress?: (event: ChangeEvent<HTMLInputElement>) => void;
  adressError: string;
  savedYoutebUrl?: (event: ChangeEvent<HTMLInputElement>) => void;
  savedImg?: (event: ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
  editBtn: () => void;
  SubitButton: () => void;
  saveYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  saveDetailAdress: (event: ChangeEvent<HTMLInputElement>) => void;
  saveImg?: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  // Modal: () => void;
  EditModal: () => void;
  Toggle: () => void;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  handleComplete: any;
  saveZipCode: string;
  saveAdress: string;
  sumbitModal: () => void;
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
