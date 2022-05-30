import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IQuery } from "../../../../../types/generated/types";
import CommentListPresenter from "./commentlist.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentlist.query";
import { IBoardCommentPasswordData } from "./commentlist.types";

export default function CommentListContainer() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dId, setDId] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoardComments">>(
    FETCH_BOARD_COMMENTS,
    {
      variables: { boardId: String(router.query.boardid) },
    }
  );

  const showModal = (id: string) => () => {
    setDId(id);
    setIsModalVisible((prev) => !prev);
  };

  const Tog = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        boardId: router.query.boardid,
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onClickDelete = (data: IBoardCommentPasswordData) => {
    deleteBoardComment({
      variables: {
        boardCommentId: dId,
        password: data.password,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.boardid,
          },
        },
      ],
    });
    setIsModalVisible((prev) => !prev);
  };

  return (
    <CommentListPresenter
      showModal={showModal}
      onClickDelete={onClickDelete}
      Tog={Tog}
      onLoadMore={onLoadMore}
      isModalVisible={isModalVisible}
      data={data}
    />
  );
}
