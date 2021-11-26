import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  theme?: Theme;
}

const InputBase = styled("input")<InputBaseProps>`
  border-radius: ${({ theme }) => theme.components.input.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  height: 40px;
  padding: 10px 8px;
  width: 288px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 1px
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.gray800)};
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  transition-property: box-shadow;
  color: ${({ theme }) => theme.colors.black};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray900};
  }
  &:hover:enabled {
    box-shadow: 0px 0px 0px 1px
      ${({ theme, error }) => (error ? theme.colors.red : theme.colors.black)};
  }
  &:disabled {
    box-shadow: 0px 0px 0px 1px #808080;
    border: none;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 389px;
  }
  @media (min-width: 1440px) {
    width: 488px;
  }
`;

export default InputBase;
