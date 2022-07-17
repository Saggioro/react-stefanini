import styled from "styled-components";
import Colors from "../../enums/Colors";

export const Container = styled.button<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.secondary};
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : Colors.primary};
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  margin: 20px 0 0 0;
`;
