/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Page from "./Page";
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

test("Input should render correctly", () => {
  const component = renderer.create(<Page>content</Page>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Page label should render content", () => {
  render(<Page>content</Page>);

  expect(screen.getByText("content")).toBeInTheDocument();
});
