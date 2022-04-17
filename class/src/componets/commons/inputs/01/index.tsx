import styled from "@emotion/styled";

interface IIsActive {
  isActive: boolean;
}

const Button = styled.button`
  background-color: ${(props: IIsActive) => (props.isActive ? "yellow" : "")};
`;

interface IProps {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IProps) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
