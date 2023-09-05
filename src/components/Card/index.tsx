/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
import ButtonDefault from "../../styles/button";
import { LiCard, DivImage, DivInfos } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ product }: any) => {
  const { products, setFilterProducts, deleteProduct } =
    useContext(DashContext);

  const filterAll = (id: string) => {
    const oneProduct = products.filter((elem: any) => elem.id === id);
    setFilterProducts(oneProduct);
  };
  return (
    <>
      <LiCard key={product.id} id={product.id}>
        <DivImage>
          <img src={product.image} alt="image" />
        </DivImage>
        <DivInfos>
          <h2>{product.name}</h2>
          <span>{product.supplier}</span>
          <p>R$ {product.price}</p>
          <ButtonDefault
            id={product.id}
            onClick={() => {
              filterAll(product.id), deleteProduct(product.id);
            }}
            colorBtn={"buttonGreen"}
            width={"106px"}
          >
            {" "}
            Excluir produto
          </ButtonDefault>
        </DivInfos>
      </LiCard>
    </>
  );
};

export default Card;
