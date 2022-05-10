import { MouseEvent } from "react";

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
