import { MouseEvent } from "react";

export interface IBestBoardsPresenter {
  data: any;
  onClickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
