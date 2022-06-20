import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 62px 360px 58px 360px;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 14px;
  border-radius: 18px;
  cursor: pointer;
`;

export const HeaderText = styled.div`
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SignupButton = styled.div`
  width: 92px;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  background-color: darkred;
  text-align: center;
  line-height: 44px;
  border-radius: 14px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #944343;
  }
`;

export const LoginButton = styled.div`
  line-height: 44px;
  padding-right: 20px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.div`
  line-height: 44px;
  padding-right: 20px;
  background-color: white;
  font-size: 16px;
  padding-left: 15px;
  cursor: pointer;
  :hover {
    color: darkred;
    font-weight: 900;
  }
`;

export const UserIcon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const TrueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BasketButton = styled.button`
  cursor: pointer;
  margin-right: 20px;
  :hover {
    background-color: darkred;
    color: white;
  }
`;

export const PaymentButton = styled.button`
  cursor: pointer;
  :hover {
    background-color: darkred;
    color: white;
  }
`;

export const CutomModal = styled(Modal)`
  width: 500px;
  height: 500px;
`;

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PaymentTextWrapper = styled.div`
  padding-bottom: 30px;
`;

export const PaymentText = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const PaymentSelection = styled.select`
  width: 384px;
  height: 50px;
  font-size: 16px;
  padding-left: 10px;
`;

export const PaymentOption = styled.option`
  font-weight: 700;
  font-size: 16px;
`;

export const PointText = styled.div`
  padding-right: 15px;
`;
