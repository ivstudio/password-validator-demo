import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import PassWordField from "../PasswordField";

afterEach(cleanup);

test("Renders a password input", () => {
  render(<PassWordField />);
  const input = screen.getByLabelText(/password/i);
  expect(input).toHaveAttribute("type", "password");
});

test("Enabled submit with valid input", () => {
  render(<PassWordField />);
  const input = screen.getByLabelText(/password/i);
  const button = screen.getByText(/submit/i);
  expect(button).toBeDisabled();
  fireEvent.change(input, { target: { value: "Lx=1pwsd" } });
  expect(button).not.toBeDisabled();
});

test("Helper text is correctly render", () => {
  render(<PassWordField />);
  const input = screen.getByLabelText(/password/i);
  expect(screen.getByRole("alert")).toBeInTheDocument();
  expect(screen.queryByRole("banner")).toBeNull();
  fireEvent.change(input, { target: { value: "Lx=1pwsd" } });
  expect(screen.queryByRole("alert")).toBeNull();
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

test("Toggle show password", () => {
  render(<PassWordField />);
  const input = screen.getByLabelText(/password/i);
  const button = screen.getByText(/show/i);
  expect(input).toHaveAttribute("type", "password");
  expect(button).toHaveTextContent(/show/i);
  fireEvent.click(button);
  expect(input).toHaveAttribute("type", "text");
  expect(button).toHaveTextContent(/hide/i);
});
