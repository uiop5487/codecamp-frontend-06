import { ChangeEvent, MouseEvent } from "react";

export interface ICommentUI {
  isEdit: boolean;
  saveWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  writer: string;
  savePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  value: number;
  handleChange: (event: number) => void;
  saveContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contents: string;
  sumbitBtn: () => void;
  EdithandleChange?: (event: number) => void;
  onClickDelete?: (event: MouseEvent<HTMLElement>) => void;
  data: any;
  dPassword: string;
  isModalVisible: boolean;
  showModal: any;
  deletePasword: any;
  Tog: any;
  onLoadMore: () => void;
}

export interface IIsEdit {
  isEdit: boolean;
}
