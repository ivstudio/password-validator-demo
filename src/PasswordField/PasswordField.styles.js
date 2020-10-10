import styled, { css } from "styled-components";

const fontFamily = "Arial, Helvetica, sans-serif";

/* styles */
const textReg = css`
  font-size: 1rem;
  line-height: 1.5;
`;

const textSm = css`
  font-size: 0.95rem;
  line-height: 1.5;
`;

const colors = {
  white: "#ffffff",
  blue10: "#cfd8dc",
  blue20: "#b0bec5",
  blue50: "#00a0d7",
  blue60: "#607d8b",
  blue90: "#263238"
};

const spacing = {
  "4": "4px",
  "8": "8px",
  "12": "12px",
  "16": "16px",
  "20": "20px",
  "24": "24px",
  "32": "32px",
  "40": "40px",
  "48": "48px"
};

export const Container = styled.section`
  width: 100%;
  max-width: 420px;
  margin: ${spacing[40]} auto;
  font-family: ${fontFamily};
`;

export const HelperText = styled.li`
  ${textSm};
  opacity: ${({ valid }) => (valid ? 0.3 : 1)};
`;

export const HelperList = styled.ul`
  columns: 2;
  padding: 0;
  margin: ${spacing[32]} 0;
  color: ${colors.blue90};
  list-style-position: inside;
`;

export const Button = styled.button`
  ${textReg};
  width: 100%;
  height: 50px;
  border-radius: 24px;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${colors.blue50};
  color: ${colors.white};

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Input = styled.input`
  ${textReg};
  width: 100%;
  padding: 0 ${spacing[16]};
  height: ${spacing[48]};
  border-radius: 3px;
  box-sizing: border-box;
  color: ${colors.blue90};
  border: 1px solid ${colors.blue10};

  &::placeholder {
    color: ${colors.blue10};
  }

  &:focus {
    box-shadow: rgba(0, 160, 215, 0.1) 0 0 0 0.2rem;
  }
`;

export const Label = styled.label`
  ${textSm};
  color: ${colors.blue90};
  font-weight: 600;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: ${spacing[16]};
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing[8]};
`;

export const ShowButton = styled.div`
  ${textReg};
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  width: 64px;
  color: ${colors.blue20};
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    color: ${colors.blue60};
  }
`;

export const ShowButtonText = styled.span`
  ${textSm};
`;
