import { ChangeEvent } from "react";
import { IBoardComment, IQuery } from "../../../../../types/generated/types";

export interface ICommentListPresenter {
  onLoadMore: () => void;
  data: Pick<IQuery, "fetchBoardComments"> | undefined;
  onClickDelete: () => void;
  showModal: (id: string) => () => void;
  isModalVisible: boolean;
  Tog: () => void;
  deletePasword: (event: ChangeEvent<HTMLInputElement>) => void;
  EdithandleChange?: (event: number) => void;
}

export interface IPropsCommentMap {
  el: IBoardComment;
  onClickDelete: () => void;
  showModal: (id: string) => () => void;
  isModalVisible: boolean;
  Tog: () => void;
  deletePasword: (event: ChangeEvent<HTMLInputElement>) => void;
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
