/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Input from "./Input";
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

test("Input should render correctly", () => {
  const component = renderer.create(
    <Input name="test" value="test" onChange={() => {}} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Input label should render", () => {
  render(<Input name="test" value="test" label="label" onChange={() => {}} />);

  expect(screen.getByText("label")).toBeInTheDocument();
});
