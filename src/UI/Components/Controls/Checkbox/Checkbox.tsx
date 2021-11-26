import styled from "@emotion/styled";
import { ReactComponent as Checkmark } from "assets/Checkmark.svg";
import { InputHTMLAttributes, useState } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
}

const Checkbox = ({ id, checked = false, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor={id}>
      <Input
        type="checkbox"
        id={id}
        {...props}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <CheckmarkContainer>
        <Checkmark />
      </CheckmarkContainer>
    </label>
  );
};

export default Checkbox;

const CheckmarkContainer = styled("span")`
  display: flex;
  cursor: pointer;
  flex: 0 1 auto;
  flex-flow: row nowrap;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme.colors.gray800};
  border-radius: ${({ theme }) => theme.components.checkbox.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme.colors.black};
  }
`;

const Input = styled("input")`
  display: none;
  & ~ span > svg {
    display: none;
  }
  &:checked ~ span {
    background-color: none;
    background: linear-gradient(${({ theme }) => theme.effects.linearGradient});
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
    & > svg {
      display: block;
    }
  }
  &:disabled ~ span {
    cursor: not-not-allowed;
    background-color: ${({ theme }) => theme.colors.gray900};
    box-shadow: none;
  }
`;

