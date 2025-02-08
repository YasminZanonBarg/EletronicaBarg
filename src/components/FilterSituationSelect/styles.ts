import styled from "styled-components";

export const FilterSituationSelectContainer = styled.div`
  width: 20rem;
  padding: 0rem 3rem;
`;

export const CustomSelect = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['white']};
  color: ${(props) => props.theme['gray-500']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.3s;

  .selected {
    padding: 8px;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-left: 8px;
    font-size: 1.2rem;
  }

  &:hover {
    border-color: ${(props) => props.theme['green-500']};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    background-color: ${(props) => props.theme['white']};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: none;
  }

  &:hover ul {
    display: block;
  }
`;

export const CustomOption = styled.li`
  padding: 8px;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-500']};
  background-color: ${(props) => props.theme['white']};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['white']};
  }
`;
