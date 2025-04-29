import "@material/web/icon/icon.js"
import * as Dialog from "@radix-ui/react-dialog"
import { useNavigate } from 'react-router-dom'

import { ModalOverlay, ModalContent, ExitButton, CanceledButton, DeleteButton, HeaderContainer, BodyContainer, ButtonContainer } from "./styles"

export default function CanceledClientModal() {
  const navigate = useNavigate()

  const handleDeleteClick = () => {
    navigate('/GeralServiceOrder')
  };

  return (
    <Dialog.Root>
      {/* Trigger que abre o modal */}
      <Dialog.Trigger asChild>
        <ExitButton>
            Sair
        </ExitButton>
      </Dialog.Trigger>

      {/* Conteúdo do modal */}
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
            <HeaderContainer>CONFIRMAÇÃO</HeaderContainer>
            <BodyContainer>Tem certeza que deseja cancelar a ordem de serviço em andamento?</BodyContainer>
            <ButtonContainer>
                <Dialog.Close asChild>
                  <CanceledButton>Cancelar</CanceledButton>
                </Dialog.Close>
                <DeleteButton onClick={handleDeleteClick}>
                  Apagar
                </DeleteButton>
            </ButtonContainer>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
