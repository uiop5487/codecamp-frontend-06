import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("./img/background1.jpeg");
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 500px;
`;

export const MoveButton = styled.button`
  width: 30%;
  height: 100px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #820909;
  color: darkred;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 1);
    color: #bdbdbd;
  }
`;
