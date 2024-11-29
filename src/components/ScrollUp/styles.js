import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    right: 2rem;
    bottom: 3rem;
    z-index: 20;

    @media (max-width: 767px) {
        bottom: none;
        top: 3rem;
    };
`;

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: ${props => props.theme.primary2 };
    border-radius: .3rem;

    &:hover {
        background-color: ${props => props.theme.primary1 };
    };

    svg {
        width: 25px;
        height: 25px;
        color: ${props => props.theme.primary_lighter };
    };
`;