import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100vh; /* Ocupa a tela inteira */
`;

export const TextContainer = styled.div`
  width: 45%;
  padding: 7rem;
  
  div {
    margin-bottom: 2.5rem;
  }

  h1 {
    font-size: 5rem;
    text-shadow: 2px 2px 4px ${(props) => props.theme['gray-600']};
  }

`;

export const ImageContainer = styled.div`
  width: 55%;
  display: flex;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
