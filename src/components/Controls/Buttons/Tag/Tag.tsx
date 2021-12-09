import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "../types/index";

interface TagProps extends ButtonProps {
  active?: boolean;
}

const buttonActiveBg = (theme: Theme) =>
  `linear-gradient(${theme.effects.linearGradient})`;

const Tag = styled("button")<TagProps>`
  display: flex;
  flex: 0 1 auto;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 36px;
  border: none;
  outline: none;
  cursor: pointer;
  transition-property: background, color;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
  border-radius: ${({ theme }) => theme.components.tag.borderRadius};
  background: ${({ theme, active }) =>
    active ? buttonActiveBg(theme) : theme.colors.gray};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.black};
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
  width: max-content;
  box-sizing: border-box;
  padding: 6px 12px;
  &:hover {
    background: none;
    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.black};
  }
  &:active {
    background: linear-gradient(${({ theme }) => theme.effects.linearGradient});
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Tag;
