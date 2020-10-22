import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PassWordField from "../PasswordField";

test("Renders a password input", () => {
  render(<PassWordField />);
  const input = screen.getByLabelText(/password/i);
  expect(input).toHaveAttribute("type", "password");
});

test("Helper text and success banner visibility", async () => {
  render(<PassWordField />);
  const input = screen.getByLabelText(/password/i);
  expect(screen.getByRole("alert")).toBeInTheDocument();
  expect(screen.queryByRole("banner")).toBeNull();
  await userEvent.type(input, "Lx=1pwsd");
  expect(screen.queryByRole("alert")).toBeNull();
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

test("Enable submit with valid password", async () => {
  render(<PassWordField />);
  const input = screen.getByLabelText(/password/i);
  const button = screen.getByText(/submit/i);
  expect(button).toBeDisabled();
  await userEvent.type(input, "Lx=1pwsd");
  expect(button).not.toBeDisabled();
});

test("Toggle password visibility", () => {
  render(<PassWordField />);
  const input = screen.getByLabelText(/password/i);
  const button = screen.getByText(/show/i);
  expect(input).toHaveAttribute("type", "password");
  expect(button).toHaveTextContent(/show/i);
  userEvent.click(button);
  expect(input).toHaveAttribute("type", "text");
  expect(button).toHaveTextContent(/hide/i);
});
