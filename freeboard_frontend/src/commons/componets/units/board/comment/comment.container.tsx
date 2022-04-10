import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../types/generated/types";
import CommentUI from "./comment.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./comment.query";
import { Modal } from "antd";

const Comment = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dId, setDId] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [dPassword, setDPassword] = useState("");
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardid) },
  });
  console.log(data);

  const saveWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const saveContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const deletePasword = (event: any) => {
    setDPassword(event.target.value);
  };
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        boardId: router.query.boardid,
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
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
  const sumbitBtn = async () => {
    try {
      const data = await createBoardComment({
        variables: {
          boardId: router.query.boardid,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: Number(value),
          },
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
      setWriter("");
      setContents("");
      setPassword("");
      setValue(0);
      Modal.success({
        content: "등록되었습니다.",
      });
      console.log(data);
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const showModal = (event: any) => {
    setDId(event.target.id);
    setIsModalVisible((prev) => !prev);
  };

  const Tog = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onClickDelete = (event: MouseEvent) => {
    // const password = prompt("비밀번호를 입력하세요");
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

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <CommentUI
      saveWriter={saveWriter}
      savePassword={savePassword}
      saveContents={saveContents}
      sumbitBtn={sumbitBtn}
      onClickDelete={onClickDelete}
      isEdit={isEdit}
      data={data}
      handleChange={handleChange}
      value={value}
      writer={writer}
      password={password}
      contents={contents}
      isModalVisible={isModalVisible}
      showModal={showModal}
      dPassword={dPassword}
      deletePasword={deletePasword}
      Tog={Tog}
      onLoadMore={onLoadMore}
    />
  );
};

export default Comment;
