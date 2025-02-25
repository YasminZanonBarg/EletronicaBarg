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

export const EditIcon = styled.button`
  all: unset;
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;

    .location {
      width: 78%;
    }

    .pre_budget {
      width: 15%;
    }

    button {
      all: unset;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      margin-right: 1rem;

      md-icon {
        color: ${(props) => props.theme['gray-500']}; 
      }
    }
  }

  .second_part {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;

    .first_half {
      display: flex;
      gap: 1rem;
      width: 78%;

      .text-field-wrapper {
        flex: 1;
        min-width: 0; 
      }
    }

    .second_half {
      margin-left: 3.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 15%;

      .text-field-wrapper {
        flex: 1;
        min-width: 0; 
      }

      p {
        color: ${(props) => props.theme['gray-300']};
        font-style: italic;
        font-size: 0.875rem;
      }
    }
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem; 

  .right_buttons {
    display: flex;
    gap: 1rem;
    margin-right: 1.5rem;
  }

  .left_buttons {
    margin-left: 1.5rem;
  }

  .simple_button {
    all: unset;
    color: ${(props) => props.theme['gray-500']};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['gray-600']};
    }
  }

  .save_button {
    background-color: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-500']};
    border: none;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: ${(props) => props.theme['green-400']};
    }
  }
`;