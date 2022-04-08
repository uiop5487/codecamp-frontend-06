import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./write-mutation";
import WriteNewPageUI from "./write-presenter";
import { Modal } from "antd";
import { IMyBoardAdress, IMyVariables, IWriteNew } from "./write-typescript";
import {
  IBoard,
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../types/generated/types";

export default function WriteNewPage(props: IWriteNew) {
  const [refIndex, setRefIndex] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [imageActive, setImageActive] = useState(false);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [isActive, setIsActive] = useState(false);
  //여기는 자바스크립트

  const [fetchBoardInput, setFetchBoardInput] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
  });

  const [addressInput, setAddressInput] = useState({
    address: "",
    addressDetail: "",
    zipcode: "",
  });

  const [blankError, setBlankError] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onChangeValue = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFetchBoardInput({
      ...fetchBoardInput,
      [event.target.id]: String(event.target.value),
    });
    if (event.target.value !== "") {
      setBlankError({ ...blankError, [event.target.id]: "" });
    }
    if (props.isEdit ? fetchBoardInput.password : fetchBoardInput) {
      setIsActive(true);
    }
  };

  const onChangeAddressValue = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressInput({
      ...addressInput,
      [event.target.id]: String(event.target.value),
    });
    console.log(addressInput);
  };

  const handleComplete = (data: any) => {
    addressInput.address = data.address;
    addressInput.zipcode = data.zonecode;
    setIsModalVisible((prev) => !prev);
  };

  const sumbitModal = () => {
    setIsOpen((prev) => !prev);
  };

  const SubitButton = async () => {
    if (fetchBoardInput.writer === "") {
      blankError.writer = "작성자가 비어있습니다.";
      // setBlankError({ ...blankError, writer: "assaa" });
    }
    if (fetchBoardInput.password === "") {
      blankError.password = "비밀번호가 비어있습니다.";
    }
    if (fetchBoardInput.title === "") {
      blankError.title = "제목가 비어있습니다.";
    }
    if (fetchBoardInput.contents === "") {
      blankError.contents = "내용가 비어있습니다.";
    }
    try {
      const myData: any = await createBoard({
        variables: {
          createBoardInput: {
            ...fetchBoardInput,
            images: [imageUrl],
            boardAddress: { ...addressInput },
          },
        },
      });
      setIsOpen((prev) => !prev);
      console.log(myData);
      router.push(`/boards/new/${myData.data.createBoard._id}`);
    } catch (error: any) {
      Modal.error({
        content: error.message,
        onOk() {
          setIsOpen((prev) => !prev);
        },
      });
    }
  };

  const EditModal = () => {
    setIsOpen((prev) => !prev);
  };

  const editBtn = async () => {
    // if (!fetchBoardInput.title || !fetchBoardInput.contents) {
    //   Modal.error({
    //     content: "변경이 안됬습니다.",
    //     onOk() {
    //       setIsOpen((prev) => !prev);
    //     },
    //   });
    //   return;
    // }
    if (fetchBoardInput.password === "") {
      blankError.password = "비밀번호가 비어있습니다.";
      return;
    }
    if (fetchBoardInput.password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    try {
      const myVariables: IMyVariables = {};

      if (
        addressInput.zipcode !== "" ||
        addressInput.addressDetail !== "" ||
        addressInput.address !== ""
      ) {
        const myBoardAddress: IMyBoardAdress = {};
        myBoardAddress.address = addressInput.address;
        myBoardAddress.addressDetail = addressInput.addressDetail;
        myBoardAddress.zipcode = addressInput.zipcode;
        myVariables.boardAddress = myBoardAddress;
      }

      if (fetchBoardInput.title !== "")
        myVariables.title = fetchBoardInput.title;

      if (fetchBoardInput.contents !== "")
        myVariables.contents = fetchBoardInput.contents;

      if (fetchBoardInput.youtubeUrl !== "")
        myVariables.youtubeUrl = fetchBoardInput.youtubeUrl;

      if (imageUrl !== "") myVariables.images = [imageUrl];

      await updateBoard({
        variables: {
          updateBoardInput: {
            ...myVariables,
          },
          password: fetchBoardInput.password,
          boardId: String(router.query.boardid),
        },
      });
      setIsOpen((prev) => !prev);
      router.push(`/boards/new/${router.query.boardid}`);
    } catch (error: any) {
      Modal.error({
        content: error.message,
        onOk() {
          setIsOpen((prev) => !prev);
        },
      });
    }
  };
  const Toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleOk = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (refIndex === event.target.id) {
      const file = event.target.files?.[0];
      try {
        const result = await uploadFile({ variables: { file } });
        setImageUrl(result.data?.uploadFile.url);
        console.log(result.data?.uploadFile.url);
        setImageActive(true);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  const onClickImage = (event: any) => {
    fileRef.current?.click();
    setRefIndex(event.target.id);
    console.log(event.target.id);
  };

  return (
    <WriteNewPageUI
      editBtn={editBtn}
      isEdit={props.isEdit}
      isActive={isActive}
      data={props.data}
      SubitButton={SubitButton}
      isOpen={isOpen}
      sumbitModal={sumbitModal}
      EditModal={EditModal}
      Toggle={Toggle}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
      handleComplete={handleComplete}
      onChangeValue={onChangeValue}
      onChangeAddressValue={onChangeAddressValue}
      addressInput={addressInput}
      blankError={blankError}
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      imageUrl={imageUrl}
      fileRef={fileRef}
      imageActive={imageActive}
    />
  );
}
