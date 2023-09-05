import { IDataInput } from "./interfaces/interfaces";

const Input = ({ type, id, placeholder, register }: IDataInput) => {
  return (
    <>
      <input type={type} id={id} {...register} />
      <span>{placeholder}</span>
    </>
  );
};
export default Input;
