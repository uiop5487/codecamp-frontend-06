import BoardWriteUI from "./boardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./boardWrite.queries";

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false);

    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

    const [data, setData] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
        // const result = await axios.get("https://koreanjson.com/users/1")
        // const result = await axios.get("https://koreanjson.com/products/1")

        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents },
        }); // graphql-api 방식
        console.log(result);
        console.log(result.data.createBoard.message);
        setData(result.data.createBoard.message);
    };

    const onChangeWriter = (event) => {
        console.log(myWriter);
        setMyWriter(event.target.value);

        if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeTitle = (event) => {
        setMyTitle(event.target.value);
        console.log(myTitle);

        if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeContents = (event) => {
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
            isActive={isActive}
        />
    );
}
