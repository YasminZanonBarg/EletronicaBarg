import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100vh; 
`;

export const Content = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column; 
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
`;

export const TableContainer = styled.div`
  overflow-x: auto; /* Adiciona a rolagem horizontal quando necessário */
  margin: 2rem 3rem; /* Espaçamento ao redor da tabela */
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
`;
