import styled from "styled-components";

export const RailContainer = styled.nav`
  position: fixed;
  width: 4vw; /* Reduz a largura com base no tamanho da tela */
  height: 100vh; /* Altura do container ajustada para 100% da altura da tela */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  background-color: ${(props) => props.theme['white']};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease, height 0.3s ease;

  /* Media queries para telas pequenas */
  @media (max-width: 768px) {
    width: 10vw;  /* Aumenta a largura para telas menores */
  }

  @media (max-width: 480px) {
    width: 15vw;  /* Aumenta ainda mais para telas muito pequenas */
  }
`;

export const NavItem = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "#D6DFD1" : "transparent")};
  color: ${(props) => (props.active ? "#072100" : "#333")};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px; /* Largura fixa, mas pode ser ajustada para 'vw' se necessário */
  height: 70px; /* Altura fixa */
  padding: 10px;
  margin: 10px 0;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #EDF5E9;
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

  /* Media queries para ajustar tamanho em telas menores */
  @media (max-width: 768px) {
    width: 50px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 55px;
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

  &:hover {
    background: #EDF5E9;
  }

  /* Ajustes para telas menores */
  @media (max-width: 768px) {
    bottom: 10px;
  }

  @media (max-width: 480px) {
    bottom: 5px;
  }
`;
