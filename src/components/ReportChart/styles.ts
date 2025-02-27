import styled from "styled-components";

export const ReportChartStyle = styled.div`
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  background-color: ${(props) => props.theme['white']};
  color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  text-align: left;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
