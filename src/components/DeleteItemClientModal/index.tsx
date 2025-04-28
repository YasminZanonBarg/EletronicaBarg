import "@material/web/icon/icon.js"
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteClient } from "../../http/delete-client"; // Função para deletar cliente
import { ModalOverlay, ModalContent, CanceledButton, DeleteButton, HeaderContainer, BodyContainer, ButtonContainer } from "./styles";

export default function DeleteItemClientModal({
  clientId, 
  onDeleteSuccess 
}: { clientId: string, onDeleteSuccess: () => void }) {
  
  const [isOpen, setIsOpen] = useState(false);

  // Mutation para deletar o cliente
  const { mutateAsync, isPending } = useMutation({
    mutationFn: deleteClient,
    onSuccess: () => {
      onDeleteSuccess(); // Chamando função de sucesso após a exclusão
      setIsOpen(false); // Fechar o modal
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      alert(errorMessage); // Exibe o erro em caso de falha
    },
  });

  const handleDelete = async () => {
    try {
      await mutateAsync({ id: clientId }); // Deletando o cliente pelo ID
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button onClick={() => setIsOpen(true)}>
          <md-icon>delete</md-icon>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <HeaderContainer>EXCLUIR ITEM</HeaderContainer>
          <BodyContainer>Tem certeza que deseja deletar o cadastro selecionado?</BodyContainer>
          <ButtonContainer>
            <CanceledButton onClick={() => setIsOpen(false)}>Cancelar</CanceledButton>
            <DeleteButton onClick={handleDelete} disabled={isPending}>
              Apagar
            </DeleteButton>
          </ButtonContainer>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
