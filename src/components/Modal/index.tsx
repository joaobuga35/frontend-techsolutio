/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalContainer, ModalWrapper, TitleModal } from "./styles";
import { DashContext } from "../../context/DashContext";
import { useContext } from "react";
import Input from "../Input";
import DivInputBox from "../Input/styles";

const Modal = () => {
  const { setModal } = useContext(DashContext);

  return (
    <ModalWrapper>
      <ModalContainer>
        <TitleModal>
          <h2>Criar Produto</h2>
          <span onClick={() => setModal(false)}>X</span>
        </TitleModal>

        <DivInputBox>
          <Input
            id={"name"}
            type={"text"}
            placeholder={"Nome"}
            register={register("name")}
          />
          {errors.name && <p className="errors">{errors.name.message}</p>}
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"supplier"}
            type={"supplier"}
            placeholder={"Fornecedor"}
            register={register("supplier")}
          />
          {errors.supplier && (
            <p className="errors">{errors.supplier.message}</p>
          )}
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"price"}
            type={"price"}
            placeholder={"Preço"}
            register={register("price")}
          />
          {errors.price && <p className="errors">{errors.price.message}</p>}
        </DivInputBox>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
