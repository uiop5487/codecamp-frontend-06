import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ICommentAnswerContainerProps {
  dataid: string;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  isAnswer: boolean;
}

export interface ICommentAnswerPresenterProps {
  isAnswer: boolean;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSumbit: () => void;
}
