import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

export const BestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

export const BestTitleWrapper = styled.div`
  padding-bottom: 40px;
`;

export const BestTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const BestBoxWrapper = styled.div`
  width: 282px;
  height: 391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    background-color: #fbfbfb;
  }
`;

export const BestImageWrapper = styled.div`
  padding-bottom: 20px;
`;

export const BestImage = styled.img`
  width: 242px;
  height: 242px;
`;

export const DefaultImg = styled.div`
  width: 242px;
  height: 242px;
  background-size: contain;
  background-image: url("/img/default.png");
`;

export const FooterWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ItemTextWrapper = styled.div``;

export const ItemName = styled.div`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 4px;
`;

export const ItemRemark = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
  margin-bottom: 12px;
`;

export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const LickCount = styled.div`
  font-weight: 400;
  font-size: 16px;
`;
