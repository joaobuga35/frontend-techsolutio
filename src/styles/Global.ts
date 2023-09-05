import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-background: #FFFFFF;
    --color-primary: #ff2800;
    --color-primary-50: #93D7AF;
    --color-secundary: #EB5757;
    --gray-600: #333333;
    --gray-300:#828282;
    --gray-100:#E0E0E0;
    --gray-0:#F5F5F5;
    --gray-4:#BDBDBD
    --color-error: #E60000; 
    --color-success: #168821;
    --color-warning: #FFCD07;
    --color-information: #155BCB;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }
  body{
    transition: 0.8s ease;
    animation: smoothShow 800ms;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.9);
  }

  @keyframes smoothShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;
