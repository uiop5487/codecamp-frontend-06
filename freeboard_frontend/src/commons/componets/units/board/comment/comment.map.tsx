import * as s from "./comment.styles";
import { Modal } from "antd";
import { ChangeEvent, MouseEvent, useState } from "react";
import { UPDATE_BOARD_COMMENT } from "./comment.query";
import { useMutation } from "@apollo/client";

const CommentMapPage = (props: any) => {
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [isActice, setIsActice] = useState(false);
  const [editContents, setEditContents] = useState("");
  const [editValue, setEditValue] = useState(0);
  const [editPassword, setEditPassword] = useState("");
  const [editWriter, setEditWriter] = useState("");
  const [isId, setIsId] = useState("");
  const onClickDisplay = (event: MouseEvent<HTMLElement>) => {
    setIsActice(true);
    setIsId((event.target as any).id);
    if (isActice === true) {
      setIsActice(false);
    }
  };
  const saveEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };
  const saveEditPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setEditPassword(event.target.value);
  };
  const EdithandleChange = (editValue: number) => {
    setEditValue(editValue);
  };
  const onClickEdit = async () => {
    await updateBoardComment({
      variables: {
        boardCommentId: isId,
        password: editPassword,
        updateBoardCommentInput: {
          contents: editContents,
          rating: Number(editValue),
        },
      },
    });
    setEditWriter("");
    setEditContents("");
    setEditPassword("");
    setEditValue(0);
    Modal.success({
      content: "수정되었습니다.",
    });
    setIsActice(false);
  };
  return (
    <div>
      {isActice === false && (
        <s.Footer>
          <s.Fetch>
            <s.FetchWarrper>
              <s.WriterImg src="/img/userimg.png"></s.WriterImg>
              <s.WriterFetchHeader>
                <s.WriterFetchWarrper>
                  <s.Writer>{props.el.writer}</s.Writer>
                  <s.StarIcon value={props.el.rating} disabled={true} />
                </s.WriterFetchWarrper>
                <s.Contents>{props.el.contents}</s.Contents>
              </s.WriterFetchHeader>
            </s.FetchWarrper>
            <s.EditDelteBtnWarrper>
              <s.EditImg
                src="/img/edit.png"
                onClick={onClickDisplay}
                id={props.el._id}
              ></s.EditImg>
              <s.DeleteImg
                src="/img/delete.png"
                onClick={props.showModal}
                id={props.el._id}
              ></s.DeleteImg>
              {props.isModalVisible && (
                <Modal
                  visible={true}
                  onOk={props.onClickDelete}
                  onCancel={props.Tog}
                  title={"비밀번호를 입력하세요!!"}
                >
                  <input type="text" onChange={props.deletePasword} />
                </Modal>
              )}
            </s.EditDelteBtnWarrper>
          </s.Fetch>
          <s.CreatedAt>{props.el.createdAt.slice(0, 10)}</s.CreatedAt>
        </s.Footer>
      )}
      {isActice === true && (
        <s.EditCommentBackGround>
          <div>
            <div>
              <s.EditHeaderBoxWrapper>
                <s.EditCommentWriterWrapper>
                  <img src="/img/userimg.png"></img>
                  <s.EditCommentWriter>{props.el.writer}</s.EditCommentWriter>
                  <s.EditCommentPasswordInput
                    type="text"
                    placeholder="비밀번호"
                    onChange={saveEditPassword}
                    value={props.password}
                  />
                  <s.StarIcon
                    defaultValue={props.el.rating}
                    onChange={EdithandleChange}
                  />
                </s.EditCommentWriterWrapper>
                <div>
                  <s.DeleteImg
                    src="/img/delete.png"
                    onClick={onClickDisplay}
                  ></s.DeleteImg>
                </div>
              </s.EditHeaderBoxWrapper>
            </div>
            <s.TextBoderSolid>
              <div>
                <s.EditCommentTextArea
                  placeholder="어쩌구저쩌구"
                  onChange={saveEditContents}
                  defaultValue={props.el.contents}
                />
              </div>
              <s.EditButtonWrapper>
                <div>0 / 100</div>
                <s.EditCommentButton onClick={onClickEdit}>
                  수정하기
                </s.EditCommentButton>
              </s.EditButtonWrapper>
            </s.TextBoderSolid>
          </div>
        </s.EditCommentBackGround>
      )}
    </div>
  );
};

export default CommentMapPage;
