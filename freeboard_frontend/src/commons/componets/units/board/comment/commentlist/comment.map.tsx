import * as s from "./commentlist.styles";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_BOARD_COMMENT } from "./commentlist.query";
import CommentListEditUI from "./commentlistedit.presenter";
import {
  IBoardCommentPasswordData,
  IPropsCommentMap,
} from "./commentlist.types";
import { useForm } from "react-hook-form";

const CommentMapPage = (props: IPropsCommentMap) => {
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [isActive, setIsActive] = useState(false);
  const [editContents, setEditContents] = useState("");
  const [editValue, setEditValue] = useState(0);
  const [editPassword, setEditPassword] = useState("");
  const [isId, setIsId] = useState("");
  const { register, handleSubmit } = useForm<IBoardCommentPasswordData>({
    mode: "onChange",
  });

  const onClickDisplay = (id: string) => () => {
    setIsActive(true);
    setIsId(id);
    if (isActive === true) {
      setEditContents("");
      setIsActive(false);
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
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: isId,
          password: editPassword,
          updateBoardCommentInput: {
            contents: editContents || props.el.contents,
            rating: editValue || props.el.rating,
          },
        },
      });
      Modal.success({
        content: "수정되었습니다.",
      });
      setIsActive(false);
    } catch (error: any) {
      console.log(typeof error);
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <div>
      {isActive === false && (
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
                onClick={onClickDisplay(props.el._id)}
              ></s.EditImg>
              <s.DeleteImg
                src="/img/delete.png"
                onClick={props.showModal(props.el._id)}
              ></s.DeleteImg>
              {props.isModalVisible && (
                <Modal
                  visible={true}
                  onOk={handleSubmit(props.onClickDelete)}
                  onCancel={props.Tog}
                  title={"비밀번호를 입력하세요!!"}
                >
                  <input type="password" {...register("password")} />
                </Modal>
              )}
            </s.EditDelteBtnWarrper>
          </s.Fetch>
          <s.CreatedAt>{props.el.createdAt.slice(0, 10)}</s.CreatedAt>
        </s.Footer>
      )}
      {isActive === true && (
        <CommentListEditUI
          saveEditContents={saveEditContents}
          saveEditPassword={saveEditPassword}
          EdithandleChange={EdithandleChange}
          onClickEdit={onClickEdit}
          editContents={editContents}
          onClickDisplay={onClickDisplay}
          el={props.el}
        />
      )}
    </div>
  );
};

export default CommentMapPage;
