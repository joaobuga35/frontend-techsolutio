/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormModal, ModalContainer, ModalWrapper, TitleModal } from "./styles";
import { DashContext } from "../../context/DashContext";
import { useContext } from "react";
import Input from "../Input";
import DivInputBox from "../Input/styles";
import ButtonDefault from "../../styles/button";
import { productData, productSchema } from "../../schemas/product.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Modal = () => {
  const { setModal, registerProduct } = useContext(DashContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<productData>({
    mode: "onBlur",
    resolver: zodResolver(productSchema),
  });

  const submit = async (formData: productData) => {
    console.log(formData);
    await registerProduct(formData);
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <TitleModal>
          <h2>Criar Produto</h2>
          <span onClick={() => setModal(false)}>X</span>
        </TitleModal>
        <FormModal noValidate onSubmit={handleSubmit(submit)}>
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
              type={"text"}
              placeholder={"Fornecedor"}
              register={register("supplier")}
            />
            {errors.supplier && (
              <p className="errors">{errors.supplier.message}</p>
            )}
          </DivInputBox>
          <DivInputBox>
            <Input
              id={"image"}
              type={"text"}
              placeholder={"imagem"}
              register={register("image")}
            />
            {errors.image && <p className="errors">{errors.image.message}</p>}
          </DivInputBox>
          <DivInputBox>
            <Input
              id={"price"}
              type={"text"}
              placeholder={"Preço"}
              register={register("price")}
            />
            {errors.price && <p className="errors">{errors.price.message}</p>}
          </DivInputBox>

          <ButtonDefault type="submit" colorBtn={"buttonGreen"} width={"100%"}>
            Criar Produto
          </ButtonDefault>
        </FormModal>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
