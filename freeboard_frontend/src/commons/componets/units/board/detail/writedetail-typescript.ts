import { NextRouter } from "next/router";
import { IQuery } from "../../../../types/generated/types";

export interface IBoardWriteUIProps {
  deleteButton: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickMoveToPage: (path: string) => () => void;
  data: Pick<IQuery, "fetchBoard"> | undefined;
  router: NextRouter;
}
