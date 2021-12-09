import {ERROR_FIELD_MIN_VALUE, ERROR_FIELD_REQUIRED} from "../constants";

const validate = (value: string) => {
  const number = Number.parseInt(value);
  if (number < 13890) {
    return ERROR_FIELD_MIN_VALUE;
  }
  if (value === "") {
    return ERROR_FIELD_REQUIRED;
  }

  return "";
};

export default validate;
