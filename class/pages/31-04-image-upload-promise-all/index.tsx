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
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (num) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없슴");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const tempUrls = [...imageUrls];
        tempUrls[num] = data.target?.result;
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[num] = file;
        setFiles(tempFiles);
      }
    };
  };

  const onClickSubmit = async () => {
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultUrls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    );

    // files.map((el) => {
    //   return el && uploadFile({ variables: { file: el } });
    //   // return el ? uploadFile({ variables: { file: el } }) : undefined;
    //   // if (el) {
    //   //   return uploadFile({ variables: { file: el } });
    //   // }
    //   // return undefined;
    // });

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "짱구",
          password: "1234",
          title: "제목",
          contents: "업로드",
          images: resultUrls,
        },
      },
    });
    console.log(result2);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
