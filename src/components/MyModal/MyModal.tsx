import { FC, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContainer, Overlay } from "./MyModal.styled";
import ContactForm from "../AddContactForm/AddContactForm";
import { modalProps } from "../../types/modal";
const modalRoot = document.getElementById("modal-root");

const MyModal: FC<modalProps> = ({ modalShow }) => {
  useEffect(() => {
    // console.log('монтируем');
    window.addEventListener("keydown", addKeyDown);
    return () => {
      // console.log('размонтируем');
      window.removeEventListener("keydown", addKeyDown);
    };
  });

  const addKeyDown = (evt: KeyboardEvent) => {
    if (evt.code === "Escape") {
      // console.log('закрить');
      modalShow();
    }
  };

  const addOverlay = (evt: MouseEvent<HTMLDivElement>) => {
    if (evt.currentTarget === evt.target) {
      modalShow();
    }
  };

  return createPortal(
    <Overlay onClick={addOverlay}>
      <ModalContainer>
        <ContactForm modalShow={modalShow} />
      </ModalContainer>
    </Overlay>,
    modalRoot as HTMLElement
  );
};

export default MyModal;
