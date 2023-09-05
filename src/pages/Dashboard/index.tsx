import HeaderDash from "../../components/Header";
import { DivTitleDashboard, List, MainDashboard } from "./styles";

const Dashboard = () => {
  return (
    <>
      <MainDashboard>
        <HeaderDash />
        <DivTitleDashboard>
          <h1>Produtos</h1>
          <p>
            Encontre os melhores produtos para o seu gosto, tudo em um só lugar!
          </p>
        </DivTitleDashboard>
        <List></List>
      </MainDashboard>
    </>
  );
};

export default Dashboard;
