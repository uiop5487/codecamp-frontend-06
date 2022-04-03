import { Router, useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./writedetail.queries";
import { useState } from "react";
import DetailPageUI from "./writedetail-presenter";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../types/generated/types";

export default function DetailPageContain() {
  const router = useRouter();
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardid) },
    }
  );

  // mutation{
  //     deleteBoard(boardId: "623a1ddaa8255b0029883d03")
  //   }
  const deleteButton = () => {
    deleteBoard({
      variables: { boardId: String(router.query.boardid) },
    });
    Modal.success({
      content: "게시글 목록으로 이동",
      onOk() {
        router.push("/boards");
      },
    });
  };
  const editButton = () => {
    router.push(`/boards/new/${router.query.boardid}/edit`);
  };

  const listButton = () => {
    router.push(`/boards/`);
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardid) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardid) },
        },
      ],
    });
  };

  const onClickDisLike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardid) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardid) },
        },
      ],
    });
  };
  return (
    <DetailPageUI
      data={data}
      deleteButton={deleteButton}
      editButton={editButton}
      listButton={listButton}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
