import { Tooltip } from "antd";
import * as s from "./detail.styles";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import ProductCommentWriteContainer from "../productcomment/productcommentwrite/productcommentwrite.container";
import MapDetail from "../map/kakaomap";
import { v4 as uuidv4 } from "uuid";
import { IProductDetailPresenterProps } from "./detail.types";

export default function ProductDetailPresenter(
  props: IProductDetailPresenterProps
) {
  const router = useRouter();
  const settings = {
    customPaging: function (i: any) {
      return (
        <s.ImgWrapper>
          {(props.data?.fetchUseditem?.images && (
            <s.ImgBox
              src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images?.[i]}`}
            />
          )) || (
            <s.ImgWrapper>
              <s.ImgBox src="/img/noimage.png" />
            </s.ImgWrapper>
          )}
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
            <s.UserName>{props.data?.fetchUseditem?.seller?.name}</s.UserName>
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
          <s.HeartIcon
            src="/img/hearticon.png"
            onClick={props.onClickPickedCount}
          ></s.HeartIcon>
          <s.HeartCount>{props.data?.fetchUseditem.pickedCount}</s.HeartCount>
        </s.HeartIconWrapper>
      </s.HeaderWrapper2>
      <s.CrouselWrapper>
        <s.SliderCarousel {...settings}>
          {props.data?.fetchUseditem.images &&
            props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <s.Carousel key={uuidv4()}>
                  <s.CarouselImg src={`https://storage.googleapis.com/${el}`} />
                </s.Carousel>
              ))}
          <s.Carousel key={uuidv4()}>
            <s.CarouselImg src="/img/noimage.png" />
          </s.Carousel>
        </s.SliderCarousel>
      </s.CrouselWrapper>
      <s.ImgWrapper>
        <s.ImgBoxX></s.ImgBoxX>
      </s.ImgWrapper>
      <s.ContentsWrapper>
        {typeof window !== "undefined" ? (
          <s.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                String(props.data?.fetchUseditem?.contents)
              ),
            }}
          ></s.Contents>
        ) : (
          <s.Contents></s.Contents>
        )}
      </s.ContentsWrapper>
      <s.TagWrapper>
        {props.data?.fetchUseditem?.tags?.map((el: string) => (
          <s.Tag key={uuidv4()}>{el}</s.Tag>
        ))}
      </s.TagWrapper>
      {props.data?.fetchUseditem.useditemAddress?.address && (
        <s.MapWrapper>
          <div style={{ width: 792, height: 360 }}>
            <MapDetail data={props.data} />
          </div>
        </s.MapWrapper>
      )}
      {props.data?.fetchUseditem?.seller?.name ===
      props.userData?.fetchUserLoggedIn?.name ? (
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
      ) : (
        <s.ButtonWrapper>
          <s.Button onClick={props.onClickMoveToPage(`/products`)}>
            목록으로
          </s.Button>
          <s.ButtonCenter onClick={props.onClcikBuy}>구매하기</s.ButtonCenter>
        </s.ButtonWrapper>
      )}

      <ProductCommentWriteContainer />
    </s.BackGround>
  );
}
