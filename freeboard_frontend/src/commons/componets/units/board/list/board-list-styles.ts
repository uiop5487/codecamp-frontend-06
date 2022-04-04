import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Warrper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  justify-content: space-between;
  width: 1200px;
`;

export const FooterWrapper = styled.span`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
`;

export const SubmitButton = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const CenterButton = styled.div`
  width: 171px;
  height: 52px;
`;
