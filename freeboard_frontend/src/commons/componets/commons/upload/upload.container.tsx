import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import UploadPresenter from "./upload.presenter";
import { UPLOAD_FILE } from "./upload.qureies";

const UploadContainer = (props: any) => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrl(result.data.uploadFile.url, props.index);
      console.log(result.data?.uploadFile.url);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <UploadPresenter
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
      imageUrls={props.imageUrls}
    />
  );
};

export default UploadContainer;
