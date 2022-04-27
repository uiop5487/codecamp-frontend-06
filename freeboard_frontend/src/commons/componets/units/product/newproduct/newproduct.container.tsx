import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "./newproduct.mutation";
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
  const { data: idata } = useQuery(FETCH_USED_ITEM, {
    variables: router.query.productId,
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [contents] = useState("");
  const [imageUrls, setImageUrls] = useState(["", ""]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [mapLatlng, setMapLatlng] = useState({
    lat: "",
    lng: "",
  });

  const onClickSubmit = async (data) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            price: Number(data.price),
            images: imageUrls,
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

  const onChangeContents = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickEdit = async (data) => {
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
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.productId,
          updateUseditemInput: {
            ...data,
            price: Number(data.price),
            images: imageUrls,
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
  }, [props.data]);

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
  }, [props.data]);

  console.log(contents);

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
      idata={idata}
      getValues={getValues}
      setMapLatlng={setMapLatlng}
      mapLatlng={mapLatlng}
    />
  );
}
