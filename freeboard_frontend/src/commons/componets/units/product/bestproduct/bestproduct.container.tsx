import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BestProductPresenter from "./bestproduct.presenter";
import { FETCH_USED_ITEMS_OF_THE_BEST } from "./bestproduct.query";

export default function BestProductContainer() {
  const { data } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  const router = useRouter();

  const onClickMoveDetail = (event) => {
    router.push(`/products/new/${event.currentTarget.id}`);
  };

  return (
    <BestProductPresenter data={data} onClickMoveDetail={onClickMoveDetail} />
  );
}
