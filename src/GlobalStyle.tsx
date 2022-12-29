import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    body{
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        background-color: #e6ccb2;
    }
`;
