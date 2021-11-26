import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

const TextButton = styled("button")<ButtonHTMLAttributes<HTMLButtonElement>>`
  border: none;
  box-sizing: border-box;
  display: flex;
  height: 24px;
  width: max-content;
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  padding: 0px;
  align-items: center;
  flex-flow: row nowrap;
  height: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;

export default TextButton;
