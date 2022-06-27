import { Reference, StoreObject, useMutation } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
// import CommentAnswerPresenter from "../productcommentanswer/productcommentanswer.presenter";
// import { CREATE_USED_ITEM_QUESTION_ANSWER } from "../productcommentlist.qurey";
import * as s from "./prductcommentanswerlist.styles";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./procutcommentanswerlist.query";
import { CommentAnswerListContainerProps } from "./productcommentanswerlist.types";

export default function CommentAnswerListContainer(
  props: CommentAnswerListContainerProps
) {
  // const [isAnswer, setIsAnswer] = useState(false);
  const [contents, setContents] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [editId, setEditId] = useState("");
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  // const [createUseditemQuestionAnswer] = useMutation(
  //   CREATE_USED_ITEM_QUESTION_ANSWER
  // );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  // const onClickShowAnswer = () => {
  //   setIsAnswer((prev) => !prev);
  // };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  // const onClickSumbit = async () => {
  //   try {
  //     const result = await createUseditemQuestionAnswer({
  //       variables: {
  //         useditemQuestionId: props.dataid,
  //         createUseditemQuestionAnswerInput: {
  //           contents,
  //         },
  //       },
  //     });
  //     alert("등록 되었습니다.");
  //     console.log(result);
  //   } catch (error: any) {
  //     alert(error.message);
  //   }
  // };

  const onClickDelete = (event: MouseEvent<HTMLImageElement>) => {
    deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: (event.target as HTMLImageElement).id,
      },
      update(cache, { data }) {
        const deleteId = data.deleteUseditemQuestionAnswer;
        cache.modify({
          fields: {
            fetchUseditemQuestionAnswers: (prev, { readField }) => {
              const filterPrev = prev.filter(
                (el: Reference | StoreObject | undefined) =>
                  readField("_id", el) !== deleteId
              );
              return [...filterPrev];
            },
          },
        });
      },
    });
  };

  const onClickShowEdit = (event: MouseEvent<HTMLImageElement>) => {
    setIsActive((prev) => !prev);
    setEditId((event.target as HTMLImageElement).id);
  };

  const onClickEdit = async () => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: editId,
          updateUseditemQuestionAnswerInput: {
            contents: contents || props?.data?.contents,
          },
        },
      });
      alert("수정되었습니다.");
      setIsActive((prev) => !prev);
    } catch (error: any) {
      alert(error.messeage);
    }
  };

  return (
    <div>
      {isActive ? (
        <div>
          {" "}
          <s.Wrapper>
            <s.HeaderWrapper>
              <s.AnswerArrowWrapper>
                <s.AnswerArrow src="/img/answerarrow.png"></s.AnswerArrow>
              </s.AnswerArrowWrapper>
              <s.UserWrapper>
                <s.UserIcon src="/img/userimg.png"></s.UserIcon>
                <div>
                  <div>{props?.data?.user?.name}</div>
                  <s.CommentArea>{props?.data?.contents}</s.CommentArea>
                </div>
              </s.UserWrapper>
            </s.HeaderWrapper>
            <s.IconWrapper>
              {/* <s.AnswerIcon
                onClick={onClickShowAnswer}
                src="/img/answericon.png"
              ></s.AnswerIcon> */}
              <s.AnswerIcon
                onClick={onClickShowEdit}
                src="/img/edit.png"
                id={props?.data?._id}
              ></s.AnswerIcon>
              <s.AnswerIcon
                onClick={onClickDelete}
                src="/img/delete.png"
                id={props?.data?._id}
              ></s.AnswerIcon>
            </s.IconWrapper>
          </s.Wrapper>
          {/* <CommentAnswerPresenter
            isAnswer={isAnswer}
            onChangeContents={onChangeContents}
            onClickSumbit={onClickSumbit}
          /> */}
        </div>
      ) : (
        <s.Wrapper>
          <s.HeaderWrapper>
            <s.AnswerArrowWrapper>
              <s.AnswerArrow src="/img/answerarrow.png"></s.AnswerArrow>
            </s.AnswerArrowWrapper>
            <s.UserWrapper>
              <s.UserIcon src="/img/userimg.png"></s.UserIcon>
              <div>
                <div>{props?.data?.user?.name}</div>
                <s.CommentAreaEdit
                  onChange={onChangeContents}
                  defaultValue={props?.data?.contents}
                ></s.CommentAreaEdit>
              </div>
            </s.UserWrapper>
          </s.HeaderWrapper>
          <s.FooterWrapper>
            <s.IconWrapper>
              <s.AnswerIcon
                onClick={onClickShowEdit}
                src="/img/edit.png"
              ></s.AnswerIcon>
              <s.AnswerIcon
                onClick={onClickShowEdit}
                src="/img/delete.png"
              ></s.AnswerIcon>
            </s.IconWrapper>
            <s.ButtonWrapper>
              <button onClick={onClickEdit}>수정하기</button>
            </s.ButtonWrapper>
          </s.FooterWrapper>
        </s.Wrapper>
      )}
    </div>
  );
}
