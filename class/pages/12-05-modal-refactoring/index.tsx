import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <Button onClick={onToggleModal}>Open Modal</Button>

      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustomPage;

// import { useState } from "react";
// import { Modal, Button } from "antd";
// import DaumPostcode from "react-daum-postcode";

// const ModalCustomPage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const onOk = () => {
//     setIsOpen(false);
//   };

//   const onCancel = () => {
//     setIsOpen(false);
//   };

//   const showModal = () => {
//     setIsOpen(false);
//   };

//   const handleComplete = (data: any) => {
//     console.log(data);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <Button onClick={showModal}>Open Modal</Button>

//       {isOpen && (
//         <Modal visible={true} onOk={onOk} onCancel={onCancel}>
//           <DaumPostcode onComplete={handleComplete} />
//         </Modal>
//       )}
//     </>
//   );
// };

// export default ModalCustomPage;
