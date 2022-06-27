import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import CommentAnswerListContainer from "./prodcutcommentanswerlist/prductcommentanswerlist.container";
import CommentAnswerContainer from "./productcommentanswer/productcommentanswer.container";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION,
} from "./productcommentlist.qurey";
import * as s from "./productcommentlist.styles";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestionAnswer,
} from "../../../../../types/generated/types";
import {
  IProdcutCommentListItemProps,
  IProductCommentData,
} from "./productcommentlist.types";
import { useForm } from "react-hook-form";

export default function ProdcutCommentListItem(
  props: IProdcutCommentListItemProps
) {
  const [isActive, setIsActive] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [questionId, setQiestionId] = useState("");
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.data._id,
    },
  });
  const { register, handleSubmit } = useForm<IProductCommentData>({
    mode: "onChange",
  });

  const onClickShowEdit = (event: any) => {
    setQiestionId(event.target.id);
    setIsActive((prev) => !prev);
  };

  const onClickEdit = async (data: IProductCommentData) => {
    // console.log("엘레레레레");
    // if (!props.contents) {
    //   alert("수정한 내용이 없습니다!!");
    //   return;
    // }
    await updateUseditemQuestion({
      variables: {
        useditemQuestionId: questionId,
        updateUseditemQuestionInput: {
          contents: data.contents || props.data.contents,
        },
      },
    });
    alert("수정되었습니다.");
    setIsActive((prev) => !prev);
  };

  const onClickShowAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  console.log(isActive);

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
                <s.AnswerImg
                  onClick={onClickShowAnswer}
                  src="/img/answericon.png"
                ></s.AnswerImg>
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
            {data?.fetchUseditemQuestionAnswers?.map(
              (el: IUseditemQuestionAnswer) => (
                <CommentAnswerListContainer
                  key={uuidv4()}
                  data={el}
                  dataid={props.data._id}
                />
              )
            )}
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
                  {...register("contents")}
                  defaultValue={props.data.contents}
                />
              </div>
              <s.EditButtonWrapper>
                <div>0 / 100</div>
                <s.EditCommentButton
                  type="submit"
                  onClick={handleSubmit(onClickEdit)}
                >
                  수정하기
                </s.EditCommentButton>
              </s.EditButtonWrapper>
            </s.TextBoderSolid>
          </div>
        </s.EditCommentBackGround>
      )}
    </div>
  );
}
