import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./write-mutation";
import WriteNewPageUI from "./write-presenter";
import { Modal } from "antd";
import {
  IMyBoardAdress,
  IMyVariables,
  IWriteData,
  IWriteEdit,
  IWriteNew,
} from "./write-typescript";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../types/generated/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BoardCreateSchema,
  BoardEditSchema,
} from "../../../commons/libraries/validation";
import { Address } from "react-daum-postcode";

export default function WriteNewPage(props: IWriteNew) {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<
    IWriteData | IWriteEdit
  >({
    resolver: props.isEdit
      ? yupResolver(BoardEditSchema)
      : yupResolver(BoardCreateSchema),
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

  const handleComplete = (data: Address) => {
    console.log(data);
    addressInput.address = data.address;
    addressInput.zipcode = data.zonecode;
    setIsModalVisible((prev) => !prev);
  };

  const sumbitModal = () => {
    setIsOpen((prev) => !prev);
  };

  const SubmitButton = async (data: IWriteData) => {
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

  const editBtn = async (data: IWriteEdit) => {
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

  const onChangeFileUrl = (imageUrl: string) => {
    setImageUrls((prev) => [imageUrl, ...prev]);
  };

  const onChangeEditFileUrl = (imageUrl: string, index: number) => {
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
