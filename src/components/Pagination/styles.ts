import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  button {
    background: ${(props) => props.theme["green-500"]};
    color: white;
    border: none;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    border-radius: 20px;
    transition: 0.3s;
    font-size: 0.875rem;

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;
