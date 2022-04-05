import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    padding: 1.5rem 3.5rem;

    background-color: var(--shape);

    @media (max-width: 720px) {
        height: 4rem;
    }

    button {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        background-color: white;

        height: 52px;
        border: none;

        @media (max-width: 720px) {
            height: 26px;
        }

        div {
            width: 0.75rem;
            height: 0.75rem;

            border-radius: 0.4rem;
            background-color: var(--light-yellow);

            @media (max-width: 720px) {
                width: 0.4rem;
                height: 0.4rem;
            }
        }
    }

    ul {
        li {
            display: inline-block;
        }
    }
`;


export const LogoZutterman = styled.img.attrs(
    {
        alt: 'Zutterman',
    }
)`
    height: 100%;
`;