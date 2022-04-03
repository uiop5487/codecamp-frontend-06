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

export const SearchWarrper = styled.div`
  padding-top: 40px;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchBox = styled.input`
  width: 776px;
  height: 52px;
  border-radius: 15px;
  background-color: #f2f2f2;
`;

export const YearBox = styled.div`
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;
export const SearchButton = styled.button`
  width: 92px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;
  text-align: center;
  line-height: 52px;
`;

export const Img = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 15px 15px 0px 0px;
  background-size: cover;
  background-image: url("https://media.vlpt.us/images/kim-jaemin420/post/088bbdd3-3c5c-4520-b250-4e67da4e368b/%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3.png");
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
