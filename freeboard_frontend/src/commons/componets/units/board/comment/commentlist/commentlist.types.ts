import { ChangeEvent, MouseEvent } from "react";

export interface ICommentListPresenter {
  onLoadMore: () => void;
  data: any;
  onClickDelete?: (event: MouseEvent<HTMLElement>) => void;
  showModal: (event: any) => void;
  isModalVisible: boolean;
  Tog: any;
  deletePasword: any;
  EdithandleChange?: (event: number) => void;
}

export interface ICommentListEditUI {
  el: any;
  saveEditPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  saveEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  EdithandleChange: (editValue: number) => void;
  onClickEdit: () => void;
  onClickDisplay: (event: MouseEvent<HTMLElement>) => void;
  editContents: string;
  password: string;
}
