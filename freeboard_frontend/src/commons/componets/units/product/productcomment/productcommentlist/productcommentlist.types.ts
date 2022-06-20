import { ChangeEvent, MouseEventHandler } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../types/generated/types";

export interface IProdcutCommentListPresenter {
  data: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  onLoadMore: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickDelete: MouseEventHandler<HTMLImageElement>;
  contents: string;
}

export interface IProdcutCommentListItemProps {
  data: IUseditemQuestion;
  contents: string;
  onClickDelete: MouseEventHandler<HTMLImageElement>;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onLoadMore: () => void;
}

export interface IProductCommentData {
  contents: string;
}
