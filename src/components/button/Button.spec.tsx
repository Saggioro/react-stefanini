/* eslint-disable testing-library/no-debugging-utils */
import renderer from 'react-test-renderer';
import Button from "./Button";

test("Button should render correctly", () => {
  const component = renderer.create(<Button>Save</Button>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
