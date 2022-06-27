import styled from "@emotion/styled";
import { Rate } from "antd";

export const BackGround = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
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
  padding-bottom: 40px;
`;

export const Footer = styled.div`
  border-bottom: 1px solid #bdbdbd;
`;

export const Fetch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriterImg = styled.img``;

export const FetchWarrper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriterFetchWarrper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 4px;
  align-items: center;
`;

export const WriterFetchHeader = styled.div`
  padding-left: 16px;
`;

export const Writer = styled.div`
  padding-right: 18px;
  font-size: 16px;
  font-weight: 500;
`;

export const Rating = styled.div``;

export const Contents = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #424242;
`;

export const CreatedAt = styled.div`
  padding: 20px 0px 20px 56px;

  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
`;

export const EditDelteBtnWarrper = styled.div`
  /* width: 100%; */
`;

export const EditImg = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 16px;
  cursor: pointer;
`;

export const AnswerImg = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const DeleteImg = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 16px;
  cursor: pointer;
`;

interface IIsEdit {
  isEdit: boolean;
}

export const Editbox = styled.div`
  padding-top: 40px;
  display: ${(props: IIsEdit) => (props.isEdit ? "" : "none")};
`;

export const StarIcon = styled(Rate)`
  margin-left: 20px;
`;

export const EditCommentBackGround = styled.div`
  width: 1200px;
  padding-bottom: 40px;
`;

export const EditCommentWriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;

export const TextBoderSolid = styled.div`
  border: 1px solid black;
`;

export const EditCommentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  padding: 20px 0px 0px 20px;
`;

export const EditCommentPasswordInput = styled.input`
  padding-left: 10px;
  height: 50px;
  width: 200px;
`;

export const EditCommentWriter = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  font-size: 16px;
  font-weight: 700;
`;

export const EditButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  border-top: 1px solid black;
`;

export const EditCommentButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
`;

export const EditHeaderBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
