import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyComponent from "./MyComponent";

test("renders Hello, World!", () => {
  const { getByText } = render(<MyComponent />);
  expect(getByText("Hello, World!")).toBeTruthy();
});
