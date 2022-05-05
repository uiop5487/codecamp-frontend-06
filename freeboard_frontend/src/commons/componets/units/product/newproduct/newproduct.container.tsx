import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { KeyboardEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./newproduct.mutation";
import NewProductPresenter from "./newproduct.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력 사항입니다."),
  contents: yup.string().required("상품설명은 필수 입력 사항입니다."),
  price: yup.string().required("판매가격은 필수 입력 사항입니다."),
});

export default function NewProductContainer(props: any) {
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [contents] = useState("");
  const [hashArr, setHashArr] = useState<String[]>([]);
  const [imageUrls, setImageUrls] = useState(["", ""]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [mapLatlng, setMapLatlng] = useState({
    lat: "",
    lng: "",
  });

  const onChangeHashTag = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      event.keyCode === 32 &&
      (event.target as HTMLInputElement).value !== " "
    ) {
      // let aaa = ;
      setHashArr([...hashArr, "#" + (event.target as HTMLInputElement).value]);
      (event.target as HTMLInputElement).value = "";
    }
  };

  const onClickSubmit = async (data: any) => {
    console.log(parseFloat(mapLatlng.lat));
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            price: Number(data.price),
            images: imageUrls,
            tags: [...hashArr],
            useditemAddress: {
              address: data.useditemAddress.address,
              lat: parseFloat(mapLatlng.lat),
              lng: parseFloat(mapLatlng.lng),
            },
          },
        },
      });
      console.log(result);
      alert("등록이 완료되었습니다.");
      router.push(`/products/new/${result.data.createUseditem._id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleOk = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setAddress(data.address);
    setValue("useditemAddress.address", data.address);

    setIsModalVisible((prev) => !prev);
  };

  const onChangeContents = (value: any) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickEdit = async (data: any) => {
    if (
      data.name === props.data?.fetchUseditem?.name &&
      data.contents === props.data?.fetchUseditem?.contents &&
      Number(data.price) === props.data?.fetchUseditem?.price &&
      data.remarks === props.data?.fetchUseditem?.remarks
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }
    try {
      // let arr;
      // if (hashArr[0] !== "") {
      //   arr = props.data?.fetchUseditem?.tags;
      // }
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.productId,
          updateUseditemInput: {
            ...data,
            price: Number(data.price),
            tags: [...hashArr],
            images: imageUrls,
            useditemAddress: {
              ...data.useditemAddress,
              lat: Number(mapLatlng.lat),
              lng: Number(mapLatlng.lng),
            },
          },
        },
      });
      console.log(result);
      alert("수정이 완료되었습니다.");
      router.push(`/products/new/${router.query.productId}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onChangeFileUrl = (imageUrl: any, index: number) => {
    const fileUrl = [...imageUrls];
    fileUrl[index] = imageUrl;
    setImageUrls(fileUrl);
  };

  useEffect(() => {
    reset({ contents: props.data?.fetchUseditem.contents });
    if (props.data?.fetchUseditem.images?.length) {
      setImageUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data?.fetchUseditem.images]);

  useEffect(() => {
    setValue("name", props.data?.fetchUseditem?.name);
    setValue("remarks", props.data?.fetchUseditem?.remarks);
    setValue("price", props.data?.fetchUseditem?.price);
    setValue("tags", props.data?.fetchUseditem?.tags);
    setValue(
      "useditemAddress.addressDetail",
      props.data?.fetchUseditem.useditemAddress.addressDetail
    );
    setAddress(props.data?.fetchUseditem.useditemAddress.address);
    if (props.isEdit) {
      const aaa = props.data?.fetchUseditem.tags;
      setHashArr(aaa);
    }
  }, [props.data]);

  const onClickTagDelete = (event: any) => {
    const aaa = hashArr.filter((_, i) => i !== Number(event.target.id));
    setHashArr([...aaa]);
  };

  return (
    <NewProductPresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      imageUrls={imageUrls}
      onChangeFileUrl={onChangeFileUrl}
      formState={formState}
      onClickEdit={onClickEdit}
      data={props.data}
      isEdit={props.isEdit}
      onChangeContents={onChangeContents}
      contents={contents}
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleComplete={handleComplete}
      address={address}
      setAddress={setAddress}
      getValues={getValues}
      setMapLatlng={setMapLatlng}
      mapLatlng={mapLatlng}
      onChangeHashTag={onChangeHashTag}
      hashArr={hashArr}
      onClickTagDelete={onClickTagDelete}
    />
  );
}
