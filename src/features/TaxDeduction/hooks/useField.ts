import { ChangeEvent, FocusEvent, useState } from "react";

type validationFunction = (value: string) => string;

const useField = (validate: validationFunction) => {
  const [fieldValue, setFieldValue] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [fieldTouched, setFieldTouched] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (fieldTouched) {
      setFieldError(validate(value));
    }

    setFieldValue(value);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    const error = validate(fieldValue);
    setFieldError(error);
    setFieldTouched(true);
  };

  return { onChange, onBlur, fieldError, fieldValue, setFieldError, setFieldTouched};
};

export default useField;
