import styled from "styled-components";
import Colors from "../../../../enums/Colors";

export const Container = styled.div`
  color: ${Colors.secondary};
  background-color: ${Colors.secondaryBackground};
  border: none;
  border-radius: 5px;

  h2 {
    color: ${Colors.primary};
  }
`;

export const Table = styled.table`
  min-width: 200px;
  color: ${Colors.primary};
  border-collapse: collapse;
  th {
    text-align: start;
    border-bottom: 1px solid ${Colors.primary};
  }

  td{
    border-bottom: 1px solid ${Colors.primary};
    padding: 4px;
  }
`;