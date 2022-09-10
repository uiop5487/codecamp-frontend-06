import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 400px;
  left: 1700px;
  width: 196px;
  height: 505px;
  /* border: 1px solid #bdbdbd; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
`;

export const Body = styled.div`
  position: absolute;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 20px;
`;

export const ItemBox = styled.div`
  width: 156px;
  height: 199px;
  border: 1px solid #bdbdbd;
  padding: 5px 10px 10px 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LikeIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const LikeIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const LikeCount = styled.div`
  font-weight: 500;
  font-size: 12px;
  margin-left: 5px;
`;

export const ItemImageWrapper = styled.div`
  padding-bottom: 12px;
  display: flex;
  justify-content: center;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
`;

export const ItemNameWrapper = styled.div`
  padding-bottom: 4px;
`;

export const ItemName = styled.div`
  font-weight: 500;
  font-size: 12px;
`;

export const ItemRemarks = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #4f4f4f;
`;

export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tags = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: #bdbdbd;
  margin-right: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Button = styled.button`
  width: 15px;
  height: 15px;
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
