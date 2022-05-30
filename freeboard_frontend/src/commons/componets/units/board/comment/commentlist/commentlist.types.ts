import { ChangeEvent } from "react";
import { IBoardComment, IQuery } from "../../../../../types/generated/types";

export interface IBoardCommentPasswordData {
  password: string;
}

export interface ICommentListPresenter {
  onLoadMore: () => void;
  data: Pick<IQuery, "fetchBoardComments"> | undefined;
  onClickDelete: (data: IBoardCommentPasswordData) => void;
  showModal: (id: string) => () => void;
  isModalVisible: boolean;
  Tog: () => void;
  EdithandleChange?: (event: number) => void;
}

export interface IPropsCommentMap {
  el: IBoardComment;
  onClickDelete: (data: IBoardCommentPasswordData) => void;
  showModal: (id: string) => () => void;
  isModalVisible: boolean;
  Tog: () => void;
}

export interface ICommentListEditUI {
  el: any;
  saveEditPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  saveEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  EdithandleChange: (editValue: number) => void;
  onClickEdit: () => void;
  onClickDisplay: (id: string) => () => void;
  editContents: string;
}

export interface IIsEdit {
  isEdit: boolean;
}
