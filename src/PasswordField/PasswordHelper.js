import React from "react";
import { HelperList, HelperText, FeedBackBlock } from "./PasswordField.styles";

export default function PasswordHelper({ validations, valid }) {
  if (valid) {
    return (
      <FeedBackBlock role="banner">
        Your password is secure and you're all set!
      </FeedBackBlock>
    );
  }

  return (
    <HelperList role="alert">
      {validations.map((item) => (
        <HelperText key={item.id} valid={item.valid}>
          {item.label}
        </HelperText>
      ))}
    </HelperList>
  );
}
