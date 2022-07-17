import React, { FunctionComponent } from "react";
import { Container, Label, InputTag, Error } from "./Input.styled";

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  width?: number;
  height?: number;
  label?: string;
  value: string;
  name: string;
  error?: string;
}

const Input: FunctionComponent<IInput> = ({
  width,
  label,
  height,
  value,
  name,
  error,
  ...props
}: IInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputTag
        name={name}
        value={value}
        height={height}
        width={width}
        {...props}
      />
      <Error>{error}</Error>
    </Container>
  );
};

export default Input;
