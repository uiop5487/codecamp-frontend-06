import { IQuery } from "../../../../types/generated/types";

export interface IProductDetailPresenterProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickEditPage: () => void;
  onClickMoveToPage: (path: string) => () => void;
  onClickDelete: () => void;
  onClickPickedCount: () => void;
  userData: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClcikBuy: () => void;
}
