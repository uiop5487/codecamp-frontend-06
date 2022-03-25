import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./board-write.types";

export const SubmitButton = styled.button`
    background-color: ${(props: ISubmitButtonProps) => (props.isActive ? "yellow" : "none")};
`;

export const WriterInput = styled.input`
    border-color: green;
`;
