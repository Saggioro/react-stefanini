/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
jest.mock("react-redux", () => {
  return {
    useDispatch() {
      return {
        dispatch: (user: any) => {
          user = undefined;
        },
      };
    },
  };
});

jest.mock("../../hooks/LocalReduxThunk", () => {
  return {
    useAppSelector() {
      return {
        name: "admin teste",
        password: "123",
      };
    },
  };
});

test("Header should render correctly", () => {
  const component = renderer.create(<Header />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Header name should render only first name", () => {
  render(<Header />);

  expect(screen.queryByText("Hello, admin teste")).not.toBeInTheDocument();
  expect(screen.getByText("Hello, admin")).toBeInTheDocument();
});
