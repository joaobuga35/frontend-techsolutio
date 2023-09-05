/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalContainer, ModalWrapper, TitleModal } from "./styles";
import { DashContext } from "../../context/DashContext";
import { useContext } from "react";

const Modal = () => {
  const { setModal } = useContext(DashContext);

  return (
    <ModalWrapper>
      <ModalContainer>
        <TitleModal>
          <h2>Criar Produto</h2>
          <span onClick={() => setModal(false)}>X</span>
        </TitleModal>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
