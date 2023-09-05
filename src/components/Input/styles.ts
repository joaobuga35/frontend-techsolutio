import styled from "styled-components";

const DivInputBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--gray-600);
    border-radius: 0.5rem;
    font-size: 1.6rem;
    outline: none;
  }

  span {
    position: absolute;
    left: 0;
    padding: 1rem;
    pointer-events: none;
    font-size: 1.6rem;
    color: var(--gray-600);
    text-transform: uppercase;
    transition: 0.5s;
  }

  input:focus {
    border: 1px solid var(--color-primary);
  }
  input:valid ~ span,
  input:focus ~ span {
    color: var(--color-primary);
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 1rem;
    background-color: #fff;
    border-left: 1px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);
    letter-spacing: 0.2em;
  }

  .errors {
    display: flex;
    font-size: 1.2rem;
    color: var(--color-secundary);
  }
`;

export default DivInputBox;
