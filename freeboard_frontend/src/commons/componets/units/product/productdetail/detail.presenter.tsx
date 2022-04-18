import { Tooltip } from "antd";
import * as s from "./detail.styles";

export default function ProductDetailPresenter(props: any) {
  const settings = {
    dots: true,
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
            <s.UserName>판매자</s.UserName>
            <s.CreatedAt>
              {props.data?.fetchUseditem.createdAt.slice(0, 10)}
            </s.CreatedAt>
          </s.UserDetailWrapper>
        </s.UserWrapper>
        <s.LinkWrapper>
          <s.LinkIcon src="/img/link.png"></s.LinkIcon>
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchUseditem.useditemAddress.address} ${props.data?.fetchUseditem.useditemAddress.addressDetail}`}
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
        <s.HeartIcon src="/img/hearticon.png"></s.HeartIcon>
      </s.HeaderWrapper2>
      <s.CrouselWrapper>
        <s.SliderCarousel {...settings}>
          {" "}
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <s.Carousel key={el}>
                <s.CarouselImg
                  src={`https://storage.googleapis.com/${el}`}
                ></s.CarouselImg>
              </s.Carousel>
            ))}
        </s.SliderCarousel>
      </s.CrouselWrapper>
      <s.ImgWrapper>
        {props.data?.fetchUseditem.images
          ?.filter((el: string) => el)
          .map((el: string) => (
            <s.ImgBox
              src={`https://storage.googleapis.com/${el}`}
              key={el}
            ></s.ImgBox>
          ))}
      </s.ImgWrapper>
      <s.ContentsWrapper>
        <s.Contents>{props.data?.fetchUseditem.contents}</s.Contents>
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
        <s.Button>목록으로</s.Button>
        <s.ButtonCenter></s.ButtonCenter>
        <s.Button onClick={props.onClickEditPage}>구매하기</s.Button>
      </s.ButtonWrapper>
    </s.BackGround>
  );
}
