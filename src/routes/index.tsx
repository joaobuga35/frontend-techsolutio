import { Route, Routes } from "react-router-dom";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Login</h1>}></Route>
      <Route path="/register" element={<h1>Register</h1>}></Route>
      <Route element={<h1>Dashboard</h1>}></Route>
    </Routes>
  );
};

export default RoutesMain;
