import styled from "styled-components"

export const WhatsAppButtonStyles = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme['green-500']};
  border: 1px solid ${(props) => props.theme['green-500']};
  border-radius: 30px;
  padding: 0.5rem 2rem;
  cursor: pointer;

  img {
    width: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme['green-400']};
  }
`;
