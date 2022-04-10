import styled from "@emotion/styled";
import { Istyle } from "../../units/board/write/write-typescript";

export const UploadBtn = styled.button`
  box-sizing: border-box;
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
  font-size: 16px;
  margin-right: 24px;
  border: 1px solid black;
  cursor: pointer;
`;

export const UploadImg = styled.img`
  width: 78px;
  height: 78px;
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
