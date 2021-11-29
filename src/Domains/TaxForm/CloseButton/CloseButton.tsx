import styled from "@emotion/styled";
import { ReactComponent as Cross } from "assets/Cross.svg";
import { ButtonHTMLAttributes } from "react";
import IconButton from "UI/Components/Controls/Buttons/IconButton";

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <StyledIconButton onClick={onClick} type="button">
      <Icon />
    </StyledIconButton>
  );
};

export default CloseButton;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 22px;
  right: 22px;
  @media (min-width: 768px) {
    top: 27px;
    right: 23px;
  }
  @media (min-width: 1440px) {
    top: 27px;
    right: 27px;
  }
`;

const Icon = styled(Cross)`
  width: 100%;
  height: 100%;
`;
