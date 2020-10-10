import React from "react";
import { HelperList, HelperText } from "./PasswordField.styles";

export default function PasswordHelper({ validations }) {
  return (
    <HelperList>
      {validations.map((item) => (
        <HelperText key={item.id} valid={item.valid}>
          {item.label}
        </HelperText>
      ))}
    </HelperList>
  );
}
