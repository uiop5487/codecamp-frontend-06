import { RefetchQueriesFunction } from "@apollo/client";
import { MouseEvent } from "react";
import { IQuery } from "../../../types/generated/types";

export interface IPaginationProps {
  countdata: Pick<IQuery, "fetchBoardsCount">;
  refetch: RefetchQueriesFunction;
}

export interface IPaginationPrecenter {
  onClickPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  current: number;
  isActive: boolean;
}
