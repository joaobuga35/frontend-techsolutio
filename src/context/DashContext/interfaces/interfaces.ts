import { Dispatch, SetStateAction } from "react";
import { productData } from "../../../schemas/product.schema";

interface IDashContextType {
  token: string | null;
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  searchList: IProduct[];
  setSearchList: Dispatch<SetStateAction<IProduct[]>>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  filterProducts: IProduct[];
  setFilterProducts: Dispatch<SetStateAction<IProduct[]>>;
  registerProduct: (productData: productData) => void;
  deleteProduct: (id: number) => void;
}

interface IProduct {
  id: number;
  name: string;
  supplier: string;
  image: string;
  price: string;
}

export type { IDashContextType, IProduct };
