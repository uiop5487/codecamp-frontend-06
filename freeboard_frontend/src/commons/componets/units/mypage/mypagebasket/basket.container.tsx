import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import BasketPresenter from "./basket.presenter";
import {
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
} from "./basket.query";

export default function BasketContainer() {
  const router = useRouter();
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const onClickMoveDetail = (event: any) => {
    router.push(`/products/new/${event.currentTarget.id}`);
  };

  const onClickDelete = async (event: any) => {
    await toggleUseditemPick({
      variables: {
        useditemId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEMS_I_PICKED,
          variables: { search: "", page: 1 },
        },
      ],
    });
  };

  return (
    <BasketPresenter
      onClickMoveDetail={onClickMoveDetail}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
}
