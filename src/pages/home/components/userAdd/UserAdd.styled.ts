import styled from "styled-components";
import Colors from "../../../../enums/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.secondary};
  background-color: ${Colors.secondaryBackground};
  border: none;
  border-radius: 5px;
`;
