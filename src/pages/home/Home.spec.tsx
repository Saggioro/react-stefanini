/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock("../../hooks/LocalReduxThunk", () => {
  return {
    useAppSelector() {
      return [
        {
          name: "teste",
          password: "123",
        },
      ];
    },
  };
});

test("Input should render correctly", () => {
  const component = renderer.create(<Home />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

