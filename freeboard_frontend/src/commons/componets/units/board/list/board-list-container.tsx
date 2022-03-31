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
import { Modal } from "antd";

const WriteBoardListContainer = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const router = useRouter();
  console.log(data);

  const onClickMoveDetail = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(`/boards/new/${String(event.target.id)}`);
  };

  const onClickMoveNew = () => {
    Modal.success({
      content: "게시글작성 페이지로 이동",
      onOk() {
        router.push("/boards/new");
      },
    });
  };
  return (
    <WriteBoardListPresenter
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveNew={onClickMoveNew}
    />
  );
};

export default WriteBoardListContainer;
