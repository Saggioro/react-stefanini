import React, { FunctionComponent } from "react";

import { Container, Logout, Title } from "./Header.styled";
import * as authActions from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/LocalReduxThunk";

interface IHeader {}

const Header: FunctionComponent<IHeader> = ({ ...props }: IHeader) => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.authReducer.loggedUser);

  const getUserFirstName = () => {
    if (user) {
      const [name] = user.name.split(" ");
      return name;
    } else {
      return "";
    }
  };
  return (
    <Container>
      <Title>Hello, {getUserFirstName()}</Title>
      <Logout onClick={() => dispatch(authActions.logout() as any)}>Logout</Logout>
    </Container>
  );
};

export default Header;
