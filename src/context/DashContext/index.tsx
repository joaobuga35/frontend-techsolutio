/* eslint-disable no-empty */
import { createContext, useCallback, useEffect, useState } from "react";
import { IDashContextType, IProduct } from "./interfaces/interfaces";
import { iContext } from "../UserContext/interfaces/interfaces";
import api from "../../services/api";

const DashContext = createContext<IDashContextType>({} as IDashContextType);
const DashProvider = ({ children }: iContext) => {
  const token = localStorage.getItem("@TOKEN");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchList, setSearchList] = useState<IProduct[]>([]);
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
  const [filterProducts, setFilterProducts] = useState<IProduct[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await api.get<IProduct[]>("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data.content);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }, [token]);

  useEffect(() => {
    getProducts();
  }, [token]);
  return (
    <DashContext.Provider
      value={{
        token,
        products,
        filterProducts,
        searchList,
        input,
        modal,
        setFilterProducts,
        setInput,
        setModal,
        setProducts,
        setSearchList,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export { DashProvider, DashContext };
