import styled from "styled-components"

export const HeaderContainer = styled.span`
    display: flex;
    justify-content: center; 
    padding: 1rem;
    gap: 0.25rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 95vw;
    right: 0;
    background: ${(props) => props.theme['white']};
`