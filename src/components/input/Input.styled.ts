import styled from "styled-components";
import Colors from "../../enums/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputTag = styled.input<{ width?: number; height?: number }>`
  height: ${(props) => (props.height ? `${props.height}px` : "30px")};
  width: ${(props) => (props.width ? `${props.width}px` : "200px")};
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
`;

export const Label = styled.label<{ width?: number; height?: number }>`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.primary};
`;

export const Error = styled.span`
  color: red;
`;