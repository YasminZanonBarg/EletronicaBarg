import { useMutation } from '@tanstack/react-query';
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { deleteServiceOrder } from "../../http/delete-service-order";
import { ModalOverlay, ModalContent, CanceledButton, DeleteButton, HeaderContainer, BodyContainer, ButtonContainer } from "./styles";

export default function DeleteItemServiceOrderModal({
  serviceOrderId, 
  onDeleteSuccess 
}: { serviceOrderId: string, onDeleteSuccess: () => void }) {
  
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: deleteServiceOrder,
    onSuccess: () => {
      onDeleteSuccess();
      setIsOpen(false);
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      alert(errorMessage);
    },
  });

  const handleDelete = async () => {
    try {
      await mutateAsync({ id: serviceOrderId });
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
          <BodyContainer>Tem certeza que deseja deletar a ordem de serviço selecionada?</BodyContainer>
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