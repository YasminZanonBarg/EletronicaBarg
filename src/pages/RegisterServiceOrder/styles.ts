import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;  // Altera para coluna, para evitar sobreposição
  height: 100vh; 
`;

export const Navbar = styled.div`
  background-color: #333;
  color: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;  // Garante que a navbar fique sempre no topo
`;

export const Content = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  main {
    margin-left: 5rem;
    margin-top: 4.5rem;
  }
`;