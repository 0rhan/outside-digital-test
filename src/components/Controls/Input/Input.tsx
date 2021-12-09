import styled from "@emotion/styled";
import InputLabel from "./InputLabel/InputLabel";
import InputBase, { InputBaseProps } from "./InputBase";
import { ChangeEvent } from "react";

interface InputProps extends InputBaseProps {
  label: string;
}

const Input = ({
  label,
  placeholder,
  onChange,
  error,
  type,
  ...props
}: InputProps) => {
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      const { value } = event.currentTarget;
      const regex = /^\d+$/;
      if (regex.test(value) || value === "") {
        if (onChange) onChange(event);
      }
    } else {
      if (onChange) onChange(event);
    }
  };

  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputBase
        onChange={onInputChange}
        placeholder={placeholder}
        error={error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled("div")`
  display: grid;
  margin-top: 24px;
  grid-template: repeat(3, max-content) / 1fr;
`;

const ErrorMessage = styled("span")`
  color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
  line-height: 12px;
  margin-top: 4px;
`;
