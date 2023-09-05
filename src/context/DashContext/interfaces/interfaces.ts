import { Dispatch, SetStateAction } from "react";

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
}

interface IProduct {
  id: number;
  name: string;
  supplier: string;
  image: string;
  price: string;
}

export type { IDashContextType, IProduct };
