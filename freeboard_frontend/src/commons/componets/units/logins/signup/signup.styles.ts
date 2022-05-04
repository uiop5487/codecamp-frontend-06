import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url("/img/background1.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const MoveBoardWrapper = styled.div`
  width: 100%;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MoveBordListButton = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const Input = styled.input`
  width: 384px;
  height: 62px;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding-left: 20px;
  border: 2px solid #820909;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 384px;
  height: 62px;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #820909;
  color: white;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 1);
    color: #bdbdbd;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 28px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
`;

export const InputTitle = styled.div`
  color: white;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 16px;
`;

export const Error = styled.div`
  color: red;
  padding-left: 10px;
  /* display: none; */
`;
