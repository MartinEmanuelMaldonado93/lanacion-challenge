import { render, screen } from "@testing-library/react";
import MainTitle from "./MainTitle";

describe("Testing components", () => {
  test("Component should display Acumulado Grilla", () => {
    render(<MainTitle />);
    expect(screen.getByText("Acumulado Grilla")).toBeDefined();
  });
});
