import * as s from "./comment.styles";
import { ICommentUI } from "./comment.types";
import { Modal } from "antd";

const CommentUI = (props: ICommentUI) => {
  return (
    <s.BackGround>
      <s.HeaderWarrper>
        <div>box</div>
        <s.CommentHeader>댓글</s.CommentHeader>
      </s.HeaderWarrper>
      <s.InputWarrper>
        <s.WriterInput
          type="text"
          placeholder="작성자"
          onChange={props.saveWriter}
          value={props.writer}
        />
        <s.PasswordInput
          type="text"
          placeholder="비밀번호"
          onChange={props.savePassword}
          value={props.password}
        />
        <s.StarIcon onChange={props.handleChange} value={props.value} />
      </s.InputWarrper>
      <s.CommentAreaWarrper>
        <s.CommentArea
          placeholder="어쩌구저쩌구"
          onChange={props.saveContents}
          value={props.contents}
        />
        <s.SumbitWarrper>
          <s.CommentAreaTextNum>0 / 100</s.CommentAreaTextNum>
          <s.SumbitButton onClick={props.sumbitBtn}>등록하기</s.SumbitButton>
        </s.SumbitWarrper>
      </s.CommentAreaWarrper>
      <s.Editbox isEdit={props.isEdit}>
        <s.HeaderWarrper>
          <div>box</div>
          <s.CommentHeader>댓글</s.CommentHeader>
        </s.HeaderWarrper>
        <s.InputWarrper>
          <s.WriterInput
            type="text"
            placeholder="작성자"
            onChange={props.saveEditWriter}
            value={props.editWriter}
          />
          <s.PasswordInput
            type="text"
            placeholder="비밀번호"
            onChange={props.saveEditPassword}
            value={props.editPassword}
          />
          <s.StarIcon
            onChange={props.EdithandleChange}
            value={props.editValue}
          />
        </s.InputWarrper>
        <s.CommentAreaWarrper>
          <s.CommentArea
            placeholder="어쩌구저쩌구"
            onChange={props.saveEditContents}
            value={props.editContents}
          />
          <s.SumbitWarrper>
            <s.CommentAreaTextNum>0 / 100</s.CommentAreaTextNum>
            <s.SumbitButton onClick={props.onClickEdit}>
              수정하기
            </s.SumbitButton>
          </s.SumbitWarrper>
        </s.CommentAreaWarrper>
      </s.Editbox>
      <s.FooterWarrper>
        {props.data?.fetchBoardComments.map((el: any) => (
          <s.Footer key={el._id}>
            <s.Fetch>
              <s.FetchWarrper>
                <s.WriterImg src="/img/userimg.png"></s.WriterImg>
                <s.WriterFetchHeader>
                  <s.WriterFetchWarrper>
                    <s.Writer>{el.writer}</s.Writer>
                    <s.StarIcon value={el.rating} disabled={true} />
                  </s.WriterFetchWarrper>
                  <s.Contents>{el.contents}</s.Contents>
                </s.WriterFetchHeader>
              </s.FetchWarrper>
              <s.EditDelteBtnWarrper>
                <s.EditImg
                  src="/img/edit.png"
                  onClick={props.onClickDisplay}
                  id={el._id}
                ></s.EditImg>
                <s.DeleteImg
                  src="/img/delete.png"
                  onClick={props.showModal}
                  id={el._id}
                ></s.DeleteImg>
                {props.isModalVisible && (
                  <Modal
                    visible={true}
                    onOk={props.onClickDelete}
                    onCancel={props.Tog}
                  >
                    <input type="text" onChange={props.deletePasword} />
                  </Modal>
                )}
              </s.EditDelteBtnWarrper>
            </s.Fetch>
            <s.CreatedAt>{el.createdAt.slice(0, 10)}</s.CreatedAt>
          </s.Footer>
        ))}
      </s.FooterWarrper>
    </s.BackGround>
  );
};

export default CommentUI;
