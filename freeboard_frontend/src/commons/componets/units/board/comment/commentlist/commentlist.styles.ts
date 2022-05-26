import styled from "@emotion/styled";
import { Rate } from "antd";
import { IIsEdit } from "./commentlist.types";

export const Footer = styled.div`
  padding-bottom: 20px;
`;

export const Fetch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

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

export const WriterImg = styled.img``;

export const Writer = styled.div`
  padding-right: 18px;
  font-size: 16px;
  font-weight: 500;
`;

export const EditDelteBtnWarrper = styled.div`
  /* width: 100%; */
`;

export const EditImg = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Editbox = styled.div`
  padding-top: 40px;
  display: ${(props: IIsEdit) => (props.isEdit ? "" : "none")};
`;

export const Contents = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #424242;
`;

export const CreatedAt = styled.div`
  padding: 20px 0px 20px 56px;
  border-bottom: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
`;

export const EditCommentBackGround = styled.div`
  width: 1200px;
  padding-bottom: 40px;
`;

export const EditHeaderBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EditCommentWriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;

export const EditCommentWriter = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  font-size: 16px;
  font-weight: 700;
`;

export const EditCommentPasswordInput = styled.input`
  padding-left: 10px;
  height: 50px;
  width: 200px;
`;

export const StarIcon = styled(Rate)`
  margin-left: 20px;
`;

export const DeleteImg = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 16px;
  cursor: pointer;
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

export const EditButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  border-top: 1px solid black;
`;

export const EditCommentButton = styled.div`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
`;
