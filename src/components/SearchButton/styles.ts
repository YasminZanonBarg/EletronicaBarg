import styled from "styled-components"

export const SearchFormContainer = styled.form`

  div {
    display: flex;
  }

  input {
    width: 20rem;
    height: 3rem;
    padding: 1rem 2rem;

    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border: 0;

    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['gray-600']};
    font-size: 1rem;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 4rem;

    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: 0;

    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['gray-600']};
  }
`

