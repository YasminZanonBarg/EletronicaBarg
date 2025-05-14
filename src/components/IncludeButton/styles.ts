import styled from "styled-components";

interface IncludeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const IncludeButtonContainer = styled("md-outlined-button")<IncludeButtonProps>`
  --md-outlined-button-outline-width: 0; /* remove a borda */
  --md-outlined-button-outline-color: transparent;
  --md-outlined-button-container-shape: 30px;
  --md-sys-color-primary: ${(props) => props.theme["green-500"]};
  --md-sys-color-on-primary: ${(props) => props.theme["green-300"]};
  background: ${(props) => props.theme["green-300"]};
  font-size: 1rem;
  width: 100%;
  max-width: 7rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center; /* centraliza horizontalmente */

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem; /* espaço entre o ícone e o texto */
    white-space: nowrap;
  }

  md-icon {
    font-size: 1.3rem;
  }
`;
