import styled from "@emotion/styled";
import InputLabel from "./InputLabel/InputLabel";
import InputBase, { InputBaseProps } from "./InputBase";

interface InputProps extends InputBaseProps {
  label: string;
  errorMessage?: string;
}

const Input = ({
  label,
  placeholder,
  onChange,
  error,
  errorMessage,
  ...props
}: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        {...props}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
