import styled from "@emotion/styled";
import { HtmlHTMLAttributes } from "react";

const Subtitle = styled("p")<HtmlHTMLAttributes<HTMLParagraphElement>>`
  color: #808080;
  font-size: 12px;
  line-height: 16px;
  font-weight: normal;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export default Subtitle;
