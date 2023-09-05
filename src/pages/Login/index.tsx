import { Link } from "react-router-dom";
import FormStyle from "../../components/Form/styles";
import Input from "../../components/Input";
import DivInputBox from "../../components/Input/styles";
import ButtonDefault from "../../styles/button";
import DivLogin from "./styles";
import { useMediaQuery } from "react-responsive";
import Logo from "../../components/Logo";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { loginData, loginSchema } from "../../schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const isWide = useMediaQuery({ minWidth: 1000 });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });
  const { userLogin } = useContext(UserContext);

  const submit = async (formData: loginData) => {
    await userLogin(formData);
  };
  return (
    <DivLogin>
      <FormStyle
        noValidate
        width={isWide ? "48rem" : "35rem"}
        height={"auto"}
        onSubmit={handleSubmit(submit)}
      >
        <Logo />
        <h3>Login</h3>
        <DivInputBox>
          <Input
            type={"email"}
            id={"email"}
            placeholder={"email"}
            register={register("email")}
          />
          {errors.email && <p className="errors">{errors.email.message}</p>}
        </DivInputBox>
        <DivInputBox>
          <Input
            type={"password"}
            id={"password"}
            placeholder={"senha"}
            register={register("password")}
          />
          {errors.password && (
            <p className="errors">{errors.password.message}</p>
          )}
        </DivInputBox>
        <ButtonDefault type="submit" colorBtn={"buttonGreen"} width={"100%"}>
          Logar
        </ButtonDefault>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link className="redirectedBtn" to={"/register"}>
          Cadastrar
        </Link>
      </FormStyle>
    </DivLogin>
  );
};

export default Login;
