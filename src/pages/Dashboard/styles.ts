import styled from "styled-components";

const MainDashboard = styled.main`
  margin-top: 35px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 1024px) {
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    max-width: 1260px;
    margin: 0 auto;
  }
`;

const DivTitleDashboard = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  h1 {
    color: var(--color-primary);
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    color: var(--gray-300);
    font-size: 14px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  width: 400px;
  overflow-x: auto;

  @media (min-width: 500px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;
export { MainDashboard, DivTitleDashboard, List };
