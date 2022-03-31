import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

export const Warrper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

export const SearchWarrper = styled.div`
  padding-top: 80px;
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

export const BoardListWarrper = styled.div`
  padding-top: 40px;
`;

export const BoardList = styled.div`
  width: 1200px;
  height: 583px;
  border-top: 1px solid #000000;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const BoardListTilte = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 52px;
  justify-content: space-between;
  :hover {
    color: blue;
  }
`;

export const BoardListTitleName = styled.div`
  line-height: 52px;
  text-align: center;
  width: 80%;
`;

export const BoardListBasicTitle = styled.div`
  line-height: 52px;
  text-align: center;
  width: 20%;
`;

export const BoardListDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #bdbdbd;
  width: 100%;

  :hover {
    color: blue;
  }
`;

export const BoardListDetailName = styled.div`
  line-height: 52px;
  text-align: center;
  width: 80%;
  cursor: pointer;
`;

export const BoardListBasicName = styled.div`
  line-height: 52px;
  text-align: center;
  width: 20%;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const FooterWrapperCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 1200px;
`;

export const FooterWrapper = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 30px;
`;

export const FooterNumber = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterNumberText = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

export const SubmitButton = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  margin-left: 323px;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
