import styled from "styled-components";

export const SectionContainer = styled.div`
  position: relative;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  padding: 0 1.5rem 1.5rem 1.5rem;
  margin-top: 2rem;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: -16px;
  left: 15px;
  background-color: ${(props) => props.theme['white']};
  padding: 4px 12px; 
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
`;

export const Title = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme['gray-500']};
  font-size: 1rem;
  margin: 0;
`;
