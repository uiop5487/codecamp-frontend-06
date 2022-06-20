import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import UploadPresenter from "./newprodcut.uploapresenter";
import { UPLOAD_FILE } from "./newproduct.mutation";
import { IUploadContainerProps } from "./newproduct.types";

const UploadContainer = (props: IUploadContainerProps) => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = Object.values({ ...event.target.files });
    try {
      file.map(async (el) => {
        const result = await uploadFile({ variables: { file: el } });
        props.onChangeFileUrl(result.data.uploadFile.url);
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onChangeEditFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeEditFileUrl(result.data.uploadFile.url, props.index);
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
      onChangeEditFile={onChangeEditFile}
    />
  );
};

export default UploadContainer;
