import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const Image = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;

const Button = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function UploadMultiple() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [image, setImage] = useState([""]);

  const onChangeImageFile = async (event: any) => {
    const file = [...event.target.files];
    file.map(async (el) => {
      const result = await uploadFile({
        variables: { file: el },
      });
      setImage((prev) => [result.data.uploadFile.url, ...prev]);
    });
  };
  return (
    <div>
      <input type="file" onChange={onChangeImageFile} multiple />
      {image.map((el) => (el ? <Image>{el}</Image> : <Button></Button>))}
    </div>
  );
}
