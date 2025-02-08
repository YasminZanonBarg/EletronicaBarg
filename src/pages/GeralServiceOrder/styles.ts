import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100vh; 
`;

export const Content = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column; 
`;

export const FirstContent = styled.div`
  padding: 2rem 3rem 1.5rem 3rem;
  display: flex;
  justify-content: space-between;

  .left-content {
    display: flex;
    gap: 2rem;
    flex: 1; 

    h1 {
       white-space: nowrap;
    }
  }
`;

