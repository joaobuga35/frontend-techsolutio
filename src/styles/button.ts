import styled, { css } from "styled-components";

interface iButton {
  colorBtn: "buttonGreen" | "buttoGrey";
  width?: string;
  top?: string;
  bottom?: string;
}

const ButtonDefault = styled.button<iButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: ${(props) => props.width};
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  border-radius: 0.8rem;

  ${({ colorBtn }) => {
    switch (colorBtn) {
      case "buttonGreen":
        return css`
          background-color: var(--color-primary);
          border: 2px solid var(--color-primary);
          color: #fff;
        `;
      case "buttoGrey":
        return css`
          background-color: var(--gray-100);
          border: 2px solid var(--gray-100);
          color: var(--gray-300);
        `;
    }
  }}
`;

export default ButtonDefault;
