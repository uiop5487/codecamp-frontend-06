import * as s from "./newproduct.styles";

const UploadPresenter = (props: any) => {
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
      />
    </div>
  );
};

export default UploadPresenter;
