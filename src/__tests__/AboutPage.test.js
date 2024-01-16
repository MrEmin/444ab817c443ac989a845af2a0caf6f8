import { render, screen, waitFor } from "@testing-library/react";
import AboutPage from "../pages/AboutPage";

test("renders about page", async () => {
  render(<AboutPage />);

  await waitFor(() => {
    expect(
      screen.getByText("Our Journey in the Snowscape")
    ).toBeInTheDocument();
  });
});
