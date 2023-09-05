import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoutes = () => {
  const { token } = useContext(UserContext);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
