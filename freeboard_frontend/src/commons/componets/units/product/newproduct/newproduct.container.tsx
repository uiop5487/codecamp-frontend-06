import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { KeyboardEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./newproduct.mutation";
import NewProductPresenter from "./newproduct.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductCreateSchema } from "../../../commons/libraries/validation";
import { INewProductContainerProps, IPorductData } from "./newproduct.types";
import { Address } from "react-daum-postcode";

export default function NewProductContainer(props: INewProductContainerProps) {
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    reset,
    getValues,
  } = useForm<IPorductData>({
    resolver: yupResolver(ProductCreateSchema),
    mode: "onChange",
  });

  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [contents] = useState("");
  const [hashArr, setHashArr] = useState<String[]>([]);
  const [imageUrls, setImageUrls] = useState([""]);
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
      setHashArr([...hashArr, "#" + (event.target as HTMLInputElement).value]);
      (event.target as HTMLInputElement).value = "";
    }
  };

  const onClickSubmit = async (data: IPorductData) => {
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
              addressDetail: data.useditemAddress.addressDetail,
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

  const handleComplete = (data: Address) => {
    console.log(data);
    setAddress(data.address);
    setValue("useditemAddress.address", data.address);

    setIsModalVisible((prev) => !prev);
  };

  const onChangeContents = (value: string) => {
    console.log(value, "온체인지 콘텐츠");
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickEdit = async (data: IPorductData) => {
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

  const onChangeFileUrl = (imageUrl: string) => {
    setImageUrls((prev) => [imageUrl, ...prev]);
  };

  const onChangeEditFileUrl = (imageUrl: string, index: number) => {
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
      props.data?.fetchUseditem?.useditemAddress?.addressDetail
    );
    if (!props.data?.fetchUseditem?.useditemAddress?.address) return;
    setAddress(props.data?.fetchUseditem?.useditemAddress?.address);
    if (props.isEdit) {
      if (!props.data?.fetchUseditem?.tags) return;
      const tags = props.data?.fetchUseditem?.tags;
      setHashArr(tags);
    }
  }, [props.data]);

  const onClickTagDelete = (index: number) => () => {
    const tags = hashArr.filter((_, i) => i !== Number(index));
    setHashArr([...tags]);
  };
  console.log(imageUrls);
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
      onChangeEditFileUrl={onChangeEditFileUrl}
    />
  );
}
