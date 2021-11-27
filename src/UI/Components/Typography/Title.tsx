import styled from "@emotion/styled";
import { HtmlHTMLAttributes } from "react";

interface TitleProps extends HtmlHTMLAttributes<HTMLParagraphElement> {}

const Title = ({ children }: TitleProps) => {
  return <Paragraph>{children}</Paragraph>;
};

export default Title;

const Paragraph = styled("p")<TitleProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 24px;
  margin: 0px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }
`;
