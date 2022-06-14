import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IUseditem } from "../../../../types/generated/types";

export interface ITodayProdcutProps {
  todayData: never[];
  setTodayDate: Dispatch<SetStateAction<never[]>>;
  onClickMoveDetail: (
    el: IUseditem
  ) => (event: MouseEvent<HTMLDivElement>) => void;
}
