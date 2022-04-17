import styled from "@emotion/styled";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function NewProductPresenter(props: any) {
  return (
    <FormWrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      name
      <input type="text" {...props.register("name")} />
      remarks
      <input type="text" {...props.register("remarks")} />
      contents
      <input type="text" {...props.register("contents")} />
      price <input type="text" {...props.register("price")} />
      images <input type="text" {...props.register("images.[0]")} />
      tags <input type="text" {...props.register("tags.[0]")} />
      <button>등록하기</button>
    </FormWrapper>
  );
}
