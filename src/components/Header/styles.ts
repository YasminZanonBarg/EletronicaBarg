import styled from "styled-components"

export const HeaderContainer = styled.span`
    display: flex;
    justify-content: center; 
    padding: 1rem;
    gap: 0.25rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 6vw; 
    width: 95vw;
    background: ${(props) => props.theme['white']};
    z-index: 1000;
    
    /* Ajustes para telas menores */
    @media (max-width: 768px) {
        left: 10vw;
        width: 90vw;
    }

    @media (max-width: 480px) {
        left: 15vw;
        width: 85vw;
    }
`;
