import { useContext } from "react";
import Card from "../../components/Card";
import HeaderDash from "../../components/Header";
import { DivTitleDashboard, List, MainDashboard } from "./styles";
import { DashContext } from "../../context/DashContext";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const { restaurants, searchList, modal } = useContext(DashContext);
  return (
    <>
      {modal && <Modal />}
      <HeaderDash />
      <MainDashboard>
        <DivTitleDashboard>
          <h1>Restaurantes</h1>
          <p>
            Encontre o melhor restaurante para o seu gosto, tudo em um só lugar!
          </p>
        </DivTitleDashboard>
        {searchList.length > 0 ? (
          <List>
            {searchList.map((elem) => (
              <Card restaurant={elem} />
            ))}
          </List>
        ) : (
          <List>
            {restaurants.map((elem) => (
              <Card key={elem.id} restaurant={elem} />
            ))}
          </List>
        )}
      </MainDashboard>
    </>
  );
};

export default Dashboard;
