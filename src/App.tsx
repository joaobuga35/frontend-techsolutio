import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import RoutesMain from "./routes";
import Global from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
import { DashProvider } from "./context/DashContext";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Global />
      <UserProvider>
        <DashProvider>
          <RoutesMain />
        </DashProvider>
      </UserProvider>
    </>
  );
};

export default App;
