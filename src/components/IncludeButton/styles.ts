import styled from "styled-components"

export const IncludeButtonContainer = styled('md-outlined-button')`
  --md-filled-button-container-shape: 30px; 
  --md-sys-color-primary: ${(props) => props.theme['green-500']};
  --md-sys-color-on-primary: ${(props) => props.theme['green-200']};

  width: 100%;
  max-width: 7rem; 
  height: 3rem; 
  background: ${(props) => props.theme['green-200']};;

  
  span {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  md-icon {
    font-size: 1.2rem;
  } 
`;