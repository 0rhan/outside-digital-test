import styled from "@emotion/styled";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface BackdropProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Backdrop = ({ children, style }: BackdropProps) => {
  return <BackdropContainer style={style}>{children}</BackdropContainer>;
};

export default Backdrop;

const BackdropContainer = styled("div")`
  display: grid;
  grid-template: 1fr / 1fr;
  justify-content: center;
  overflow: auto;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #b3b3b3;
  z-index: 1;
  top: 0;
  left: 0;
`;

