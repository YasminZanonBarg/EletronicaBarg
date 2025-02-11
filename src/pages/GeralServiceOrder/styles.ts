import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  height: 100vh; 
`;

export const Navbar = styled.div`
  background-color: #333;
  color: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;  
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
    padding: 1rem; 
    flex-direction: column; 
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto; 
  margin: 2rem 3rem; 
  color: ${(props) => props.theme["gray-600"]};
  
  @media (max-width: 768px) {
    margin: 1rem;  
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

    md-icon {
      color: ${(props) => props.theme["gray-600"]};
      margin-right: 0.5rem;
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
    font-size: 0.875rem; 
  }
`;

const STATUS_COLOR = {
  aguardando_orcamento: 'aguardando-orcamento',
  pendente_aprovacao: 'pendente-aprovacao',
  conserto_negado: 'conserto-negado',
  pendente_conserto: 'pendente-conserto',
  consertado: 'consertado',
  consertado_retirado: 'consertado-retirado',
  sem_conserto_retirado: 'sem-conserto-retirado',
} as const  

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center; 
  gap: 0.5rem;

  &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      border-radius: 9999px;
      background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`