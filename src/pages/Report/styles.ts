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
    margin-left: 8rem;
    margin-top: 6rem;
    margin-right: 3.5rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 

  span {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center; 
  }

  span div {
    display: flex;
    align-items: center;
  }

  .save_button {
    margin-top: 1rem;
  }
`;

export const ReportContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  div {
    flex: 1 1 calc(25% - 1.5rem);
    min-width: 20%;
    min-height: 100%;
  }
`;
