import * as s from "./productcommentlist.styles";

export default function ProdcutCommentListItem(props: any) {
  return (
    <s.Footer>
      <s.Fetch>
        <s.FetchWarrper>
          <s.WriterImg src="/img/userimg.png"></s.WriterImg>
          <s.WriterFetchHeader>
            <s.WriterFetchWarrper>
              <s.Writer>작성자</s.Writer>
            </s.WriterFetchWarrper>
            <s.Contents>{props.data.contents}</s.Contents>
          </s.WriterFetchHeader>
        </s.FetchWarrper>
        <s.EditDelteBtnWarrper>
          <s.EditImg src="/img/edit.png"></s.EditImg>
          <s.DeleteImg src="/img/delete.png"></s.DeleteImg>
          {/* {props.isModalVisible && (
            <Modal
              visible={true}
              onOk={props.onClickDelete}
              onCancel={props.Tog}
              title={"비밀번호를 입력하세요!!"}
            >
              <input type="text" onChange={props.deletePasword} />
            </Modal>
          )} */}
        </s.EditDelteBtnWarrper>
      </s.Fetch>
      <s.CreatedAt>날짜</s.CreatedAt>
    </s.Footer>
  );
  //   <div>{props.data.contents}</div>;
}
