import { ChangeEvent } from "react";

// 컨테이너 타입
export interface IBoradWriteProps {
    isEdit: boolean;
    data?: any;
}

export interface IMyVariables {
    number: number;
    writer?: string;
    title?: string;
    contents?: string;
}

//프리젠터 타입
//void 리턴 없음
export interface IBoardWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
    callGraphqlApi: () => void;
    onClickUpdate: () => void;
    isActive: boolean;
    isEdit: boolean;
    data?: any;
}

//스타일 타입
export interface ISubmitButtonProps {
    isActive: boolean;
}
