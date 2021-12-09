import styled from "@emotion/styled";

const ButtonBase = styled("button")`
  height: 40px;
  display: grid;
  padding: 0;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  border-radius: ${({ theme }) => theme.components.button.borderRadius};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  user-select: none;
  transition-property: background, color;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    height: 56px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export default ButtonBase;
