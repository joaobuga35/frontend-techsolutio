import styled from "styled-components";

const DivLogin = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    gap: 5rem;
  }
`;

export default DivLogin;
