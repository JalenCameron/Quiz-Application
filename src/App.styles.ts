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

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner {
        border: 9px solid #ebfeff; 
        border-top: 10px solid #0085a3; 
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: loading 1.5s linear infinite;
    }

    .loading-container {
        display: grid;
        justify-content: center;
        align-items: center;
        height: 300px;
    }

    .greeting-wrapper {
        background: #ebfeff;
        border-radius: 10px;
        border: 2px solid #0085a3;
        padding: 1rem;
        max-width: 700px;

        h2 {
            text-align: center;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;

    > p {
        color: #fff;
    }

    .score {
        color: #020202;
        font-size: 1.5rem;
        margin: 1rem 0;
        padding: 1rem 1rem 0 1rem;
        background: #ebfeff;
        border-radius: 10px;
        border: 2px solid #0085a3;
    }

    h1 {
        font-family: 'Barlow', sans-serif;
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
        margin: 20px;
        padding: 1rem;
        background: #ebfeff;
        border-radius: 10px;
        border: 2px solid #0085a3;
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

    @media (min-width: 640px) {
        h1 {
            font-size: 3rem;
        }
    }
`;