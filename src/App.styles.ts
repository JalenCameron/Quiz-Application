import styled, { createGlobalStyle } from 'styled-components';
import BackgroundImage from './images/cherry-blossoms.jpg';

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
    }

    .start, .next {
        
    }
`