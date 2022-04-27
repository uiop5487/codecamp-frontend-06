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
`;

export const MoveBoardWrapper = styled.div`
  padding-top: 50px;
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

export const ButtonWrapper = styled.div`
  padding-bottom: 40px;
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

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 160px 0px 60px 20px;
  width: 384px;
`;

export const Title = styled.div`
  color: white;
  font-size: 35px;
  font-weight: 800;
`;

export const Icon = styled.div`
  background-color: white;
  padding: 3px 3px 3px 3px;
  border-radius: 5px;
  margin-right: 50px;
`;

export const InputWrapper = styled.div`
  padding-bottom: 44px;
`;

export const InputWrapper2 = styled.div`
  padding-bottom: 10px;
`;

export const Error = styled.div`
  color: red;
  padding-left: 10px;
  /* display: none; */
`;

export const CheckButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  padding-bottom: 40px;
`;

export const CheckButton = styled.div`
  color: white;
`;

export const CheckButtonText = styled.div`
  color: white;
  padding-left: 20px;
`;

export const FooterWrapper = styled.div`
  border-top: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px 0px 40px;
`;

export const FooterText = styled.div`
  color: white;
  cursor: pointer;
  :hover {
    color: #bdbdbd;
  }
`;
