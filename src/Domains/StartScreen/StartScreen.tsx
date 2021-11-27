import { HtmlHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface StartScreenProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const StartScreen = ({ children }: StartScreenProps) => {
  return <Container>{children}</Container>;
};

export default StartScreen;

const Container = styled("div")`
  background: linear-gradient(${({ theme }) => theme.effects.linearGradient});
  display: grid;
  grid-template: 1fr / max-content;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
