import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./writedetail.queries";
import DetailPageUI from "./writedetail-presenter";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useEffect, useState } from "react";
// import { IBoardPageProps } from "./writedetail-typescript";

export default function DetailPageContain() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const [boardid, setBoardId] = useState("");
  useEffect(() => {
    // console.log(window.location, "쿼리파라미터");
    const { boardid } = router.query;
    if (boardid) setBoardId(String(boardid));
  }, [router.query]);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: boardid },
    }
  );

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
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickMoveToPage={onClickMoveToPage}
      router={router}
    />
  );
}
