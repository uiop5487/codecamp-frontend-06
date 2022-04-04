// import axsios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

// 묵음 배송 때문에 두번쓴다.
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
  //   const [myWriter, setMyWriter] = useState("");
  //   const [myTitle, setMyTitle] = useState("");
  //   const [myContents, setMyContents] = useState("");

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [myData, setMyData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const data = await axsios.get("https://koreanjson.com/posts/1")
    const result = await callApi({
      variables: { ...inputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setMyData(result.data.createBoard.message);
  };

  const onChangeInput = (event: any) => {
    setInputs({
      ...inputs,
      // 객체에 키에 점이 들어간 키가 들어가면 식별하는데 힘들기 때문에 대괄호안에 담아 변수를 하나의 문자열로 바꾸어 준다.
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <div>{myData}</div>
      작성자: <input type="text" id="writer" onChange={onChangeInput} />
      <br />
      제목: <input type="text" id="title" onChange={onChangeInput} />
      <br />
      내용: <input type="text" id="contents" onChange={onChangeInput} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
