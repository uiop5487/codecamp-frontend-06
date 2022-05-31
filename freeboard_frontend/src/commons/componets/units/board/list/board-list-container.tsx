import WriteBoardListPresenter from "./board-list-presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./board-list-queries";
import { ChangeEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../types/generated/types";

const WriteBoardListContainer = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: countdata, refetch: countrefetch } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const { onClickMoveToPage } = useMoveToPage();

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    countrefetch({ search: data, page: 1 });
  }, 400);

  const onClickDateSearch = () => {
    refetch({ startDate, endDate, page: 1 });
    countrefetch({ startDate, endDate, page: 1 });
  };

  const onChageSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onChangeEndDate = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const onChangeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  return (
    <WriteBoardListPresenter
      data={data}
      countdata={countdata}
      refetch={refetch}
      onChageSearch={onChageSearch}
      onChangeEndDate={onChangeEndDate}
      onChangeStartDate={onChangeStartDate}
      onClickDateSearch={onClickDateSearch}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
};

export default WriteBoardListContainer;
