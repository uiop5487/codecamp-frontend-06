import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./write-mutation";
import WriteNewPageUI from "./write-presenter";
import { Modal } from "antd";
import { IMyBoardAdress, IMyVariables, IWriteNew } from "./write-typescript";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../types/generated/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const createSchema = yup.object({
  writer: yup.string().required("작성자는 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
  title: yup.string().required("제목은 필수 입력 사항입니다."),
  contents: yup.string().required("내용은 필수 입력 사항입니다."),
});

const editSchema = yup.object({
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
});

export default function WriteNewPage(props: IWriteNew) {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: props.isEdit
      ? yupResolver(editSchema)
      : yupResolver(createSchema),
    mode: "onChange",
  });
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [addressInput, setAddressInput] = useState({
    address: "",
    addressDetail: "",
    zipcode: "",
  });
  const [imageUrls, setImageUrls] = useState([""]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeAddressValue = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressInput({
      ...addressInput,
      [event.target.id]: String(event.target.value),
    });
  };

  const handleComplete = (data: any) => {
    addressInput.address = data.address;
    addressInput.zipcode = data.zonecode;
    setIsModalVisible((prev) => !prev);
  };

  const sumbitModal = () => {
    setIsOpen((prev) => !prev);
  };

  const SubmitButton = async (data: any) => {
    try {
      const myData: any = await createBoard({
        variables: {
          createBoardInput: {
            ...data,
            images: imageUrls,
            boardAddress: { ...addressInput },
          },
        },
      });
      Modal.success({
        content: "상품이 등록되었습니다.",
        onOk() {
          setIsOpen((prev) => !prev);
        },
      });
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

  const editBtn = async (data: any) => {
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

      if (data.title !== "") myVariables.title = data.title;

      if (data.contents !== "") myVariables.contents = data.contents;

      if (data.youtubeUrl !== "") myVariables.youtubeUrl = data.youtubeUrl;

      if (imageUrls) myVariables.images = imageUrls;

      await updateBoard({
        variables: {
          updateBoardInput: {
            ...myVariables,
          },
          password: data.password,
          boardId: String(router.query.boardid),
        },
      });
      Modal.success({
        content: "상품이 수정되었습니다.",
        onOk() {
          setIsOpen((prev) => !prev);
        },
      });
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

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onChangeFileUrl = (imageUrl: any) => {
    setImageUrls((prev) => [imageUrl, ...prev]);
  };

  const onChangeEditFileUrl = (imageUrl: any, index: number) => {
    const fileUrl = [...imageUrls];
    fileUrl[index] = imageUrl;
    setImageUrls(fileUrl);
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setImageUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <WriteNewPageUI
      editBtn={editBtn}
      isEdit={props.isEdit}
      data={props.data}
      SubmitButton={SubmitButton}
      isOpen={isOpen}
      sumbitModal={sumbitModal}
      EditModal={EditModal}
      showModal={showModal}
      isModalVisible={isModalVisible}
      handleComplete={handleComplete}
      onChangeAddressValue={onChangeAddressValue}
      addressInput={addressInput}
      onChangeFileUrl={onChangeFileUrl}
      imageUrls={imageUrls}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeEditFileUrl={onChangeEditFileUrl}
    />
  );
}
