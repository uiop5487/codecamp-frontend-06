import styled from "@emotion/styled";

interface IIsActive {
  isActive: boolean;
}

interface ICurrent {
  current: boolean;
}

export const MyPage = styled.div`
  width: 50px;
  text-align: center;
  cursor: pointer;
  color: ${(props: ICurrent) => (props.current === true ? "red" : "none")};
`;

export const BackGround = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NextButton = styled.button`
  border-radius: 15px;
  color: white;
  cursor: pointer;
  background-color: ${(props: IIsActive) =>
    props.isActive === true ? "none" : "darkred"};
`;
