import * as s from "./upload.styles";

const UploadPresenter = (props) => {
  return (
    <div>
      {props.imageUrls ? (
        <s.UploadImg
          src={`https://storage.googleapis.com/${props.imageUrls}`}
          onClick={props.onClickImage}
        />
      ) : (
        <s.UploadBtn onClick={props.onClickImage}>
          +<s.Upload>Upload</s.Upload>
        </s.UploadBtn>
      )}
      <s.Plus type="file" onChange={props.onChangeFile} ref={props.fileRef} />
    </div>
  );
};

export default UploadPresenter;
