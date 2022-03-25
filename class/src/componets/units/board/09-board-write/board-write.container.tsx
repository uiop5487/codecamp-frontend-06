// 여기는 컨테이너 컴포넌트
import BoardWriteUI from "./board-write.presenter";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import { useRouter } from "next/router";
import { IBoradWriteProps, IMyVariables } from "./board-write.types";

export default function BoardWrite(props: IBoradWriteProps) {
    const [isActive, setIsActive] = useState(false);
    const router = useRouter();

    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

    const [data, setData] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const onClickUpdate = async () => {
        const myVariables: IMyVariables = { number: Number(router.query.mynumber) };
        // if 한줄일때는 중괄호 생략가능
        if (myWriter !== "") myVariables.writer = myWriter;
        if (myTitle !== "") myVariables.title = myTitle;
        if (myContents !== "") myVariables.contents = myContents;

        await updateBoard({
            variables: myVariables,
        });
        alert("수정성공");
        router.push(`/09-03-boards-typescript-boards/${router.query.mynumber}`);
    };

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
        // const result = await axios.get("https://koreanjson.com/users/1")
        // const result = await axios.get("https://koreanjson.com/products/1")

        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents },
        }); // graphql-api 방식
        // console.log(result);
        // console.log(result.data.createBoard.message);
        // setData(result.data.createBoard.message);
        alert("등록성공");
        router.push(`/09-03-boards-typescript-boards/${result.data.createBoard.number}`);
    };

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(myWriter);
        setMyWriter(event.target.value);

        if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setMyTitle(event.target.value);
        console.log(myTitle);

        if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setMyContents(event.target.value);
        console.log(myContents);

        if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    console.log(myWriter);
    return (
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            callGraphqlApi={callGraphqlApi}
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
        />
    );
}
