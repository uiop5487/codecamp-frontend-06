import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailPresenter from "./detail.presenter";
import { FETCH_USED_ITEM } from "./detail.qurey";

export default function ProductDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  const onClickEditPage = () => {
    router.push(`/products/new/${router.query.productId}/edit`);
  };
  console.log(data);
  return (
    <ProductDetailPresenter data={data} onClickEditPage={onClickEditPage} />
  );
}
