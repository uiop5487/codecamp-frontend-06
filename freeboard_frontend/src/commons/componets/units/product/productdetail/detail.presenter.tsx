import { Tooltip } from "antd";
import * as s from "./detail.styles";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import ProductCommentWriteContainer from "../productcomment/productcommentwrite/productcommentwrite.container";

export default function ProductDetailPresenter(props: any) {
  const router = useRouter();
  const settings = {
    customPaging: function (i) {
      return (
        <s.ImgWrapper>
          <s.ImgBox
            src={`https://storage.googleapis.com/${props.data.fetchUseditem.images[i]}`}
          />
        </s.ImgWrapper>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <s.BackGround>
      <s.HeaderWrapper>
        <s.UserWrapper>
          <s.UserIcon src="/img/userimg.png"></s.UserIcon>
          <s.UserDetailWrapper>
            <s.UserName>{props.data?.fetchUseditem.seller.name}</s.UserName>
            <s.CreatedAt>
              {props.data?.fetchUseditem.createdAt.slice(0, 10)}
            </s.CreatedAt>
          </s.UserDetailWrapper>
        </s.UserWrapper>
        <s.LinkWrapper>
          <s.LinkIcon src="/img/link.png"></s.LinkIcon>
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
          >
            <s.LocationIcon src="/img/location.png"></s.LocationIcon>
          </Tooltip>
        </s.LinkWrapper>
      </s.HeaderWrapper>
      <s.HeaderWrapper2>
        <s.RemarkWrapper>
          <s.Remark>{props.data?.fetchUseditem.remarks}</s.Remark>
          <s.ItemName>{props.data?.fetchUseditem.name}</s.ItemName>
          <s.Price>{props.data?.fetchUseditem.price}원</s.Price>
        </s.RemarkWrapper>
        <s.HeartIconWrapper>
          <s.HeartIcon src="/img/hearticon.png"></s.HeartIcon>
          <s.HeartCount>{props.data?.fetchUseditem.pickedCount}</s.HeartCount>
        </s.HeartIconWrapper>
      </s.HeaderWrapper2>
      <s.CrouselWrapper>
        <s.SliderCarousel {...settings}>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <s.Carousel key={el}>
                <s.CarouselImg src={`https://storage.googleapis.com/${el}`} />
              </s.Carousel>
            ))}
        </s.SliderCarousel>
      </s.CrouselWrapper>
      <s.ImgWrapper>
        <s.ImgBoxX></s.ImgBoxX>
      </s.ImgWrapper>
      <s.ContentsWrapper>
        {typeof window !== "undefined" ? (
          <s.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          ></s.Contents>
        ) : (
          <s.Contents></s.Contents>
        )}
      </s.ContentsWrapper>
      <s.TagWrapper>
        <s.Tag>{props.data?.fetchUseditem.tags[0]}</s.Tag>
        <s.Tag>{props.data?.fetchUseditem.tags[1]}</s.Tag>
        <s.Tag>{props.data?.fetchUseditem.tags[2]}</s.Tag>
      </s.TagWrapper>
      <s.MapWrapper>
        <s.Map></s.Map>
      </s.MapWrapper>
      <s.ButtonWrapper>
        <s.Button onClick={props.onClickMoveToPage(`/products`)}>
          목록으로
        </s.Button>
        <s.ButtonCenter
          onClick={props.onClickMoveToPage(
            `/products/new/${router.query.productId}/edit`
          )}
        >
          수정하기
        </s.ButtonCenter>
        <s.Button onClick={props.onClickDelete}>삭제하기</s.Button>
      </s.ButtonWrapper>
      <ProductCommentWriteContainer />
    </s.BackGround>
  );
}