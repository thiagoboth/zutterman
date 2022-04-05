import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 15rem;
    
    @media (max-width: 1080px) {
        height: 25rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 50%;
    height: 100%;
    
    padding-left: 10.5rem;

    @media (max-width: 1080px) {
        width: 100%;

        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        padding-left: 0px;
    }

    div {
        @media (max-width: 1080px) {
            display: flex;
            align-items: center;

            flex-direction: column;
        }
    }

    h4{
        color: var(--text);

        font-size: 1.8rem;

        margin-top: 3rem;
        margin-bottom: 1.5rem;

        @media (max-width: 1080px) {
            margin-top: 2.8rem;
        }
    }

    p {
        color: var(--text);
        font-weight: 400;

        @media (max-width: 1080px) {
            text-align: center;
        }
    }
`;

export const ContainerIcons = styled.section`
    @media (max-width: 1080px) {
        display: flex;
        flex-direction: row;
    }

    img {
        height: 2.8rem;
        margin-right: 1.5rem;

        :last-child {
            margin-right: 0px;
        }
    }
`