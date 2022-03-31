import { Modal } from "antd";

const ModalAlertPage = () => {
  const onClickSuccessButton = () => {
    Modal.success({
      content: "게시물 등록에 성공했습니다.",
    });
  };

  const onClickFailButton = () => {
    Modal.error({
      title: "게시물 등록에 실패하였습니다.",
      content: "비밀번호가 틀렸습니다.",
    });
  };
  return (
    <div>
      <button onClick={onClickSuccessButton}>성공~~!</button>
      <button onClick={onClickFailButton}>실패</button>
    </div>
  );
};
export default ModalAlertPage;
