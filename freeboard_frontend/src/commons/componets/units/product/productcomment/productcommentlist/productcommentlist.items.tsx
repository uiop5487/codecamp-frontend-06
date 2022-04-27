import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import CommentAnswerListContainer from "./prodcutcommentanswerlist/prductcommentanswerlist.container";
import CommentAnswerContainer from "./productcommentanswer/productcommentanswer.container";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION,
} from "./productcommentlist.qurey";
import * as s from "./productcommentlist.styles";

export default function ProdcutCommentListItem(props: any) {
  const [isActive, setIsActive] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [questionId, setQiestionId] = useState("");
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.data._id,
    },
  });
  console.log(data);

  const onClickShowEdit = (event) => {
    setQiestionId(event.target.id);
    setIsActive((prev) => !prev);
  };

  const onClickEdit = () => {
    if (!props.contents) {
      alert("수정한 내용이 없습니다!!");
      return;
    }
    updateUseditemQuestion({
      variables: {
        useditemQuestionId: questionId,
        updateUseditemQuestionInput: {
          contents: props.contents,
        },
      },
    });
    alert("수정되었습니다.");
    setIsActive((prev) => !prev);
  };

  const onClickShowAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <div>
      {isActive === false && (
        <s.FooterWarrper>
          <s.Footer>
            <s.Fetch>
              <s.FetchWarrper>
                <s.WriterImg src="/img/userimg.png"></s.WriterImg>
                <s.WriterFetchHeader>
                  <s.WriterFetchWarrper>
                    <s.Writer>{props.data.user.name}</s.Writer>
                  </s.WriterFetchWarrper>
                  <s.Contents>{props.data.contents}</s.Contents>
                </s.WriterFetchHeader>
              </s.FetchWarrper>
              <s.EditDelteBtnWarrper>
                <img
                  onClick={onClickShowAnswer}
                  src="/img/answericon.png"
                ></img>
                <s.EditImg
                  src="/img/edit.png"
                  onClick={onClickShowEdit}
                  id={props.data._id}
                ></s.EditImg>
                <s.DeleteImg
                  src="/img/delete.png"
                  onClick={props.onClickDelete}
                  id={props.data._id}
                ></s.DeleteImg>
              </s.EditDelteBtnWarrper>
            </s.Fetch>
            <s.CreatedAt>{props.data.createdAt.slice(0, 10)}</s.CreatedAt>
            <CommentAnswerContainer
              isAnswer={isAnswer}
              setIsAnswer={setIsAnswer}
              dataid={props.data._id}
            />
            {data?.fetchUseditemQuestionAnswers?.map((el) => (
              <CommentAnswerListContainer
                key={el._id}
                data={el}
                dataid={props.data._id}
              />
            ))}
          </s.Footer>
        </s.FooterWarrper>
      )}
      {isActive === true && (
        <s.EditCommentBackGround>
          <div>
            <div>
              <s.EditHeaderBoxWrapper>
                <s.EditCommentWriterWrapper>
                  <img src="/img/userimg.png"></img>
                  <s.EditCommentWriter>
                    {props.data.user.name}
                  </s.EditCommentWriter>
                </s.EditCommentWriterWrapper>
                <div>
                  <s.DeleteImg
                    src="/img/delete.png"
                    onClick={onClickShowEdit}
                  ></s.DeleteImg>
                </div>
              </s.EditHeaderBoxWrapper>
            </div>
            <s.TextBoderSolid>
              <div>
                <s.EditCommentTextArea
                  placeholder="어쩌구저쩌구"
                  onChange={props.onChangeContents}
                  defaultValue={props.data.contents}
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
      )}{" "}
    </div>
  );
}
