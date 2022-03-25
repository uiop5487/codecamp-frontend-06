// import axsios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types";

//묵음 배송 때문에 두번쓴다.
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

    const [myData, setMyData] = useState("");
    const [callApi] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(
        CREATE_BOARD
    );

    const callGraphqlApi = async () => {
        // const data = await axsios.get("https://koreanjson.com/posts/1")
        const result = await callApi({
            variables: { writer: myWriter, title: myTitle, contents: myContents },
        });
        console.log(result);
        console.log(result.data?.createBoard?.message);
        setMyData(result.data?.createBoard?.message || "");
    };

    const onChangeWriter = (event) => {
        setMyWriter(event.target.value);
    };

    const onChangeTitle = (event) => {
        setMyTitle(event.target.value);
    };

    const onChangeContents = (event) => {
        setMyContents(event.target.value);
    };

    return (
        <div>
            <div>{myData}</div>
            작성자: <input type="text" onChange={onChangeWriter} />
            <br />
            제목: <input type="text" onChange={onChangeTitle} />
            <br />
            내용: <input type="text" onChange={onChangeContents} />
            <br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    );
}
