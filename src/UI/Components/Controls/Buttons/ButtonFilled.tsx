import styled from "@emotion/styled";
import ButtonBase from "./ButtonBase/ButtonBase";
import { ButtonProps } from "./types";

const ButtonFilled = styled(ButtonBase)<ButtonProps>`
  background: linear-gradient(${({ theme }) => theme.effects.linearGradient});
  width: 288px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  transition-timing-function: cubic-bezier(0.55, 0.09, 0.68, 0.53);
  margin-top: auto;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    background-image: none;
  }
  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    background: none;
    background-color: ${({ theme }) => theme.colors.gray900};
  }

  @media (min-width: 768px) {
    width: 389px;
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    width: 488px;
  }
`;

export default ButtonFilled;
