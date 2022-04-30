import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductListPresenter from "./productlist.presenter";
import { FETCH_USED_ITEMS } from "./productlist.query";
export default function ProductListContainer() {
  const router = useRouter();
  const [isSoldout, setIsSoldout] = useState(false);
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: isSoldout,
    },
  });
  const [todayData, setTodayDate] = useState([]);
  const [aa, setAa] = useState(false);
  const DATE = new Date().toISOString().slice(0, 10);

  const onClickMoveProductNew = () => {
    router.push("/products/new");
  };

  const onClickMoveDetail = (el) => (event) => {
    const basket = JSON.parse(localStorage.getItem(`${DATE}`) || "[]");

    const temp = basket.filter((bel) => bel._id === el._id);
    if (temp.length) {
      router.push(`/products/new/${event.currentTarget.id}`);
      return;
    }
    const { __typename, ...rest } = el;
    basket.push(rest);
    localStorage.setItem(`${DATE}`, JSON.stringify(basket));
    setAa((prev) => !prev);
    console.log(aa);
    router.push(`/products/new/${event.currentTarget.id}`);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(`${DATE}`) || "[]");
    setTodayDate(data);
  }, []);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickSoldOut = () => {
    setIsSoldout((prev) => !prev);
  };

  return (
    <ProductListPresenter
      onClickMoveProductNew={onClickMoveProductNew}
      data={data}
      onLoadMore={onLoadMore}
      onClickMoveDetail={onClickMoveDetail}
      todayData={todayData}
      setTodayDate={setTodayDate}
      onClickSoldOut={onClickSoldOut}
      isSoldout={isSoldout}
    />
  );
}
