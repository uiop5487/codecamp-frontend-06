import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [imageUrls, setImageUrls] = useState(["", ""]);

  const router = useRouter();

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

  const onClickEdit = async (data) => {
    // const myVriables = {};

    // if (
    //   data.useditemAddress.address !== "" ||
    //   data.useditemAddress.addressDetial
    // ) {
    //   const useditemAddress = {};
    //   useditemAddress.address = data.useditemAddress.address;
    //   useditemAddress.addressDetail = data.useditemAddress.addressDetail;
    //   myVriables.useditemAddress = useditemAddress;
    // }

    // if (data.name !== "") {
    //   myVriables.name = data.name;
    // } else {
    //   console.log(props.data.fetchUseditem);
    //   register.name = props.data.fetchUseditem.name;
    // }
    // if (data.price !== "") {
    //   myVriables.price = Number(data.price);
    // }
    // if (data.contents !== "") {
    //   myVriables.contents = data.contents;
    // }
    // if (data.remarks !== "") {
    //   myVriables.remarks = data.remarks;
    // }
    // console.log(register);

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.productId,
          updateUseditemInput: {
            ...data,
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
    if (props.data?.fetchUseditem.images?.length) {
      setImageUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

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
    />
  );
}
