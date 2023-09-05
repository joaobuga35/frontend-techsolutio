/* eslint-disable no-empty */
import { createContext, useCallback, useEffect, useState } from "react";
import { IDashContextType, IProduct } from "./interfaces/interfaces";
import { iContext } from "../UserContext/interfaces/interfaces";
import api from "../../services/api";
import { productData } from "../../schemas/product.schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  }, [token, modal]);

  const registerProduct = async (productDatas: productData) => {
    try {
      const response = await api.post("/products", productDatas, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Cadastrado com sucesso!", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setModal(false);
    } catch (error) {}
  };
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
        registerProduct,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export { DashProvider, DashContext };
