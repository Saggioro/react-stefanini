/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import renderer from "react-test-renderer";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Login from "./Login";
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
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
    useAppDispatch: () => mockDispatch
  };
});

test("Input should render correctly", () => {
  const component = renderer.create(<Login />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Login form should login", async () => {
    const { container } = render(<Login />);
    const inputLogin = container.querySelector(`input[name="login"]`) as Element;
    const button = container.querySelector(`button[type="submit"]`) as Element;
    const inputPassword = container.querySelector(
      `input[name="password"]`
    ) as Element;
  
    await act(async () => {
      fireEvent.change(inputLogin, { target: { value: "teste" } });
      fireEvent.change(inputPassword, { target: { value: "123" } });
      fireEvent.click(button);
    });
  
    expect(screen.queryByText("User not found!")).not.toBeInTheDocument();
    expect(screen.queryByText("Incorrect password!")).not.toBeInTheDocument();
  });

test("Login form should throw error when name doesnt exists", async () => {
    const { container } = render(<Login />);
    const inputLogin = container.querySelector(`input[name="login"]`) as Element;
    const button = container.querySelector(`button[type="submit"]`) as Element;
    const inputPassword = container.querySelector(
      `input[name="password"]`
    ) as Element;
  
    await act(async () => {
      fireEvent.change(inputLogin, { target: { value: "teste3" } });
      fireEvent.change(inputPassword, { target: { value: "123" } });
      fireEvent.click(button);
    });
  
    expect(screen.getByText("User not found!")).toBeInTheDocument();
  });

  test("Login form should throw error when password doesnt match", async () => {
    const { container } = render(<Login />);
    const inputLogin = container.querySelector(`input[name="login"]`) as Element;
    const button = container.querySelector(`button[type="submit"]`) as Element;
    const inputPassword = container.querySelector(
      `input[name="password"]`
    ) as Element;
  
    await act(async () => {
      fireEvent.change(inputLogin, { target: { value: "teste" } });
      fireEvent.change(inputPassword, { target: { value: "321" } });
      fireEvent.click(button);
    });
  
    expect(screen.getByText("Incorrect password!")).toBeInTheDocument();
  });