import React, { useState } from "react";

import { Container, LoginArea } from "./Login.styled";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import * as authActions from "../../store/actions/auth";
import User from "../../models/User";
import { useAppDispatch, useAppSelector } from "../../hooks/LocalReduxThunk";
import { useNavigate } from "react-router-dom";
interface ILogin {}

const Login: React.FunctionComponent = ({ ...props }: ILogin) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.usersReducer.users);
  const [error, setError] = useState<string>();
  const initialState = { login: "", password: "" };
  const validation = Yup.object().shape({
    login: Yup.string().required(),
    password: Yup.string().required(),
  });
  return (
    <Container>
      <LoginArea>
        <Formik
          initialValues={initialState}
          onSubmit={async (values) => {
            try {
              const userLogging = new User(values.login, values.password);
              const findUser = users.find(
                (user) => user.name === userLogging.name
              );
              if (!findUser) {
                throw new Error("User not found!");
              }

              if (findUser.password !== userLogging.password) {
                throw new Error("Incorrect password!");
              }
              await dispatch(authActions.logIn(userLogging) as any);
              navigate('/home');
            } catch (e: any) {
              setError(e.message);
            }

          }}
          validationSchema={validation}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                value={values.login}
                onChange={handleChange}
                name="login"
                label="Login"
                error={touched.login ? errors.login : undefined}
              />
              <Input
                value={values.password}
                onChange={handleChange}
                name="password"
                label="Password"
                error={touched.password ? errors.password : undefined}
              />
              <Button>Sign in</Button>
              {error && (
                <p>{error}</p>
              )}
            </form>
          )}
        </Formik>
      </LoginArea>
    </Container>
  );
};

export default Login;
