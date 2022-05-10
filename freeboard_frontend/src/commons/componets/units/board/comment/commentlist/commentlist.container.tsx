import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IQuery } from "../../../../../types/generated/types";
import CommentListPresenter from "./commentlist.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentlist.query";

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
  const [dPassword, setDPassword] = useState("");

  const deletePasword = (event: any) => {
    setDPassword(event.target.value);
  };

  const showModal = (event: any) => {
    setDId(event.target.id);
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

  const onClickDelete = () => {
    deleteBoardComment({
      variables: {
        boardCommentId: dId,
        password: dPassword,
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
      deletePasword={deletePasword}
      showModal={showModal}
      onClickDelete={onClickDelete}
      Tog={Tog}
      onLoadMore={onLoadMore}
      isModalVisible={isModalVisible}
      data={data}
    />
  );
}
