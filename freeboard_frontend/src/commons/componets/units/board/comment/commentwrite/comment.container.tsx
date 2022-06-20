import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentUI from "./comment.presenter";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./comment.query";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { ICommentData } from "./comment.types";

export default function Comment() {
  const [ratingValue, setRatingValue] = useState(0);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const { register, handleSubmit, setValue, watch } = useForm<ICommentData>({
    mode: "onChange",
  });
  const router = useRouter();

  const handleChange = (value: number) => {
    setRatingValue(value);
  };

  const submitBtn = async (commentData: ICommentData) => {
    try {
      const data = await createBoardComment({
        variables: {
          boardId: router.query.boardid,
          createBoardCommentInput: {
            ...commentData,
            rating: Number(ratingValue),
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
      setValue("writer", "");
      setValue("password", "");
      setValue("contents", "");
      setRatingValue(0);
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

  return (
    <CommentUI
      submitBtn={submitBtn}
      handleChange={handleChange}
      ratingValue={ratingValue}
      handleSubmit={handleSubmit}
      register={register}
      watch={watch}
    />
  );
}
