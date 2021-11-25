import styled from "@emotion/styled"


const ButtonBase = styled("button")`
  border-radius: ${({ theme }) => theme.components.button.borderRadius};
  border-style: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  grid-template: 1fr / max-content;
  justify-content: center;
  align-items: center;
  user-select: none;
  &:focus {
    outline: none;
  }
`;

export default ButtonBase;
