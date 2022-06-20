import * as s from "./bestproduct.styles";
import { v4 as uuidv4 } from "uuid";
import { BestProductPresenterProps } from "./bestproduct.type";
import { IUseditem } from "../../../../types/generated/types";

export default function BestProductPresenter(props: BestProductPresenterProps) {
  return (
    <s.Wrapper>
      <s.BestTitleWrapper>
        <s.BestTitle>베스트 상품</s.BestTitle>
      </s.BestTitleWrapper>
      <s.BestWrapper>
        {props.data?.fetchUseditemsOfTheBest.map((el: IUseditem, i: number) => (
          <s.BestBoxWrapper
            key={uuidv4()}
            onClick={props.onClickMoveDetail(el)}
            id={el._id}
          >
            <s.BestImageWrapper>
              <s.BestImage
                src={`https://storage.googleapis.com/${
                  el.images?.filter((e: string) => e)[0]
                    ? el.images?.filter((e: string) => e)[0]
                    : "codecamp-file-storage/2022/6/20/noimage.png"
                }`}
              ></s.BestImage>
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
