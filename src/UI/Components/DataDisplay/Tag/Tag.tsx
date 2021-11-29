import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "UI/Components/Controls/Buttons/types";

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
