import { Formik } from "formik";
import React, { FunctionComponent } from "react";
import * as Yup from "yup";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import { useAppSelector } from "../../../../hooks/LocalReduxThunk";

import { Container } from "./UserAdd.styled";
import * as userActions from "../../../../store/actions/users";
import { useDispatch } from "react-redux";
import User from "../../../../models/User";
interface IUserAdd {}

const UserAdd: FunctionComponent<IUserAdd> = ({ ...props }: IUserAdd) => {
  const users = useAppSelector((state) => state.usersReducer.users);
  const dispatch = useDispatch();
  const initialState = { login: "", password: "", confirmPassword: "" };
  const validation = Yup.object().shape({
    login: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });
  return (
    <Container>
      <Formik
        initialValues={initialState}
        onSubmit={async (values, { resetForm, setErrors }) => {
          try {
            const sameUser = users.find((user) => user.name === values.login);
            if (sameUser) {
              setErrors({ login: "This name is already being used" });
              throw new Error("Same user");
            }
            if (values.password !== values.confirmPassword) {
              setErrors({
                password: "Passwords must match",
                confirmPassword: "Passwords must match",
              });
              throw new Error("Password doesnt match");
            }
            dispatch(
              userActions.setUsers([
                ...users,
                new User(values.login, values.password),
              ]) as any
            );
            resetForm();
          } catch (e: any) {}
        }}
        validationSchema={validation}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label="Login"
              value={values.login}
              name="login"
              onChange={handleChange}
              error={touched.login ? errors.login : undefined}
            />
            <Input
              label="Password"
              type="password"
              value={values.password}
              name="password"
              onChange={handleChange}
              error={touched.password ? errors.password : undefined}
            />
            <Input
              label="Confirm password"
              type="password"
              value={values.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              error={
                touched.confirmPassword ? errors.confirmPassword : undefined
              }
            />
            <Button>Save</Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default UserAdd;
