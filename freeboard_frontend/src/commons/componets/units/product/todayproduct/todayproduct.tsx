import * as s from "./todayproduct.styles";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function TodayProdcut(props: any) {
  const [aa, setAa] = useState(false);
  const DATE = new Date().toISOString().slice(0, 10);

  const onClickDeleteBasket = (el) => (event) => {
    const basket = JSON.parse(localStorage.getItem(`${DATE}`) || "[]");

    const temp = basket.filter((bel) => bel._id !== el._id);

    localStorage.setItem(`${DATE}`, JSON.stringify(temp));
    setAa((prev) => !prev);
  };

  const onLoadMore = () => {};

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem(`${DATE}`) || "[]");
    props.setTodayDate(basket);
  }, [aa]);

  return (
    <s.Wrapper>
      <s.Body>
        <s.Title>오늘 본 상품</s.Title>
        <div style={{ width: "156px", height: "420px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.todayData.map((el) => (
              <s.ItemBox
                key={uuidv4()}
                id={el._id}
                // onClick={props.onClickMoveDetail(el)}
              >
                <s.ButtonWrapper>
                  <s.Button onClick={onClickDeleteBasket(el)}>X</s.Button>
                </s.ButtonWrapper>
                <s.LikeIconWrapper>
                  <s.LikeIcon src="/img/hearticon.png"></s.LikeIcon>
                  <s.LikeCount>{el.pickedCount}</s.LikeCount>
                </s.LikeIconWrapper>
                <s.ItemImageWrapper>
                  {el.images
                    .filter((e: string) => e)
                    .reduce(
                      (_, cur) => (
                        <s.ItemImage
                          key={uuidv4()}
                          src={`https://storage.googleapis.com/${cur}`}
                        ></s.ItemImage>
                      ),
                      []
                    )}
                </s.ItemImageWrapper>
                <s.ItemNameWrapper>
                  <s.ItemName>{el.name}</s.ItemName>
                  <s.ItemRemarks>{el.remarks}</s.ItemRemarks>
                </s.ItemNameWrapper>
                <div>
                  <s.ItemPrice>{el.price}</s.ItemPrice>
                </div>
                <s.TagsWrapper>
                  {el.tags?.map((el) => (
                    <s.Tags key={uuidv4()}>{el}</s.Tags>
                  ))}
                </s.TagsWrapper>
              </s.ItemBox>
            ))}
          </InfiniteScroll>
        </div>
      </s.Body>
    </s.Wrapper>
  );
}
