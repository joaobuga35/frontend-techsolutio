import ButtonDefault from "../../styles/button";
import { LiCard, DivImage, DivInfos } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ products }: any) => {
  //   const { setModal, restaurants, setFilterRestaurants } =
  //     useContext(DashContext);

  //   const filterAll = (id: string) => {
  //     const oneRestaurant = restaurants.filter((elem) => elem.id === id);
  //     setFilterRestaurants(oneRestaurant);
  //   };
  return (
    <>
      <LiCard key={products.id} id={products.id}>
        <DivImage>
          <img src={products.image} alt="image" />
        </DivImage>
        <DivInfos>
          <h2>{products.name}</h2>
          <ButtonDefault
            id={products.id}
            onClick={() => {}}
            colorBtn={"buttonGreen"}
            width={"106px"}
          >
            {" "}
            Ver detalhes
          </ButtonDefault>
        </DivInfos>
      </LiCard>
    </>
  );
};

export default Card;
