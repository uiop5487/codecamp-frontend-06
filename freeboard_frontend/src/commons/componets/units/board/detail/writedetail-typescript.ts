import { MouseEvent } from "react";
import { IQueryFetchBoardArgs } from "../../../../types/generated/types";

export interface IBoardWriteUIProps {
  listButton: () => void;
  editButton: () => void;
  deleteButton: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
  // onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  data: any;
}
