import styled from "@emotion/styled";
import { ButtonProps } from "./types";

const IconButton = styled("button")<ButtonProps>`
  display: flex;
  border: none;
  padding: 0;
  outline: none;
  width: 12px;
  height: 12px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export default IconButton;
