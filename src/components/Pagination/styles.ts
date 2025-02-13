import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: ${(props) => props.theme["green-500"]};
    transition: 0.3s;

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }

    md-icon {
      font-size: 24px;
    }
  }
`;

