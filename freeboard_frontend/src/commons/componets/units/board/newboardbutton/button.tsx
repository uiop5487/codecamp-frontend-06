import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";

export const SubmitButton = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  /* margin-left: 323px; */
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

const NewButton = () => {
  const router = useRouter();
  const onClickMoveNew = () => {
    Modal.success({
      content: "게시글작성 페이지로 이동",
      onOk() {
        router.push("/boards/new");
      },
    });
  };

  return <SubmitButton onClick={onClickMoveNew}>게시글 작성</SubmitButton>;
};

export default NewButton;
