import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.2rem;
  color: ${(props) => props.theme['gray-600']};
`;

export const StyledInput = styled.input`
  padding: 1vh;
  font-size: 0.875rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 15px;
  background-color: transparent;


  &[readonly] {
    background-color: ${(props) => props.theme['gray-200']};
    cursor: not-allowed;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 15px;
  font-size: 0.875rem;
  resize: vertical; 
  min-height: 5vh; 
  max-height: 12vh; 
  background-color: transparent;
`;
