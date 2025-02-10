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
    margin-top: 5rem;
    padding-top: 3rem;  // Garante que o conteúdo não fique colado ao topo após o header
  }
`;

export const FirstContent = styled.div`
  padding: 2rem 3rem 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  
  .left-content {
    display: flex;
    gap: 2rem;
    flex: 1; 

    h1 {
       white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem; // Menos padding em telas menores
    flex-direction: column; // Empilhar os itens em telas menores
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto; /* Adiciona a rolagem horizontal quando necessário */
  margin: 2rem 3rem; /* Espaçamento ao redor da tabela */

  @media (max-width: 768px) {
    margin: 1rem;  // Menos margem em telas menores
  }
`;

export const ServiceOrderTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0; 
  border: 1px solid #ccc;
  border-radius: 20px; 
  box-shadow: 0 0 0 0.5 #ccc; 

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;

    .entrada {
      display: flex;
      align-items: center; /* Alinha verticalmente */
    }
  }

  tbody tr:last-child td {
    border-bottom: none; 
  }

  th {
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem; // Reduz o tamanho da fonte em telas menores
  }
`;
