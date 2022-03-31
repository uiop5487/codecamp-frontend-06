import TextArea from "antd/lib/input/TextArea";
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
  saveEditWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  editWriter?: string;
  saveEditPassword?: (event: ChangeEvent<HTMLInputElement>) => void;
  editPassword?: string;
  EdithandleChange?: (event: number) => void;
  editValue?: number;
  saveEditContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  editContents?: string;
  onClickEdit: (event: MouseEvent<HTMLElement>) => void;
  onClickDisplay?: (event: MouseEvent<HTMLElement>) => void;
  onClickDelete?: (event: MouseEvent<HTMLElement>) => void;
  data: any;
  dPassword: string;
  isModalVisible: boolean;
  showModal: any;
  deletePasword: any;
  Tog: any;
}

export interface IIsEdit {
  isEdit: boolean;
}
