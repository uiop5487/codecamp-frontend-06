import { MouseEvent } from "react";
import { IQuery } from "../../../../types/generated/types";

export interface IBestBoardsPresenter {
  data: Pick<IQuery, "fetchBoardsOfTheBest"> | undefined;
  onClickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
