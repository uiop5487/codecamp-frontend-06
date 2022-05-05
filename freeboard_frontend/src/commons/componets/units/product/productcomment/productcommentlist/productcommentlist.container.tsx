import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../types/generated/types";
import ProdcutCommentListPresenter from "./productcommentlist.presenter";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./productcommentlist.qurey";

export default function ProdcutCommentListContainer() {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.productId) },
  });
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickDelete = (event: any) => {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: event.target.id,
      },
      update(cache, { data }) {
        const deleteId = data.deleteUseditemQuestion;
        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev, { readField }) => {
              const filterPrev = prev.filter(
                (el: any) => readField("_id", el) !== deleteId
              );
              return [...filterPrev];
            },
          },
        });
      },
    });
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        // boardId: router.query.boardid,
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <ProdcutCommentListPresenter
      data={data}
      onChangeContents={onChangeContents}
      onClickDelete={onClickDelete}
      contents={contents}
      onLoadMore={onLoadMore}
    />
  );
}
