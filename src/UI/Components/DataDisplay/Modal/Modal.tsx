import { ReactNode } from "react";
import Portal from "UI/UtilityComponents/Portal";
import Backdrop from "./Backdrop/Backdrop";

interface ModalProps {
  open: boolean;
  children: ReactNode;
}

const Modal = ({ open, children }: ModalProps) => {
  if (open) {
    return (
      <Portal>
        <Backdrop>{children}</Backdrop>
      </Portal>
    );
  }
  return null;
};

export default Modal;
