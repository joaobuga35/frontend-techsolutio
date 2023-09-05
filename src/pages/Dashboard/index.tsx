import { useContext } from "react";
import HeaderDash from "../../components/Header";
import { DivTitleDashboard, List, MainDashboard } from "./styles";
import { DashContext } from "../../context/DashContext";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const { products, searchList, modal } = useContext(DashContext);

  return (
    <>
      {modal && <Modal />}
      <MainDashboard>
        <HeaderDash />
        <DivTitleDashboard>
          <h1>Produtos</h1>
          <p>
            Encontre os melhores produtos para o seu gosto, tudo em um só lugar!
          </p>
        </DivTitleDashboard>
        {searchList.length > 0 ? (
          <List>
            {searchList.map((elem) => (
              <Card key={elem.id} product={elem} />
            ))}
          </List>
        ) : (
          <List>
            {products.map((elem) => (
              <Card key={elem.id} product={elem} />
            ))}
          </List>
        )}
      </MainDashboard>
    </>
  );
};

export default Dashboard;
