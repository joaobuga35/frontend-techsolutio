import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import RoutesMain from "./routes";
import Global from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Global />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
};

export default App;
