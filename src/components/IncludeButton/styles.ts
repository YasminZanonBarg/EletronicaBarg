import styled from "styled-components";

interface IncludeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const IncludeButtonContainer = styled.button<IncludeButtonProps>`
  background-color: ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme["green-500"]};
  border: 1px solid ${(props) => props.theme["green-500"]};
  border-radius: 30px;
  width: 100%;
  max-width: 7rem;
  height: 3rem;
  font-size: 1rem;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center; 

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }

  md-icon {
    font-size: 1.3rem;
  }
`;
