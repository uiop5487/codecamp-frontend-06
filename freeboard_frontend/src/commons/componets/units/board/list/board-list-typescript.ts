import { ChangeEvent } from "react";

export interface IBoardListUIProps {
  data?: any;
  onChageSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDateSearch: () => void;
  refetch: any;
  countdata: any;
  onClickMoveToPage: (path: any) => () => void;
}

export interface BoardListEl {
  _id: string;
  title: string;
  writer: string;
  createdAt: any;
}

export interface IBoardListProps {
  target?: any;
}
