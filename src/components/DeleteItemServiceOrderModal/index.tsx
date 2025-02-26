import "@material/web/icon/icon.js"
import * as Dialog from "@radix-ui/react-dialog";

import { ModalOverlay, ModalContent, CanceledButton, DeleteButton, HeaderContainer, BodyContainer, ButtonContainer } from "./styles";

export default function DeleteItemServiceOrderModal() {
  return (
    <Dialog.Root>
      {/* Trigger que abre o modal */}
      <Dialog.Trigger asChild>
        <button>
          <md-icon>delete</md-icon>
        </button>
      </Dialog.Trigger>

      {/* Conteúdo do modal */}
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
            <HeaderContainer>EXCLUIR ITEM</HeaderContainer>
            <BodyContainer>Tem certeza que deseja deletar a ordem de serviço selecionada?</BodyContainer>
            <ButtonContainer>
                <CanceledButton>Cancelar</CanceledButton>
                <DeleteButton>Apagar</DeleteButton>
            </ButtonContainer>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
