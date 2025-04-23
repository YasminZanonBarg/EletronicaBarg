import styled from "styled-components"

export const SearchFormContainer = styled.form<{ size: 'small' | 'medium' | 'large' }>`
  div {
    display: flex;
  }

  input {
    width: ${(props) => {
    switch (props.size) {
      case 'small':
        return '15rem';
      case 'large':
        return '30rem';
      default:
        return '20rem'; // Tamanho padrão (medium)
    }
  }};
    height: ${(props) => (props.size === 'small' ? '2.5rem' : '3rem')};
    padding: ${(props) => (props.size === 'small' ? '0.5rem 1rem' : '1rem 2rem')};

    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border: 0;

    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['gray-600']};
    font-size: ${(props) => (props.size === 'small' ? '0.875rem' : '1rem')};
  }

  input:focus {
    outline: none;
  }

  button {
    width: ${(props) => (props.size === 'small' ? '3rem' : '4rem')};

    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: 0;

    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['gray-600']};

    cursor: pointer;
    transition: color 0.2s ease;
  }

  button md-icon {
    color: ${(props) => props.theme['gray-600']};
    transition: color 0.2s ease;
  }

  button:hover md-icon {
    color: ${(props) => props.theme['gray-500']}; // Cor mais clara ao hover
  }
`