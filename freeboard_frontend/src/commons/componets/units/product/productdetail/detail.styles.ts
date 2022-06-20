import styled from "@emotion/styled";
import Slider from "react-slick";

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 792px;
  padding-top: 82px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 22px;
  border-bottom: 1px solid #bdbdbd;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const UserDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const CreatedAt = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #828282;
`;

export const LinkWrapper = styled.div``;

export const LinkIcon = styled.img`
  width: 20px;
  height: 10px;
`;

export const LocationIcon = styled.img`
  width: 14px;
  height: 20px;
  margin-left: 15px;
  cursor: pointer;
`;

export const HeaderWrapper2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 80px;
`;

export const RemarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Remark = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #bdbdbd;
  padding-bottom: 4px;
`;

export const ItemName = styled.div`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 8px;
  color: #4f4f4f;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const HeartIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 13px;
`;

export const HeartIcon = styled.img`
  width: 30px;
  height: 27.5px;
`;

export const HeartCount = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 18px;
`;

export const CrouselWrapper = styled.div`
  width: 384px;
  height: 384px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const SliderCarousel = styled(Slider)`
  width: 384px;
  height: 480px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .slick-prev {
    left: 0px;
    z-index: 10;
  }
  .slick-next {
    right: 15px;
    z-index: 10;
  }
  .slick-next:before {
    color: black; // arrow 색상 변경
    font-size: 40px; // arrow 크기 변경
  }

  .slick-prev:before {
    color: black;
    font-size: 40px;
  }
  .slick-track:before {
    width: 384px;
  }
  .slick-dots {
    position: absolute;
    bottom: -25px;
    right: 20px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 35px;
    padding: 0;

    cursor: pointer;
  }
`;

export const Carousel = styled.div`
  width: 384px;
  height: 384px;
  padding-top: 50px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CarouselImgWrapper = styled.div``;

export const CarouselImg = styled.img`
  width: 296px;
  height: 296px;
`;

export const ImgWrapper = styled.a`
  display: flex;
  flex-direction: row;
  padding-bottom: 80px;
`;

export const ImgBox = styled.img`
  width: 78px;
  height: 78px;
  border: 1px solid black;
`;

export const ImgBoxX = styled.div`
  width: 78px;
  height: 78px;
  border: 0px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
`;

export const Contents = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Tag = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  margin-right: 5px;
`;

export const MapWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 76px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Map = styled.div`
  width: 100%;
  height: 360px;
  background-color: red;
`;

export const ButtonWrapper = styled.div`
  padding-top: 84px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonCenter = styled.button`
  width: 179px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  margin: 0px 10px 0px 10px;
  cursor: pointer;
  :hover {
    background-color: darkred;
    color: white;
  }
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: darkred;
    color: white;
  }
`;
