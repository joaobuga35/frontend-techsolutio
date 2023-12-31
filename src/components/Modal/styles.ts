import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: var(--color-background);
  border-radius: 8px;

  animation: ${slideDown} 1s ease-in-out;

  @media (min-width: 768px) {
    width: 450px;
    height: auto;
  }
`;

const TitleModal = styled.header`
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  background-color: var(--color-primary);
  border-radius: 8px 8px 0 0;

  h2 {
    font-size: 18px;
    color: var(--color-background);
  }

  span {
    font-size: 18px;
    color: var(--color-background);
    cursor: pointer;
  }
`;

const FormModal = styled.form`
  width: 100%;
  padding: 20px;
  height: auto;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 2px solid var(--gray-0);
`;

export { ModalWrapper, ModalContainer, TitleModal, FormModal };
