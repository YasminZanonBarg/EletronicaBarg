
export const RailContainer = styled.nav`
  width: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  background-color: ${(props) => props.theme['white']};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const NavItem = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "#D6DFD1" : "transparent")};
  color: ${(props) => (props.active ? "#072100" : "#333")};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px; /* Define uma largura fixa */
  height: 70px; /* Define uma altura fixa */
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
    white-space: nowrap; /* Impede que o texto quebre */
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 20px; /* Mantém fixo na parte inferior */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: #EDF5E9;
  }
`;
