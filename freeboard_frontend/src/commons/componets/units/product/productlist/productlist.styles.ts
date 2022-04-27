import styled from "@emotion/styled";

interface IIsSoldOut {
  isSoldout: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  width: 1200px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid #bdbdbd;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
`;

export const HeaderText = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-right: 20px;
  color: ${(props: IIsSoldOut) => (props.isSoldout ? "#4F4F4F" : "black")};
  border-bottom: ${(props: IIsSoldOut) =>
    props.isSoldout ? "none" : "3px solid #FFD600"};
  cursor: pointer;
`;

export const HeaderText2 = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${(props: IIsSoldOut) => (props.isSoldout ? "black" : "#4F4F4F")};
  border-bottom: ${(props: IIsSoldOut) =>
    props.isSoldout ? "3px solid #FFD600" : "none"};
  cursor: pointer;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 282px;
  height: 52px;
`;

export const DateInput = styled.input`
  width: 282px;
  height: 52px;
  margin-left: 24px;
`;

export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  margin-left: 24px;
`;

export const UsedItemWrapper = styled.div`
  width: 100%;
  height: 200px;
  padding-bottom: 20px;
  padding-top: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  :hover {
    background-color: #fbfbfb;
  }
`;

export const UsedIemtLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemImageWrapper = styled.div`
  margin-right: 40px;
`;

export const ItemImgae = styled.img`
  width: 160px;
  height: 160px;
`;

export const UsedItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  font-weight: 500;
  font-size: 24px;
  padding-bottom: 4px;
`;

export const Remarks = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  padding-bottom: 8px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  padding-bottom: 24px;
`;

export const Tags = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  margin-right: 5px;
`;

export const UserIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-right: 22px;
`;

export const HeartIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const HeartText = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SoldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-right: 10px;
`;

export const SoldText = styled.div`
  padding-top: 10px;
  font-size: 16px;
  color: darkred;
`;

export const Dicon = styled.img`
  width: 18px;
  height: 18px;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-left: 11px;
`;

export const PriceBootom = styled.div`
  padding-bottom: 10px;
`;

export const ItemWrapper = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid #bdbdbd;
`;

export const Button = styled.button`
  width: 124px;
  height: 52px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: darkred;
  }
`;
