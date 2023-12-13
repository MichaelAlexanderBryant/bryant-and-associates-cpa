import { render, screen } from "@testing-library/react";
import NavigationBar from "../NavigationBar";

describe("should render company name in heading", () => {
  it("renders correct heading", () => {
    render(<NavigationBar />);
    expect(screen.getByRole("heading").textContent).toMatch(/Bryant & Associates CPA/i);
  });
});

describe("should contain 6 list items", () => {
  it("renders correct heading", () => {
    render(<NavigationBar />);
    expect(screen.getAllByRole("listitem").length).toBe(6);
  });
});