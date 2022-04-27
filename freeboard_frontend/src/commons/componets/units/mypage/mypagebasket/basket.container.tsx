import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BasketPresenter from "./basket.presenter";
import { TOGGLE_USED_ITEM_PICK } from "./basket.query";

export default function BasketContainer() {
  const [basket, setBasket] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const router = useRouter();
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const onClickMoveDetail = (event) => {
    router.push(`/products/new/${event.currentTarget.id}`);
  };

  const onClickDelete = (el) => async (event) => {
    const basket = JSON.parse(localStorage.getItem(`basket`) || "[]");

    const temp = basket.filter((bel) => bel._id !== el._id);

    localStorage.setItem(`basket`, JSON.stringify(temp));
    setIsCheck((prev) => !prev);

    await toggleUseditemPick({
      variables: {
        useditemId: event.target.id,
      },
    });
  };

  useEffect(() => {
    const aaa = JSON.parse(localStorage.getItem(`basket`) || "[]");
    setBasket(aaa);
  }, [isCheck]);

  return (
    <BasketPresenter
      basket={basket}
      onClickMoveDetail={onClickMoveDetail}
      onClickDelete={onClickDelete}
    />
  );
}
