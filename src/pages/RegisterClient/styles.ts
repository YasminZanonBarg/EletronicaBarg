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
    margin-top: 5.5rem;
    margin-right: 3.5rem;
  }
`;

export const PersonalDataSection = styled.div`
  .first_part{
      margin-top:2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
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
      width: 100%;

      .name {
        width: 49%;
      }

      .cpf {
        width: 23%;
      }

      .rg {
        width: 23%;
      }
  }

  .third_part{
      margin-top:1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2.5rem;
      width: 100%;

      div {
        flex: 1; 
        max-width: 50%;
        min-width: 10%;
      }
  }
`;

export const AddressSection = styled.div`
  .first_part {
    margin-top:1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    .cep {
      width: 19%;
    }

    .city {
      width: 33%;
    }

    .neighborhood {
      width: 43%;
    }
  }

  .second_part {
    margin-top:1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    .street {
      width: 45%;
    }

    .house_number {
      width: 7%;
    }

    .complement {
      width: 43%;
    }
  }
`;

export const ContactSection = styled.div`
  .first_part{
    margin-top:2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    div {
      flex: 1; 
      max-width: 23%;
      min-width: 10%;
    }
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem; 

  .right_buttons {
    display: flex;
    gap: 1rem;
    margin-right: 1.5rem;
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
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['green-400']};
    }
  }
`;