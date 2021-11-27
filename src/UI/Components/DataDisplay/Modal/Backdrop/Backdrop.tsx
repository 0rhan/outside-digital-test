import styled from "@emotion/styled";
import { ReactNode } from "react";

const Backdrop = ({ children }: { children: ReactNode }) => {
  return <BackdropContainer>{children}</BackdropContainer>;
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

