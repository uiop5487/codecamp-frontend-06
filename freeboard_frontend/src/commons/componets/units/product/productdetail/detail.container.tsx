import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ProductDetailPresenter from "./detail.presenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./detail.qurey";

export default function ProductDetailContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  const onClickEditPage = () => {
    router.push(`/products/new/${router.query.productId}/edit`);
  };

  const onClickDelete = () => {
    try {
      deleteUseditem({
        variables: {
          useditemId: router.query.productId,
        },
      });
      alert("삭제되었습니다.");
      router.push(`/products`);
    } catch (error) {
      alert(error.messege);
    }
  };

  console.log(data);
  return (
    <ProductDetailPresenter
      data={data}
      onClickEditPage={onClickEditPage}
      onClickMoveToPage={onClickMoveToPage}
      onClickDelete={onClickDelete}
    />
  );
}
