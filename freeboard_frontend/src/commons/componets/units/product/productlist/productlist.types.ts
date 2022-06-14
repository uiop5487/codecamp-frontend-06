import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery, IUseditem } from "../../../../types/generated/types";

export interface IProductListPresenterProps {
  onClickMoveProductNew: () => void;
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  onLoadMore: () => void;
  onClickMoveDetail: (
    el: IUseditem
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  todayData: never[];
  setTodayDate: Dispatch<SetStateAction<never[]>>;
  onClickSoldOut: () => void;
  isSoldout: boolean;
}
