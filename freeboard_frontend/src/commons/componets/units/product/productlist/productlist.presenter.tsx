import * as s from "./productlist.styles";
import InfiniteScroll from "react-infinite-scroller";
import TodayProdcut from "../todayproduct/todayproduct";
import { v4 as uuidv4 } from "uuid";
import { IProductListPresenterProps } from "./productlist.types";

export default function ProductListPresenter(
  props: IProductListPresenterProps
) {
  return (
    <s.Wrapper>
      <s.HeaderWrapper>
        <s.HeaderTextWrapper>
          <s.HeaderText
            isSoldout={props.isSoldout}
            onClick={props.onClickSoldOut}
          >
            판매중상품
          </s.HeaderText>
          <s.HeaderText2
            isSoldout={props.isSoldout}
            onClick={props.onClickSoldOut}
          >
            판매된상품
          </s.HeaderText2>
        </s.HeaderTextWrapper>
        <s.SearchWrapper>
          <s.SearchInput type="text" />
          <s.DateInput type="text" />
          <s.SearchButton>검색</s.SearchButton>
        </s.SearchWrapper>
      </s.HeaderWrapper>
      {props.data?.fetchUseditems ? (
        <div style={{ width: "1200px", height: "1000px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
              <s.UsedItemWrapper
                key={uuidv4()}
                id={el._id}
                onClick={props.onClickMoveDetail(el)}
              >
                <s.UsedIemtLeftWrapper>
                  <s.ItemImageWrapper>
                    <s.ItemImgae
                      key={uuidv4()}
                      src={`https://storage.googleapis.com/${
                        el.images.filter((e: string) => e)[0]
                          ? el.images.filter((e: string) => e)[0]
                          : "codecamp-file-storage/2022/6/20/noimage.png"
                      }`}
                    ></s.ItemImgae>
                  </s.ItemImageWrapper>
                  <s.UsedItemTextWrapper>
                    <s.ProductName>{el.name}</s.ProductName>
                    <s.Remarks>{el.remarks}</s.Remarks>
                    <s.TagsWrapper>
                      {el.tags?.map((el: any) => (
                        <s.Tags key={uuidv4()}>{el}</s.Tags>
                      ))}
                    </s.TagsWrapper>
                    <s.UserIconWrapper>
                      <s.UserIcon src="/img/userimg.png"></s.UserIcon>
                      <s.UserName>{el.seller.name}</s.UserName>
                      <s.HeartIcon src="/img/hearticon.png"></s.HeartIcon>
                      <s.HeartText>{el.pickedCount}</s.HeartText>
                    </s.UserIconWrapper>
                  </s.UsedItemTextWrapper>
                </s.UsedIemtLeftWrapper>
                <s.RightWrapper>
                  <s.PriceWrapper>
                    <s.Dicon src="/img/priceicon.png"></s.Dicon>
                    <s.Price>{el.price}</s.Price>
                  </s.PriceWrapper>
                  <s.PriceBootom></s.PriceBootom>
                </s.RightWrapper>
              </s.UsedItemWrapper>
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <div></div>
      )}

      <s.ButtonWrapper>
        <s.Button onClick={props.onClickMoveProductNew}>
          상품등록하러가기
        </s.Button>
      </s.ButtonWrapper>
      <TodayProdcut
        todayData={props.todayData}
        setTodayDate={props.setTodayDate}
        onClickMoveDetail={props.onClickMoveDetail}
      />
    </s.Wrapper>
  );
}
