import { useQuery } from "@apollo/client";
import WriteBoardListPresenter from "./board-list-presenter";
import { FETCH_BOARDS } from "./board-list-queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent } from "react";
import { IBoardListProps, IBoardListUIProps } from "./board-list-typescript";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../../../types/generated/types";

const WriteBoardListContainer = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const router = useRouter();
  console.log(data);

  const onClickMoveDetail = (event: MouseEvent<HTMLElement>) => {
    router.push(`/boards/new/${event.target.id}`);
  };
  return (
    <WriteBoardListPresenter
      data={data}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
};

export default WriteBoardListContainer;
