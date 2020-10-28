import { renderHook, act } from "@testing-library/react-hooks";
import useValidator from "../useValidator";

test("Validator returns correct output", () => {
  const { result } = renderHook(() => useValidator(""));
  expect(result.current.valid).toBeFalsy();
  expect(result.current.helperText[0].valid).toBeFalsy();
  expect(result.current.helperText[1].valid).toBeFalsy();
  expect(result.current.helperText[2].valid).toBeFalsy();
  expect(result.current.helperText[3].valid).toBeFalsy();
  expect(result.current.helperText[4].valid).toBeFalsy();

  act(() => result.current.setPassword(5234));
  expect(result.current.valid).toBeFalsy();
  expect(result.current.helperText[0].valid).toBeFalsy();
  expect(result.current.helperText[1].valid).toBeFalsy();
  expect(result.current.helperText[2].valid).toBeTruthy();
  expect(result.current.helperText[3].valid).toBeFalsy();
  expect(result.current.helperText[4].valid).toBeFalsy();

  act(() => result.current.setPassword("aB}"));
  expect(result.current.valid).toBeFalsy();
  expect(result.current.helperText[0].valid).toBeTruthy();
  expect(result.current.helperText[1].valid).toBeTruthy();
  expect(result.current.helperText[2].valid).toBeFalsy();
  expect(result.current.helperText[3].valid).toBeTruthy();
  expect(result.current.helperText[4].valid).toBeFalsy();

  act(() => result.current.setPassword("aB}zyqkx"));
  expect(result.current.valid).toBeFalsy();
  expect(result.current.helperText[0].valid).toBeTruthy();
  expect(result.current.helperText[1].valid).toBeTruthy();
  expect(result.current.helperText[2].valid).toBeFalsy();
  expect(result.current.helperText[3].valid).toBeTruthy();
  expect(result.current.helperText[4].valid).toBeTruthy();

  act(() => result.current.setPassword("aB1=qxyz"));
  expect(result.current.valid).toBeTruthy();
  expect(result.current.helperText[0].valid).toBeTruthy();
  expect(result.current.helperText[1].valid).toBeTruthy();
  expect(result.current.helperText[2].valid).toBeTruthy();
  expect(result.current.helperText[3].valid).toBeTruthy();
  expect(result.current.helperText[4].valid).toBeTruthy();
});
