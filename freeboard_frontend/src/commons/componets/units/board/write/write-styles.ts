import styled from "@emotion/styled";
import { Istyle } from "./write-typescript";

export const BackGround = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

export const Warpper = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 60px 100px 60px 100px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 16px;
`;

export const WriterWarpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 40px;
`;
export const SubtitleWrapper = styled.div`
  padding-bottom: 40px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
`;

export const PassWord = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterBox = styled.input`
  width: 486px;
  height: 52px;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 10px;
`;

export const SubtitleBox = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 10px;
`;

export const ContentBox = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 10px;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 16px;
`;

export const AdressBtnWrapper = styled.div`
  padding-bottom: 16px;
`;

export const AdressBtn = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AdressNum = styled.div`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  width: 77px;
  height: 52px;
  color: #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AdressBoxbtn = styled.button`
  box-sizing: border-box;
  width: 124px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  background-color: black;
  font-size: 16px;
  color: white;
  margin-left: 16px;
  cursor: pointer;
`;

export const AdressInputWrapper = styled.div`
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AdressInput = styled.input`
  width: 996px;
  height: 52px;
  /* color: #bdbdbd; */
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding-left: 15px;
  /* margin-bottom: 30px; */
`;
export const LinkWrapper = styled.div`
  padding-top: 37px;
  padding-bottom: 40px;
`;

export const UploadWrapper = styled.div`
  padding-bottom: 40px;
`;

export const LinkInput = styled.input`
  width: 996px;
  height: 46px;
  /* color: #bdbdbd; */
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 10px;
`;

export const UploadBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UploadBtn = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: row;
  margin-right: 24px;
`;

export const Plus = styled.input`
  font-size: 14px;
  font-weight: 700;
  color: #4f4f4f;
  display: none;
`;

export const Upload = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #4f4f4f;
  margin-top: 4px;
`;

export const RadioBtnWrapper = styled.div`
  padding-bottom: 80px;
`;
export const SignupBtn = styled.button`
  box-sizing: border-box;
  width: 179px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;

  background-color: ${(props: Istyle) => (props.isActive ? "#ffd600" : "none")};
`;

export const SignupbtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RadioBtn = styled.input`
  font-size: 16px;
  margin-right: 10px;
`;
export const RadioBtntext = styled.span`
  font-size: 16px;
  margin-right: 5px;
`;

export const RadioBtntext2 = styled.span`
  font-size: 16px;
`;
export const RadioBtnbox = styled.div``;

export const ErrorBox = styled.div`
  color: red;
  padding: 5px 0px 0px 5px;
  font-size: 16px;
`;
