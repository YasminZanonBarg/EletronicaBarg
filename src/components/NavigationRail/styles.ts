import styled from "styled-components";

export const RailContainer = styled.nav`
  position: fixed;
  width: 5vw; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  background-color: ${(props) => props.theme['white']};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease, height 0.3s ease;

  @media (max-width: 768px) {
    width: 10vw;  
    max-width: 5vw;
  }

  @media (max-width: 480px) {
    width: 15vw;  
  }
`;

export const NavItem = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "#D6DFD1" : "transparent")};
  color: ${(props) => props.theme["gray-600"]};
  border: none;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%; 
  height: 10vh; 
  padding: 10px;
  margin: 10px 0;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${(props) => props.theme["green-200"]};
  }

  .icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .label {
    font-size: 12px;
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  transition: background 0.3s ease;

  md-icon {
      color: ${(props) => props.theme["gray-600"]};
      margin-right: 0.5rem;
    }

  &:hover {
    background: ${(props) => props.theme["green-200"]};
  }

  /* Ajustes para telas menores */
  @media (max-width: 768px) {
    bottom: 10px;
  }

  @media (max-width: 480px) {
    bottom: 5px;
  }
`;
