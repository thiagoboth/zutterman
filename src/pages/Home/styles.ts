import styled from "styled-components";

export const Container = styled.main`
    min-height: 200px;
`;

export const FirstSection = styled.section`
    width: 100%;
    height: 61rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1080px) {
        flex-direction: column;
    }

    @media (max-width: 720) {
        height: 32rem;
    }

    h3 {
        font-size: 5.5rem;

        color: var(--text);

        @media (max-width: 720px) {
            font-size: 4rem;

            margin-bottom: 1.7rem;

            align-self: left;
        }
    }

    img {
        width: 46rem;
        height: 23rem;
        mix-blend-mode: multiply;

        @media (max-width: 720px) {
            width: 21rem;
            height: 10rem;
        }
    }
`;

export const SecondSection = styled.section`
    width: 100%;
    height: 64rem;

    @media (max-width: 1080px) {
        height: 40rem;
    }

    background-color: var(--blue);

    display: flex;
`;

export const SecondSectionContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    div{
        margin-top: 28rem;
        margin-left: 10.5rem;

        @media (max-width: 1080px) {
            margin-top: 4.7rem;
            margin-left: 1rem;
        }
    }

    h3 {
        font-size: 4.5rem;
        color: var(--text-light);

        margin-bottom: 1.6rem;

        @media (max-width: 720px) {
            font-size: 3rem;
        }
    }

    p {
        font-size: 3rem;
        color: var(--text-light);

        @media (max-width: 720px) {
            font-size: 1.9rem;
        }
    }

    img {
        width: 65rem;
        height: 43rem;

        mix-blend-mode: multiply;

        position: absolute;

        top: 2rem;
        right: 0px;

        @media (max-width: 1080px) {
            width: 18.5rem;
            height: 12.2rem;


            top: 22.5rem;
        }
    }

`;