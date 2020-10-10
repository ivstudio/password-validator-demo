import { useMemo } from "react";

function useValidator(password) {
  return useMemo(() => {
    const validator = [
      {
        id: 1,
        valid: /[a-z]/.test(password),
        label: "One lowercase character"
      },
      {
        id: 2,
        valid: /[A-Z]/.test(password),
        label: "One uppercase character"
      },
      {
        id: 3,
        valid: /[0-9]/.test(password),
        label: "One number"
      },
      {
        id: 4,
        valid: /\W|_/.test(password),
        label: "One special character"
      },
      {
        id: 5,
        valid: password.length > 7,
        label: "8 characters minimum"
      }
    ];

    const valid = validator.some((item) => item.valid === false);

    return [validator, valid];
  }, [password]);
}

export default useValidator;
