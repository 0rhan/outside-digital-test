import colors from "./colors";

const components = {
  input: {
    borderRadius: "3px",
    inputPlaceholder: colors.gray,
    inputOutline: colors.gray900,
    font: "14px normal normal 24px",
    label: {
      font: "14px normal 500 24px;",
    },
  },
  box: {
    borderRadius: "30px",
  },
  button: {
    borderRadius: "6px",
  },
  tag: {
    borderRadius: "50px",
  },
  text: {
    error: {},
    body: {},
  },
} as const;

export default components;
