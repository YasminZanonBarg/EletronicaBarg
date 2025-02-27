import styled from "styled-components";

export const ReportChartStyle = styled.div`
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  background-color: ${(props) => props.theme['white']};
  color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  text-align: left;
  width: 100%; /* Garante que se ajuste ao container */
  height: 100%; /* Mantém a altura do contêiner pai */

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100% - 2rem); /* Ajusta a altura para não sobrepor o título */
    font-weight: bold;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-600']};
  }
`;
