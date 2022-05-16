import styled from "@emotion/styled";
import { Modal } from "antd";
import { useState } from "react";

const CustomModal = styled(Modal)`
  .ant-modal-body {
    height: 500px;
  }
`;

export default function () {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button onClick={showModal}>open modal</button>
      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="모달 커스텀 테스트"
      ></CustomModal>
    </div>
  );
}
