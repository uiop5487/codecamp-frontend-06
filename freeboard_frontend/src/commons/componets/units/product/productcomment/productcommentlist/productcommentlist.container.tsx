import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProdcutCommentListPresenter from "./productcommentlist.presenter";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./productcommentlist.qurey";

export default function ProdcutCommentListContainer() {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.productId },
  });
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickDelete = (event) => {
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
                (el) => readField("_id", el) !== deleteId
              );
              return [...filterPrev];
            },
          },
        });
      },
    });
  };

  return (
    <ProdcutCommentListPresenter
      data={data}
      onChangeContents={onChangeContents}
      onClickDelete={onClickDelete}
      contents={contents}
    />
  );
}
