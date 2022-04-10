import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

export const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;

export const BoxWarrper = styled.div`
  width: 1200px;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 282px;
  height: 257px;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 15px 15px 0px 0px;
`;

export const TitleWrapper = styled.div`
  width: 282px;
  padding: 15px 20px 12px 20px;
`;

export const BoxTitle = styled.div`
  font-size: 18px;
  width: 250px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 20px;
`;

export const WriterImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const Writer = styled.div`
  font-size: 16px;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  padding: 5px 0px 0px 20px;
`;

export const SpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LikeCountWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LikeCountImg = styled.img`
  width: 20px;
  height: 18px;
  margin-bottom: 6px;
`;

export const LikeCount = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const ImgWraper = styled.div`
  height: 140px;
`;
