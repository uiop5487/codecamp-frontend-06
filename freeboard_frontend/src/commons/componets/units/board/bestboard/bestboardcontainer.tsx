import BestBoardsPresenter from "./bestboardpresenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS_OF_THE_BEST } from "./bestboardquery";
import { IQuery } from "../../../../types/generated/types";
import { MouseEvent } from "react";

export default function BestBoardsContainer() {
  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );
  const router = useRouter();

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/new/${event.currentTarget.id}`);
  };
  return (
    <BestBoardsPresenter onClickMoveDetail={onClickMoveDetail} data={data} />
  );
}
