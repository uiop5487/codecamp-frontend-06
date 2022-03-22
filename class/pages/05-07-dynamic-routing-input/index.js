// import axios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
    const router = useRouter();
    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

    const [data, setData] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
        // const result = await axios.get("https://koreanjson.com/users/1")
        // const result = await axios.get("https://koreanjson.com/products/1")
        try {
            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents },
            }); // graphql-api 방식
            console.log(result);
            console.log(result.data.createBoard.message);
            alert("게시글 등록에 성공하였습니다.");
            alert("상세페이지로 이동 할까요?");
            router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`);
        } catch (error) {
            alert(error.message);
        }
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
            {/* <div>{data}</div> */}
            작성자: <input type="text" onChange={onChangeWriter} />
            <br />
            제목: <input type="text" onChange={onChangeTitle} />
            <br />
            내용: <input type="text" onChange={onChangeContents} />
            <br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </div>
    );
}
