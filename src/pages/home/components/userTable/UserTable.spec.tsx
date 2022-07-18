/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import UserTable from "./UserTable";
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

jest.mock("../../../../hooks/LocalReduxThunk", () => {
  return {
    useAppSelector() {
      return [{
        name: "admin teste",
        password: "123",
      }];
    },
  };
});

test("UserTable should render correctly", () => {
  const component = renderer.create(<UserTable />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("UserTable should render users names and passwords", () => {
    render(<UserTable />);
  
    expect(screen.getByText("admin teste")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });
  test("UserTable should filter users names", () => {
    const {container} = render(<UserTable />);
    const input = container.querySelector(`input[name="filter"]`) as Element;
    fireEvent.change(input, { target : {value: 'admin'}});
    expect(screen.getByText("admin teste")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });
  
