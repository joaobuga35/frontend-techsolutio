import styled from "styled-components";

interface IForm {
  height: string;
  width: string;
}

const FormStyle = styled.form<IForm>`
  width: ${(props) => props.width};
  padding: 20px;
  height: ${(props) => props.height};
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 2px solid var(--gray-0);

  h3 {
    color: var(--gray-600);
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  p {
    text-align: center;
    color: var(--gray-300);
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-top: 1.9rem;
    margin-bottom: 1.9rem;
  }
  .divInfoRegister {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 40px;
  }

  .redirectedLogin {
    text-decoration: none;
    color: var(--gray-300);
    font-size: 16px;
    width: 200px;
    height: 40px;

    :hover {
      text-decoration: underline var(--gray-300);
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 100%;
    border-radius: 12px;
    text-decoration: none;
    color: var(--gray-300);

    background-color: var(--gray-0);
    border: 2px solid var(--gray-0);
    color: var(--gray-300);
  }

  a:hover {
    filter: brightness(0.9);
  }
`;

export default FormStyle;
