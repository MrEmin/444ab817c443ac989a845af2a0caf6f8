import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact", () => {
  test("renders contact component", () => {
    render(<Contact />);

    expect(
      screen.getByText(/subscribe to winter wave's newsletter/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/join our winter community/i)).toBeInTheDocument();
  });
});
