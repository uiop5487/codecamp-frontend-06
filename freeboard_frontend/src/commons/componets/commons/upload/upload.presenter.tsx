import * as s from "./upload.styles";

const UploadPresenter = (props: any) => {
  return (
    <div>
      {props.imageUrls ? (
        <s.UploadImg
          src={`https://storage.googleapis.com/${props.imageUrls}`}
          onClick={props.onClickImage}
        />
      ) : (
        <s.UploadBtn onClick={props.onClickImage} type="button">
          +<s.Upload>Upload</s.Upload>
        </s.UploadBtn>
      )}
      <s.Plus
        type="file"
        onChange={props.imageUrls ? props.onChangeEditFile : props.onChangeFile}
        ref={props.fileRef}
        multiple
      />
    </div>
  );
};

export default UploadPresenter;
