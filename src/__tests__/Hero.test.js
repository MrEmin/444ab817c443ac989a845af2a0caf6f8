import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import { MemoryRouter } from "react-router-dom";

test("renders hero component", () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/Discover Winter's Joy with/i);
  const paragraphElement = screen.getByText(/Elevate your winter adventures/i);
  const linkElement = screen.getByRole("link", { name: /shop now/i });
  const imageElement = screen.getByAltText(/nice table/i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
