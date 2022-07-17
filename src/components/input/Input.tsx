import React, { FunctionComponent } from "react";
import { Container, Label, InputTag } from "./Input.styled";

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  width?: number;
  height?: number;
  label?: string;
}

const Input: FunctionComponent<IInput> = ({
  width,
  label,
  height,
  ...props
}: IInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputTag height={height} width={width} {...props} />
    </Container>
  );
};

export default Input;
