import { useQuery } from "@apollo/client";
import WriteBoardListPresenter from "./board-list-presenter";
import { FETCH_BOARDS } from "./board-list-queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent } from "react";
import { IBoardListProps, IBoardListUIProps } from "./board-list-typescript";

const WriteBoardListContainer = () => {
    const { data } = useQuery(FETCH_BOARDS);
    const router = useRouter();
    console.log(data);

    const onClickMoveDetail = (event: IBoardListProps) => {
        router.push(`/boards/new/${event.target.id}`);
    };
    return <WriteBoardListPresenter data={data} onClickMoveDetail={onClickMoveDetail} />;
};

export default WriteBoardListContainer;
