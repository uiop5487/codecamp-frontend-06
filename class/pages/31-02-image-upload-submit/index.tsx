import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
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

export default function ImageUploadPreviewPage() {
  const [file1, setFile1] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없슴");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data?.target?.result);
        setImageUrl(data?.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async () => {
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1.data.uploadFile.url;
    console.log(imageUrl);

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "짱구",
          password: "1234",
          title: "제목",
          contents: "업로드",
          images: [imageUrl],
        },
      },
    });
    console.log(result2);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
