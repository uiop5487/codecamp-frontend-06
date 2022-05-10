import BestBoardsPresenter from "./bestboardpresenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS_OF_THE_BEST } from "./bestboardquery";
import { IQuery } from "../../../../types/generated/types";

export default function BestBoardsContainer() {
  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );
  const router = useRouter();

  const onClickMoveDetail = (event: any) => {
    router.push(`/boards/new/${event.currentTarget.id}`);
  };
  return (
    <BestBoardsPresenter onClickMoveDetail={onClickMoveDetail} data={data} />
  );
}
