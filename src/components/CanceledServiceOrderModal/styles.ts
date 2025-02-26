import styled from 'styled-components';
import * as Dialog from "@radix-ui/react-dialog";

export const ExitButton = styled.button`
    all: unset;
    color: ${(props) => props.theme['gray-500']};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['gray-600']};
    }
`;

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme['white']};
  border-radius: 8px;
  z-index: 1001;
  width: 20%;
  overflow: hidden; 
`;

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme['red-200']};
  color: ${(props) => props.theme['white']};
  padding: 0.75rem 1.5rem; 
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-align: left;
  width: 100%;
`;

export const BodyContainer = styled.div`
  padding: 1.5rem; 
  text-align: left;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-700']};
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  gap: 0.5rem; 
  margin-bottom: 0.5rem; 
  margin-right: 0.5rem; 
`;

export const CanceledButton = styled.button`
  background-color: ${(props) => props.theme['green-600']};
  color: ${(props) => props.theme['white']};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`;

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme['red-200']};
  color: ${(props) => props.theme['white']};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['red-400']};
  }
`;