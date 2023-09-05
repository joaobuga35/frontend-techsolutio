import styled, { keyframes } from "styled-components";

interface IStateStyled {
  show?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DivHeader = styled.div`
  height: auto;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderMain = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background);

  .divIcons {
    display: flex;
    align-items: stretch;
    gap: 20px;
  }

  .icons {
    height: 30px;
    width: 30px;
    color: var(--gray-300);
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--gray-300);
  }

  @media (min-width: 768px) {
    .icons {
      height: 40px;
      width: 40px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    max-width: 1260px;
    margin: 0 auto;
  }
`;

const SearchInput = styled.input<IStateStyled>`
  padding: 10px;
  border-radius: 0.8rem;
  border: 1px solid #ccc;
  width: 100%;
  animation: ${fadeIn} 0.3s ease-in-out;
  display: ${(props) => (props.show ? "block" : "none")};

  @media (min-width: 768px) {
    display: block;
    width: 350px;
  }
`;

const DivInput = styled.div<IStateStyled>`
  position: relative;

  span {
    position: absolute;
    top: 13px;
    right: 9px;
    display: ${(props) => (props.show ? "block" : "none")};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    span {
      display: block;
    }
  }
`;

export { HeaderMain, SearchInput, DivHeader, DivInput };
