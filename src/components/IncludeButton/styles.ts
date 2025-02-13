import styled from "styled-components";

interface IncludeButtonProps extends React.HTMLProps<HTMLElement> {
  href?: string;
}

// Definindo o estilo diretamente no styled-component para o Web Component
export const IncludeButtonContainer = styled("md-outlined-button")<IncludeButtonProps>`
  --md-filled-button-container-shape: 30px;
  --md-sys-color-primary: ${(props) => props.theme["green-500"]};
  --md-sys-color-on-primary: ${(props) => props.theme["green-300"]};
  width: 100%;
  max-width: 7rem;
  height: 3rem;
  background: ${(props) => props.theme["green-300"]};
  font-size: 1rem;
  

  span {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  md-icon {
    font-size: 1.3rem;
  }
`;