import { MouseEvent } from "react";
import { IQuery, IUseditem } from "../../../../types/generated/types";

export interface BestProductPresenterProps {
  data: Pick<IQuery, "fetchUseditemsOfTheBest"> | undefined;
  onClickMoveDetail: (
    el: IUseditem
  ) => (event: MouseEvent<HTMLDivElement>) => void;
}
