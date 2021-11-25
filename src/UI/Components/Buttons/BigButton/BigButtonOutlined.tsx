import styled from "@emotion/styled";
import {ButtonHTMLAttributes} from "react";
import BigButtonBase, {
} from "./BigButtonBase/BigButtonBase";

interface BigButtonOutlinedProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const BigButtonOutlined= ({ children, ...props}: BigButtonOutlinedProps) => {
  return <StyledBigButtonBase {...props}>{children}</StyledBigButtonBase>;
};

export default BigButtonOutlined;

const StyledBigButtonBase = styled(BigButtonBase)<BigButtonOutlinedProps>`
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.white};
  width: 211px;
  transition-property: background-color, color;
  transition-duration: .6s;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.black};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray900};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
