import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode | ReactNode[];
}

const Portal = ({ children }: PortalProps) => {
  const body = document.getElementsByTagName("body")[0];

  return createPortal(children, body);
};

export default Portal;
