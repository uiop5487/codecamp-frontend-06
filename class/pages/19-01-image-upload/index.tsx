import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const ImageUploadPage = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onchangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div>이미지 업로드 연습하기</div>;
      <input type="file" onChange={onchangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
};

export default ImageUploadPage;
