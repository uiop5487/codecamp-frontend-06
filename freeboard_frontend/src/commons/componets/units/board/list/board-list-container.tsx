import WriteBoardListPresenter from "./board-list-presenter";
// import { FETCH_BOARDS } from "./board-list-queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { Modal } from "antd";

interface IWriteBoardListContainerprops {
  data?: any;
}

const WriteBoardListContainer = (props: IWriteBoardListContainerprops) => {
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
    />
  );
};

export default WriteBoardListContainer;
