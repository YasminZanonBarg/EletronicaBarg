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
    margin-left: 7.5rem;
    margin-top: 7rem;
    margin-right: 3.5rem;
  }
`;

export const DefaultSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;
  width: 100%;

  div {
    flex: 1; 
    max-width: 23%;
    min-width: 10%;
  }
`;


export const EquipmentSection = styled.div`
  .first_part{
    margin-top:2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1em;
    width: 100%;

    div {
      flex: 1; 
      max-width: 23%;
      min-width: 10%;
    }
  }

  .second_part{
    margin-top:1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1em;
    width: 100%;

    div {
      flex: 1; 
      max-width: 20%;
      min-width: 48.7%;
    }
 
  }
`;

export const ClientSection = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0 0.5rem 0; 
`;


export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const StyledTextField = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem; 
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 30px;
  background-color: transparent;
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-600']};
`;

export const EditIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
  font-size: 1.2rem;
`;

export const WhatsAppButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme['green-500']};
  border: 1px solid ${(props) => props.theme['green-500']};
  border-radius: 30px;
  padding: 0.5rem 2rem;
  cursor: pointer;

  img {
    width: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme['green-400']};
  }
`;

export const AccompanimentSection = styled.div`
  .first_part {
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    width: 100%;
    gap: 1rem;

    #location {
      width: 80vh;
    }

    #pre_budget {
      width: 25vh;
    }

    md-icon {
      margin-right: 1rem;      
      margin-bottom: 0.5rem;
      align-self: flex-end; 
      color: ${(props) => props.theme['gray-500']}; 

    }
  }

  .second_part {
    display: flex;
    width: 100%;
    gap: 1rem;

    .first_half {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap; 

      #reasons {
        width: 41vh;
      }

      #notes {
        width: 41vh;
      }
    }

    .second_half {
      margin-left: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      #workforce {
        width: 25vh;
      }

      #parts {
        width: 25vh;
      }

      p {
        color: ${(props) => props.theme['gray-300']};
        font-style: italic;
        font-size: 0.875rem;
      }
    }
  }
`;

export const SectionButtons = styled.span`
  display: flex;
  
  .simple_button {
    all: unset;
    color: ${(props) => props.theme['gray-500']};
    font-weight: bold;
  }

  .save_button {
    background-color: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-500']};
    border: none;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['green-400']};
    }
  }
`