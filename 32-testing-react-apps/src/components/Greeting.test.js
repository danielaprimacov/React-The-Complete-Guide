import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hellor World as a text", () => {
    // 3A
    // 1 - Arrange - set up the test data, test conditions and test environment
    render(<Greeting />);

    // 2 - Act - run logic that should be tested
    // ... nothing

    // 3 - Assert - compare execution results with expected results
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
