import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { CREATE_USED_ITEM } from "./newproduct.mutation";
import NewProductPresenter from "./newproduct.presenter";

export default function NewProductContainer() {
  const { register, handleSubmit } = useForm();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const onClickSubmit = async (data) => {
    console.log(data);
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          ...data,
          price: Number(data.price),
        },
      },
    });
    console.log(result);
  };

  return (
    <NewProductPresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
    />
  );
}
