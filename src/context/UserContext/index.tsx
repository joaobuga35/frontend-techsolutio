import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IUserContextType,
  iContext,
} from "../UserContext/interfaces/interfaces";
import api from "../../services/api";
import { loginData, userData } from "../../schemas/user.schema";

const UserContext = createContext<IUserContextType>({} as IUserContextType);

const UserProvider = ({ children }: iContext) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  const remove = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  const userLogin = async (form: loginData) => {
    const load = toast.loading("Aguarde um instante...");
    try {
      const response = await api.post("/login", form);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.update(load, {
        render: "Login efetuado com sucesso!",
        type: "success",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.update(load, {
        render: "Email ou senha incorretos!",
        type: "error",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const userRegister = async (form: userData) => {
    const load = toast.loading("Aguarde um instante...");
    try {
      await api.post("/users", form);
      toast.update(load, {
        render: "Cadastrado com sucesso!",
        type: "success",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } catch (error) {
      toast.update(load, {
        render: "Usuário já existente!",
        type: "error",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        navigate,
        userRegister,
        userLogin,
        token,
        remove,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
