/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import renderer, { act } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import UserAdd from "./UserAdd";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../../hooks/LocalReduxThunk", () => {
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
test("UserAdd should render correctly", () => {
  const component = renderer.create(<UserAdd />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("UserAdd form should reset after adding", async () => {
  const { container } = render(<UserAdd />);
  const mockedDispatch = jest.fn();
  mockDispatch.mockReturnValue(mockedDispatch);
  const inputLogin = container.querySelector(`input[name="login"]`) as Element;
  const button = container.querySelector(`button[type="submit"]`) as Element;
  const inputPassword = container.querySelector(
    `input[name="password"]`
  ) as Element;
  const inputConfirm = container.querySelector(
    `input[name="confirmPassword"]`
  ) as Element;
  await act(async () => {
    fireEvent.change(inputLogin, { target: { value: "admin" } });
    fireEvent.change(inputPassword, { target: { value: "123" } });
    fireEvent.change(inputConfirm, { target: { value: "123" } });
    fireEvent.click(button);
  });

  expect(inputLogin.value).toBe("");
  expect(screen.queryByText("123")).not.toBeInTheDocument();
});

test("UserAdd form should throw error when name exists", async () => {
  const { container } = render(<UserAdd />);
  const inputLogin = container.querySelector(`input[name="login"]`) as Element;
  const button = container.querySelector(`button[type="submit"]`) as Element;
  const inputPassword = container.querySelector(
    `input[name="password"]`
  ) as Element;
  const inputConfirm = container.querySelector(
    `input[name="confirmPassword"]`
  ) as Element;
  await act(async () => {
    fireEvent.change(inputLogin, { target: { value: "teste" } });
    fireEvent.change(inputPassword, { target: { value: "123" } });
    fireEvent.change(inputConfirm, { target: { value: "123" } });
    fireEvent.click(button);
  });

  expect(
    screen.getByText("This name is already being used")
  ).toBeInTheDocument();
});

test("UserAdd form should throw error when passwords doesnt match", async () => {
  const { container } = render(<UserAdd />);
  const inputLogin = container.querySelector(`input[name="login"]`) as Element;
  const button = container.querySelector(`button[type="submit"]`) as Element;
  const inputPassword = container.querySelector(
    `input[name="password"]`
  ) as Element;
  const inputConfirm = container.querySelector(
    `input[name="confirmPassword"]`
  ) as Element;
  await act(async () => {
    fireEvent.change(inputLogin, { target: { value: "teste2" } });
    fireEvent.change(inputPassword, { target: { value: "123" } });
    fireEvent.change(inputConfirm, { target: { value: "321" } });
    fireEvent.click(button);
  });

  expect(await screen.findAllByText("Passwords must match")).toHaveLength(2);
});
