import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("should contain 3 parts", () => {
  it("renders correct heading", () => {
    render(<Footer />);
    expect(screen.getAllByRole("listitem").length).toBe(3);
  });
});