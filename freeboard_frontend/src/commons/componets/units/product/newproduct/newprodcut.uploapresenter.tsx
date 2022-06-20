import * as s from "./newproduct.styles";
import { IUploadPresenterProps } from "./newproduct.types";

const UploadPresenter = (props: IUploadPresenterProps) => {
  return (
    <div>
      {props.imageUrls ? (
        <s.UploadImg
          src={`https://storage.googleapis.com/${props.imageUrls}`}
          onClick={props.onClickImage}
        />
      ) : (
        <div>
          <s.UploadButton onClick={props.onClickImage}>+</s.UploadButton>
        </div>
      )}
      <s.UploadInput
        type="file"
        ref={props.fileRef}
        onChange={props.imageUrls ? props.onChangeEditFile : props.onChangeFile}
        multiple
      />
    </div>
  );
};

export default UploadPresenter;
