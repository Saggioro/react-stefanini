import styled from "styled-components";
import Colors from "../../enums/Colors";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.secondary};
  background-color: ${Colors.primary};
  border: none;
  height: 60px;
  padding: 0 10%;
`;

export const Logout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.primary};
  background-color: ${Colors.background};
  border: none;
  border-radius: 5px;
  width: 50px;
  height: 20px;
`;

export const Title = styled.h2`
  color: ${Colors.secondary};
  border: none;
  border-radius: 5px;
  font-size: 14px;
`;