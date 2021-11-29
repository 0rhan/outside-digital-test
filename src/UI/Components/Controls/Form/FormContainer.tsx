import styled from "@emotion/styled";
import { HtmlHTMLAttributes } from "react";

const FormContainer = styled("div")<HtmlHTMLAttributes<HTMLDivElement>>`
  display: grid;
  padding: 32px 16px;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  justify-self: center;
  @media (min-width: 425px) {
    width: 425px;
    border-radius: ${({ theme }) => theme.components.box.borderRadius};
  }
  @media (min-width: 768px) {
    border-radius: ${({ theme }) => theme.components.box.borderRadius};
    width: 453px;
    height: max-content;
    align-self: center;
    padding: 32px 32px;
  }
  @media (min-width: 1440px) {
    align-self: center;
    justify-items: normal;
    width: 552px;
  }
`;

export default FormContainer;
