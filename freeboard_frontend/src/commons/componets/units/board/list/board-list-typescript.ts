import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../types/generated/types";

export interface IBoardListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  onChageSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDateSearch: () => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  countdata: Pick<IQuery, "fetchBoardsCount"> | undefined;
  onClickMoveToPage: (path: string) => () => void;
}
