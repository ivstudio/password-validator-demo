import { renderHook } from "@testing-library/react-hooks";
import useValidator from "../useValidator";

test("Validator returns correct data", () => {
  const { result, rerender } = renderHook(({ pw }) => useValidator(pw), {
    initialProps: { pw: "aB1=qxyz" }
  });

  const [validator, valid] = result.current;

  expect(valid).toBeTruthy();
  expect(validator[0].valid).toBeTruthy();
  expect(validator[1].valid).toBeTruthy();
  expect(validator[2].valid).toBeTruthy();
  expect(validator[3].valid).toBeTruthy();
  expect(validator[4].valid).toBeTruthy();

  rerender({ pw: 5 });
  const [validatorA, validB] = result.current;

  expect(validB).toBeFalsy();
  expect(validatorA[0].valid).toBeFalsy();
  expect(validatorA[1].valid).toBeFalsy();
  expect(validatorA[2].valid).toBeTruthy();
  expect(validatorA[3].valid).toBeFalsy();
  expect(validatorA[4].valid).toBeFalsy();

  rerender({ pw: "aB}" });
  const [validatorC, validC] = result.current;

  expect(validC).toBeFalsy();
  expect(validatorC[0].valid).toBeTruthy();
  expect(validatorC[1].valid).toBeTruthy();
  expect(validatorC[2].valid).toBeFalsy();
  expect(validatorC[3].valid).toBeTruthy();
  expect(validatorC[4].valid).toBeFalsy();

  rerender({ pw: "aB}zyqkx" });
  const [validatorD, validD] = result.current;

  expect(validD).toBeFalsy();
  expect(validatorD[0].valid).toBeTruthy();
  expect(validatorD[1].valid).toBeTruthy();
  expect(validatorD[2].valid).toBeFalsy();
  expect(validatorD[3].valid).toBeTruthy();
  expect(validatorD[4].valid).toBeTruthy();
});
