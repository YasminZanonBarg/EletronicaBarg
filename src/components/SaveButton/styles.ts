import styled from "styled-components"

export const SaveButtonStyle = styled.button`
    background-color: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-500']};
    border: none;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    font-weight: bold;

    &:hover {
    background-color: ${(props) => props.theme['green-400']};
    }
`;


