import { styled } from "styled-components";

const LiCard = styled.li`
  min-width: 250px;
  max-width: 250px;
  height: 325px;
  border: 2px solid var(--gray-100);
  border-radius: 4px;
  background-color: var(--color-background);
`;

const DivImage = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DivInfos = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h2 {
    font-size: 18px;
    color: var(--gray-600);
    white-space: nowrap;
  }

  span {
    font-size: 12px;
    color: var(--gray-300);
  }

  p {
    font-size: 14px;
    color: var(--color-primary);
  }
`;

export { LiCard, DivImage, DivInfos };
