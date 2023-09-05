import { Link } from "react-router-dom";
import FormStyle from "../../components/Form/styles";
import Input from "../../components/Input";
import DivInputBox from "../../components/Input/styles";
import ButtonDefault from "../../styles/button";
import DivRegister from "./styles";
import Logo from "../../components/Logo";
import { useMediaQuery } from "react-responsive";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { userData, userSchema } from "../../schemas/user.schema";

const Register = () => {
  const isWide = useMediaQuery({ minWidth: 1000 });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>({
    mode: "onBlur",
    resolver: zodResolver(userSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit = async (formData: userData) => {
    await userRegister(formData);
  };

  return (
    <DivRegister>
      <FormStyle
        noValidate
        width={isWide ? "48rem" : "35rem"}
        height={"51rem"}
        onSubmit={handleSubmit(submit)}
      >
        <Logo />
        <div className="divInfoRegister">
          <h3>Cadastro</h3>
          <Link className="redirectedLogin" to={"/"}>
            Retornar para o login
          </Link>
        </div>
        <DivInputBox>
          <Input
            id={"name"}
            type={"text"}
            placeholder={"nome"}
            register={register("name")}
          />
          {errors.name && <p className="errors">{errors.name.message}</p>}
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"email"}
            type={"email"}
            placeholder={"email"}
            register={register("email")}
          />
          {errors.email && <p className="errors">{errors.email.message}</p>}
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"password"}
            type={"password"}
            placeholder={"senha"}
            register={register("password")}
          />
          {errors.password && (
            <p className="errors">{errors.password.message}</p>
          )}
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"confirmPassword"}
            type={"password"}
            placeholder={"confirme sua senha"}
            register={register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="errors">{errors.confirmPassword.message}</p>
          )}
        </DivInputBox>
        <ButtonDefault type="submit" colorBtn={"buttonGreen"} width={"100%"}>
          Cadastrar
        </ButtonDefault>
      </FormStyle>
    </DivRegister>
  );
};

export default Register;
