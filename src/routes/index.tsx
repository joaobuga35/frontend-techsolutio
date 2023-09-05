import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "../components/ProtectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
