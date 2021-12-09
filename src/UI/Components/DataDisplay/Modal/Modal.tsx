import { ReactNode } from "react";
import Portal from "UI/UtilityComponents/Portal";
import Backdrop from "./Backdrop/Backdrop";
import { animated, useTransition } from "react-spring";

interface ModalProps {
  open: boolean;
  children: ReactNode;
}

const Modal = ({ open, children }: ModalProps) => {
  const transitions = useTransition(open, {
    from: { transform: "translateY(-100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(-100%)" },
    delay: 100,
  });

  const AnimatedBackdrop = animated(Backdrop);

  return transitions(
    (styles, item) =>
      item && (
        <Portal>
          <AnimatedBackdrop style={styles}>{children}</AnimatedBackdrop>
        </Portal>
      )
  );
};

export default Modal;
