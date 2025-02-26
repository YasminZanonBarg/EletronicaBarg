import "@material/web/icon/icon.js"
import * as Dialog from "@radix-ui/react-dialog";

import { ModalOverlay, ModalContent, ExitButton, CanceledButton, DeleteButton, HeaderContainer, BodyContainer, ButtonContainer } from "./styles";

export default function CanceledClientModal() {
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
                <CanceledButton>Cancelar</CanceledButton>
                <DeleteButton>Apagar</DeleteButton>
            </ButtonContainer>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
