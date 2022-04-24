import * as s from "./bestproduct.styles";

export default function BestProductPresenter(props: any) {
  return (
    <s.Wrapper>
      <s.BestTitleWrapper>
        <s.BestTitle>베스트 상품</s.BestTitle>
      </s.BestTitleWrapper>
      <s.BestWrapper>
        {props.data?.fetchUseditemsOfTheBest.map((el, i) => (
          <s.BestBoxWrapper
            key={el._id}
            onClick={props.onClickMoveDetail}
            id={el._id}
          >
            <s.BestImageWrapper>
              {el.images[i] ? (
                el.images
                  .filter((e: string) => e)
                  .reduce(
                    (_, cur) => (
                      <s.BestImage
                        key={cur}
                        src={`https://storage.googleapis.com/${cur}`}
                      ></s.BestImage>
                    ),
                    []
                  )
              ) : (
                <s.DefaultImg>asdasd</s.DefaultImg>
              )}

              {/* <s.BestImage></s.BestImage> */}
            </s.BestImageWrapper>
            <s.FooterWraper>
              <s.ItemTextWrapper>
                <s.ItemName>{el.name}</s.ItemName>
                <s.ItemRemark>{el.remarks}</s.ItemRemark>
                <s.ItemPrice>{el.price}</s.ItemPrice>
              </s.ItemTextWrapper>
              <s.LikeWrapper>
                <s.LikeIcon src="/img/hearticon.png"></s.LikeIcon>
                <s.LickCount>{el.pickedCount}</s.LickCount>
              </s.LikeWrapper>
            </s.FooterWraper>
          </s.BestBoxWrapper>
        ))}
      </s.BestWrapper>
    </s.Wrapper>
  );
}