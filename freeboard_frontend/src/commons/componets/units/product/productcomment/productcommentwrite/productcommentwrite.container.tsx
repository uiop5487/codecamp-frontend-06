import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ProductCommentWritePresenter from "./productcommentwrite.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./productcommentwrite.qurey";
import { ICommentData } from "./productcommentwrite.types";

export default function ProductCommentWriteContainer() {
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const router = useRouter();
  const { register, handleSubmit, formState, setValue } = useForm<ICommentData>(
    {
      mode: "onChange",
    }
  );

  const onClickSubmit = async (data: ICommentData) => {
    if (!data.contents) return;
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.productId),
          createUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      console.log(result);
      setValue("contents", "");
      Modal.success({ content: "등록완료" });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <ProductCommentWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
