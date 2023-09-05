import { Link } from "react-router-dom";
import { DivHeader, DivInput, HeaderMain, SearchInput } from "./styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../Logo";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const HeaderDash = () => {
  const { remove } = useContext(UserContext);
  const isWide = useMediaQuery({ minWidth: 768 });
  const [show, setShow] = useState(false);

  //   const searchFilter = (input: string, restaurants: IRestaurant[]) => {
  //     setSearchList(
  //       restaurants.filter((elem: IRestaurant) => {
  //         if (!input) {
  //           return elem;
  //         } else {
  //           return (
  //             elem.name.toLowerCase().includes(input.toLowerCase()) ||
  //             elem.foods.some((food: IFood) =>
  //               food.name.toLowerCase().includes(input.toLowerCase())
  //             ) ||
  //             elem.foods.some((food: IFood) =>
  //               food.description.toLowerCase().includes(input.toLowerCase())
  //             )
  //           );
  //         }
  //       })
  //     );
  //   };
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
                    onChange={() => {}}
                    placeholder="Digite sua pesquisa..."
                  />
                  <span onClick={() => {}}>X</span>
                </DivInput>
                <AiOutlinePlus className="icons" />
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
                  <AiOutlinePlus className="icons" />
                  <Link to={"/"} onClick={() => remove()}>
                    <ExitToAppIcon className="icons" />
                  </Link>
                </div>
              </HeaderMain>
              <DivInput show={show}>
                <SearchInput
                  onChange={() => {}}
                  show={show}
                  placeholder="Digite sua pesquisa..."
                />
                <span onClick={() => {}}>X</span>
              </DivInput>
            </>
          )}
        </DivHeader>
      </>
    </DivHeader>
  );
};

export default HeaderDash;
