import { Link } from "react-router-dom";
import { DivHeader, DivInput, HeaderMain, SearchInput } from "./styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../Logo";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { DashContext } from "../../context/DashContext";
import { IProduct } from "../../context/DashContext/interfaces/interfaces";

const HeaderDash = () => {
  const { remove } = useContext(UserContext);
  const isWide = useMediaQuery({ minWidth: 768 });
  const [show, setShow] = useState(false);
  const { setSearchList, products, setInput, input, modal, setModal } =
    useContext(DashContext);

  const searchFilter = (input: string, products: IProduct[]) => {
    setSearchList(
      products.filter((elem: IProduct) => {
        if (!input) {
          return elem;
        } else {
          return (
            elem.name.toLowerCase().includes(input.toLowerCase()) ||
            elem.supplier.toLowerCase().includes(input.toLowerCase()) ||
            elem.price.toString().includes(input.toLowerCase())
          );
        }
      })
    );
  };
  return (
    <DivHeader>
      <>
        <DivHeader>
          {isWide ? (
            <HeaderMain>
              <Logo />
              <div className="divIcons">
                <DivInput>
                  <SearchInput
                    onChange={(e) => {
                      e.preventDefault(),
                        setInput(e.target.value),
                        searchFilter(e.target.value, products);
                    }}
                    placeholder={"Pesquisar produtos"}
                    value={input}
                  />
                  <span
                    onClick={() => {
                      setSearchList([]), setInput("");
                    }}
                  >
                    X
                  </span>
                </DivInput>
                <span onClick={() => setModal(true)}>
                  <AiOutlinePlus className="icons" />
                </span>
                <Link to={"/"} onClick={() => remove()}>
                  <ExitToAppIcon className="icons" />
                </Link>
              </div>
            </HeaderMain>
          ) : (
            <>
              <HeaderMain>
                <Logo />
                <div className="divIcons">
                  <AiOutlineSearch
                    onClick={() => setShow(!show)}
                    className="icons"
                  />
                  <span onClick={() => setModal(true)}>
                    <AiOutlinePlus className="icons" />
                  </span>
                  <Link to={"/"} onClick={() => remove()}>
                    <ExitToAppIcon className="icons" />
                  </Link>
                </div>
              </HeaderMain>
              <DivInput show={show}>
                <SearchInput
                  onChange={(e) => {
                    e.preventDefault(),
                      setInput(e.target.value),
                      searchFilter(e.target.value, products);
                  }}
                  value={input}
                  show={show}
                  placeholder={"Pesquisar produtos"}
                />
                <span
                  onClick={() => {
                    setSearchList([]), setInput("");
                  }}
                >
                  X
                </span>
              </DivInput>
            </>
          )}
        </DivHeader>
      </>
    </DivHeader>
  );
};

export default HeaderDash;
