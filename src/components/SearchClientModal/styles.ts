import styled from 'styled-components';
import * as Dialog from "@radix-ui/react-dialog";

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

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  z-index: 1001;
  max-width: 1000px; 
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const ModalCloseIcon = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const SaveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

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

export const SearchContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;