import React, { useState } from "react";
import PasswordHelper from "./PasswordHelper";
import useValidator from "./useValidator";
import ShowPassword from "./ShowPassword";
import {
  Container,
  Input,
  Label,
  LabelContainer,
  Button,
  FormGroup
} from "./PasswordField.styles";

const PassWordField = () => {
  const [show, setShow] = useState(false);
  const { helperText, valid, password, setPassword } = useValidator();

  const handleKeyDown = (e) => {
    if (e.key === " " || e.keyCode === 32) {
      e.preventDefault();
    }
  };

  return (
    <Container>
      <FormGroup>
        <LabelContainer>
          <Label htmlFor="password">Password: </Label>
          <ShowPassword onClick={() => setShow(!show)} show={show} />
        </LabelContainer>

        <Input
          id="password"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your password"
        />
      </FormGroup>

      <Button onClick={() => console.log(password)} disabled={!valid}>
        Submit
      </Button>

      <PasswordHelper validations={helperText} valid={valid} />
    </Container>
  );
};

export default PassWordField;
