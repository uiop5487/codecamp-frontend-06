// import axsios from 'axios'
import { useState, ChangeEvent, useRef } from "react";
import { useMutation, gql } from "@apollo/client";

import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkFileValidation } from "../../src/commons/libraries/validation";

// 묵음 배송 때문에 두번쓴다.
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [myData, setMyData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const data = await axsios.get("https://koreanjson.com/posts/1")
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setMyData(result.data.createBoard.message);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onchangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onCklickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <div>{myData}</div>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호: <input type="text" onChange={onChangePassword} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <div>
        <div>이미지 업로드 연습하기</div>;
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          onClick={onCklickImage}
        >
          이미지 선택
        </div>
        <input
          type="file"
          onChange={onchangeFile}
          style={{ display: "none" }}
          ref={fileRef}
        />
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
