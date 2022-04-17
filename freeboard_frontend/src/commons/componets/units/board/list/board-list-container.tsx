import WriteBoardListPresenter from "./board-list-presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./board-list-queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";
import { useQuery } from "@apollo/client";
import _ from "lodash";

interface IWriteBoardListContainerprops {
  data?: any;
}

const WriteBoardListContainer = (props: IWriteBoardListContainerprops) => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: countdata, refetch: countrefetch } =
    useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();
  // const [searchValue, setSearchValue] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");

  const onClickMoveDetail = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(
      `/boards/new/${String((event.target as HTMLButtonElement).id)}`
    );
  };

  const onClickMoveNew = () => {
    Modal.success({
      content: "게시글작성 페이지로 이동",
      onOk() {
        router.push("/boards/new");
      },
    });
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    countrefetch({ search: data, page: 1 });
  }, 400); // 시간 입력

  const onClickDateSearch = () => {
    refetch({ startDate, endDate, page: 1 });
    countrefetch({ startDate, endDate, page: 1 });
  };

  const onChageSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // setSearchValue(event.target.value);
  };

  const onChangeEndDate = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const onChangeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };
  console.log(endDate, startDate);

  return (
    <WriteBoardListPresenter
      // data={props.data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveNew={onClickMoveNew}
      data={data}
      countdata={countdata}
      refetch={refetch}
      onChageSearch={onChageSearch}
      onChangeEndDate={onChangeEndDate}
      onChangeStartDate={onChangeStartDate}
      onClickDateSearch={onClickDateSearch}
    />
  );
};

export default WriteBoardListContainer;
