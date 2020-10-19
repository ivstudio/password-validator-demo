import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import PassWordField from "../PasswordField";

afterEach(cleanup);

test("Renders a password input", () => {
  const { getByLabelText } = render(<PassWordField />);
  const input = getByLabelText(/password/i);
  expect(input).toHaveAttribute("type", "password");
});

test("Enabled submit with valid input", () => {
  const { getByLabelText, getByText } = render(<PassWordField />);
  const input = getByLabelText(/password/i);
  const button = getByText(/submit/i);
  expect(button).toBeDisabled();
  fireEvent.change(input, { target: { value: "Lx=1pwsd" } });
  expect(button).not.toBeDisabled();
});

test("Helper text is correctly render", () => {
  const { getByLabelText, getByRole, queryByRole } = render(<PassWordField />);
  const input = getByLabelText(/password/i);
  expect(getByRole("alert")).toBeInTheDocument();
  expect(queryByRole("banner")).toBeNull();
  fireEvent.change(input, { target: { value: "Lx=1pwsd" } });
  expect(queryByRole("alert")).toBeNull();
  expect(getByRole("banner")).toBeInTheDocument();
});

test("Toggle show password", () => {
  const { getByText, getByLabelText } = render(<PassWordField />);
  const input = getByLabelText(/password/i);
  const button = getByText(/show/i);
  expect(input).toHaveAttribute("type", "password");
  expect(button).toHaveTextContent(/show/i);
  fireEvent.click(button);
  expect(input).toHaveAttribute("type", "text");
  expect(button).toHaveTextContent(/hide/i);
});
