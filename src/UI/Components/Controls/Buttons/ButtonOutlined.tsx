import styled from "@emotion/styled";
import ButtonBase from "./ButtonBase/ButtonBase";
import { ButtonProps } from "./types";

const ButtonOutlined = styled(ButtonBase)<ButtonProps>`
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.white};
  width: 149px;
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
  @media (min-width: 768px) {
    width: 198px;
  }
`;

export default ButtonOutlined;
