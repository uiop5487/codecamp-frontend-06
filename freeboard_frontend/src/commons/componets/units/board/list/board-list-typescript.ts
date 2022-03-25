import { ChangeEvent, MouseEvent } from "react";

export interface IBoardListUIProps {
    data?: any;
    onClickMoveDetail: (event: MouseEvent<HTMLInputElement>) => void;
}

export interface BoardListEl {
    _id: string;
    title: string;
    writer: string;
    createdAt: any;
}

export interface IBoardListProps {
    target?: any;
}
