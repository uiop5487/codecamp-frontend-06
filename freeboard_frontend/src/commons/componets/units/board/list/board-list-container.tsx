import WriteBoardListPresenter from "./board-list-presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./board-list-queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { Modal } from "antd";
import { useQuery } from "@apollo/client";

interface IWriteBoardListContainerprops {
  data?: any;
}

const WriteBoardListContainer = (props: IWriteBoardListContainerprops) => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: countdata } = useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();

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
  return (
    <WriteBoardListPresenter
      data={props.data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveNew={onClickMoveNew}
      data={data}
      countdata={countdata}
      refetch={refetch}
    />
  );
};

export default WriteBoardListContainer;
