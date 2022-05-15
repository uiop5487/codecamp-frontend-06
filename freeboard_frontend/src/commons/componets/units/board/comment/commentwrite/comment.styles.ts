import styled from "@emotion/styled";
import { Rate } from "antd";

export const BackGround = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const StarIcon = styled(Rate)`
  margin-left: 20px;
`;

export const HeaderWarrper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CommentEmotion = styled.div``;

export const CommentHeader = styled.div`
  padding-left: 14px;
`;

export const InputWarrper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
`;

export const WriterInput = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
`;

export const PasswordInput = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  margin-left: 24px;
`;

export const RatingInput = styled.input`
  margin-left: 20px;
`;

export const CommentAreaWarrper = styled.div`
  padding-top: 20px;
  width: 1200px;
  /* border: 1px solid #bdbdbd; */
`;

export const CommentArea = styled.textarea`
  width: 1200px;
  height: 108px;
  padding: 20px 0px 0px 20px;
  border-top: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
`;

export const SumbitWarrper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  width: 1200px;
  height: 52px;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentAreaTextNum = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const SumbitButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const FooterWarrper = styled.div`
  width: 1200px;
  padding-top: 40px;
`;
