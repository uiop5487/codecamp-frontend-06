import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery, IUseditem } from "../../../../types/generated/types";
import BestProductPresenter from "./bestproduct.presenter";
import { FETCH_USED_ITEMS_OF_THE_BEST } from "./bestproduct.query";

export default function BestProductContainer() {
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEMS_OF_THE_BEST
  );
  const router = useRouter();
  const DATE = new Date().toISOString().slice(0, 10);

  const onClickMoveDetail =
    (el: IUseditem) => (event: MouseEvent<HTMLDivElement>) => {
      const basket = JSON.parse(localStorage.getItem(`${DATE}`) || "[]");

      const temp = basket.filter((bel: any) => bel._id === el._id);
      if (temp.length) {
        router.push(`/products/new/${event.currentTarget.id}`);
        return;
      }
      const { __typename, ...rest } = el;
      basket.push(rest);
      localStorage.setItem(`${DATE}`, JSON.stringify(basket));
      router.push(`/products/new/${event.currentTarget.id}`);
    };

  return (
    <BestProductPresenter data={data} onClickMoveDetail={onClickMoveDetail} />
  );
}
