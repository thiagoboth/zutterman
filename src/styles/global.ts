import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #506FA9;
        --background: #E9E9E9;
        --shape: #FFFFFF;
        --brown: #846219;
        --light-yellow: #E2E0B8;

        --text-title: #716565;
        --text-title-light: #FFFFFF;
        --text-light: #FFFFFF;
        --text: #716565;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
    }

    a, p {
        font-weight: 300;
    }

    h1, h3, h4 {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;

        li {
            a {
                text-decoration: none;
                color: var(--brown);
                margin-left: 8.5rem;
                font-size: 1rem;
                letter-spacing: 0.35rem;
            }
        }
    }
`