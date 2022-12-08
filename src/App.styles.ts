import styled, { createGlobalStyle } from 'styled-components';
import BackgroundImage from './images/osaka.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BackgroundImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Baloo Tammudu 2', cursive;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 10px solid #f3f3f3; 
        border-top: 10px solid #383636; 
        border-radius: 50%;
        animation: spinner 1.5s linear infinite;
    }

    .spinner-container {
        display: grid;
        justify-content: center;
        align-items: center;
        height: 350px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Barlow', sans-serif;
        font-size: 4.375rem;
        font-weight: 400;
        text-align: center;
        margin: 20px;
        background-color: #fff;
        padding: 1rem;
        border-radius: 10px;
    }

    .start, .next-question {
        cursor: pointer;
        border: 2px solid #0085a3;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 5px 40px;
    }

    .start {
        max-width: 200px;
    }
`;