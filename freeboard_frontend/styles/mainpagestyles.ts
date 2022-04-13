import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("./img/background1.jpeg");
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 500px;
`;

export const MoveButton = styled.div`
  width: 3000px;
  height: 100px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  color: darkred;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
