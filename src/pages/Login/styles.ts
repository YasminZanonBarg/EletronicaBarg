import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100vh; 
`

export const TextContainer = styled.div`
  width: 45%;
  padding: 5rem 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  
  div {
    margin-bottom: 2.5rem;
  }

  h1 {
    font-size: 4.5vw; 
    text-shadow: 2px 2px 4px ${(props) => props.theme['gray-600']};
  }
`

export const ImageContainer = styled.div`
  width: 55%;
  display: flex;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

// Web Component estilizado: 
export const OutlinedTextFieldStyled = styled('md-outlined-text-field') <{
  label?: string;
  error?: boolean;
  "error-text"?: string;
  required?: boolean;
  type?: string;
  children?: React.ReactNode;
}>`
  --md-outlined-text-field-container-shape: 30px;
  --md-outlined-text-field-focus-outline-color: ${(props) => props.theme['green-400']};	
  --md-sys-color-primary: ${(props) => props.theme['green-500']};	

  display: block;
  margin-bottom: 1.8rem;
  width: 100%;
  max-width: 30rem; 
  height: 3.4rem;

  .icon-button {
    margin-left: -1rem; 
  }
`

export const FilledButtonStyled = styled('md-filled-button') <{
  type?: string;
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}>`
  --md-filled-button-container-shape: 30px; 
  --md-sys-color-primary: ${(props) => props.theme['green-500']};
  --md-sys-color-on-primary: ${(props) => props.theme['green-100']};
  --md-filled-button-label-text-color: ${(props) => props.theme['white']};	

  width: 100%;
  max-width: 30rem; 
  height: 3.4rem; 
  opacity: 0.8;
  margin-top: 1rem;
`;
