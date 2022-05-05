import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "../productcommentlist.qurey";
import CommentAnswerPresenter from "./productcommentanswer.presenter";

export default function CommentAnswerContainer(props: any) {
  const [contents, setContens] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const onChangeContents = (event: any) => {
    setContens(event.target.value);
  };

  const onClickSumbit = () => {
    try {
      createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.dataid,
          createUseditemQuestionAnswerInput: {
            contents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      props.setIsAnswer((prev: any) => !prev);
      alert("등록 되었습니다.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <CommentAnswerPresenter
      isAnswer={props.isAnswer}
      onChangeContents={onChangeContents}
      onClickSumbit={onClickSumbit}
    />
  );
}
