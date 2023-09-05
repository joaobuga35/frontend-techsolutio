import { NavigateFunction } from "react-router-dom";
import { loginData, userData } from "../../../schemas/user.schema";

interface iContext {
  children?: React.ReactNode;
}

interface IUserContextType {
  navigate: NavigateFunction;
  userRegister: (form: userData) => Promise<void>;
  userLogin: (form: loginData) => Promise<void>;
  token?: string | null;
  remove: () => void;
}

export type { IUserContextType, iContext };
