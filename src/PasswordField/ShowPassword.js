import React from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ShowButton, ShowButtonText } from "./PasswordField.styles";

export default function ShowPassword({ onClick, show }) {
  return (
    <ShowButton onClick={onClick}>
      {show ? (
        <>
          <FaEyeSlash /> <ShowButtonText>Hide</ShowButtonText>
        </>
      ) : (
        <>
          <FaEye /> <ShowButtonText>Show</ShowButtonText>
        </>
      )}
    </ShowButton>
  );
}
