import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductListPresenter from "./productlist.presenter";
import { FETCH_USED_ITEMS } from "./productlist.query";
export default function ProductListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS);

  const onClickMoveProductNew = () => {
    router.push("/products/new");
  };

  return (
    <ProductListPresenter
      onClickMoveProductNew={onClickMoveProductNew}
      data={data}
    />
  );
}
