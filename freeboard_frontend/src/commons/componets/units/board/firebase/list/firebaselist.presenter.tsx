import * as s from "./firebaselist.styles";
import { v4 as uuidv4 } from "uuid";

const FireBaseListUI = (props: any) => {
  return (
    <s.Wrapper>
      <s.Row>
        <s.ColumnHeaderBasic>번호</s.ColumnHeaderBasic>
        <s.ColumnHeaderBasic>작성자</s.ColumnHeaderBasic>
        <s.ColumnHeaderTitle>제목</s.ColumnHeaderTitle>
        <s.ColumnHeaderBasic>내용</s.ColumnHeaderBasic>
        <s.ColumnHeaderBasic></s.ColumnHeaderBasic>
      </s.Row>
      {props.datas?.map((el: any, index: any) => (
        <s.Row key={uuidv4()}>
          <s.ColumnBasic>{index + 1}</s.ColumnBasic>
          <s.ColumnBasic>{el.writer}</s.ColumnBasic>
          <s.ColumnTitle>{el.title}</s.ColumnTitle>
          <s.ColumnBasic>{el.contents}</s.ColumnBasic>
          <s.ColumnBasic>삭제</s.ColumnBasic>
        </s.Row>
      ))}
      <s.Footer>
        <s.Button onClick={props.onClickMoveNew}>등록페이지</s.Button>
      </s.Footer>
    </s.Wrapper>
  );
};

export default FireBaseListUI;
