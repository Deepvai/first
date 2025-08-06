import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("should render the count button", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /count/i });
  expect(button).toBeInTheDocument();
});
