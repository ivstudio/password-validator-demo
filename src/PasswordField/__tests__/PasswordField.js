import React from "react";
import { render } from "@testing-library/react";
import PassWordField from "../PasswordField";

test("renders a password input", () => {
  const { getByLabelText } = render(<PassWordField />);
  const input = getByLabelText(/password/i);
  expect(input).toHaveAttribute("type", "password");
});
