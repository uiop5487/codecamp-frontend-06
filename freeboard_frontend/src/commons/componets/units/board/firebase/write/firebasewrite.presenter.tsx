import { Wrapper } from "./firebasewrite.styles";

const FireBaseWriteUI = (props: any) => {
  return (
    <div>
      <Wrapper>
        <div>작성자</div>
        <input type="text" id="writer" onChange={props.onChangeValue} />
        <div>제목</div>
        <input type="text" id="title" onChange={props.onChangeValue} />
        <div>내용</div>
        <input type="text" id="contents" onChange={props.onChangeValue} />
        <button onClick={props.onClickSubmit}>등록하기</button>
      </Wrapper>
    </div>
  );
};

export default FireBaseWriteUI;
