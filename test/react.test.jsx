import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";

const Calculator = () => {
  return <h1>Calculator</h1>;
};

describe("Calculator", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<Calculator />);
  });

  it("should render title correctly", () => {
    render(<Calculator />);

    screen.getByText("Calculator");
  });
});
