import styled from "@emotion/styled";
import {HtmlHTMLAttributes} from "react";

const Regular = styled("p")<HtmlHTMLAttributes<HTMLParagraphElement>>`
  color: ${({theme})=> theme.colors.black};
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  margin: 0;
`
export default Regular;
