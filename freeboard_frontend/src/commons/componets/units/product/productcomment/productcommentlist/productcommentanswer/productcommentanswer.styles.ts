import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AnswerArrowWrapper = styled.div`
  padding-top: 10px;
`;

export const AnswerArrow = styled.img`
  width: 15px;
  height: 17px;
`;

export const BackGround = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderWarrper = styled.div`
  width: 1096px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CommentHeader = styled.div`
  padding-left: 14px;
`;

export const InputWarrper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
`;

export const CommentAreaWarrper = styled.div`
  padding-top: 20px;
  width: 1096px;
  /* border: 1px solid #bdbdbd; */
`;

export const CommentArea = styled.textarea`
  width: 1096px;
  height: 65px;
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
  width: 1096px;
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
  width: 1096px;
  padding-top: 40px;
`;
