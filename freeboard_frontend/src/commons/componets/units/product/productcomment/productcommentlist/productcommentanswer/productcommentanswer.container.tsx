import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "../productcommentlist.qurey";
import CommentAnswerPresenter from "./productcommentanswer.presenter";
import { ICommentAnswerContainerProps } from "./productcommentanswer.types";

export default function CommentAnswerContainer(
  props: ICommentAnswerContainerProps
) {
  const [contents, setContens] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
        // refetchQueries: [
        //   {
        //     query: FETCH_USED_ITEM_QUESTION_ANSWERS,
        //     variables: {
        //       useditemQuestionId: props.dataid,
        //     },
        //   },
        // ],
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
      props.setIsAnswer((prev: boolean) => !prev);
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
