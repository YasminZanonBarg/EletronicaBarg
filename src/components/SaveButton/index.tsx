import { SaveButtonStyle } from './styles'

type SaveButtonProps = {
  type?: "button" | "submit"; // Adiciona o tipo de botão
  onClick?: () => void;
};

export function SaveButton({ type = "button", onClick }: SaveButtonProps) {
  return (
    <SaveButtonStyle type={type} onClick={onClick}>
      Salvar
    </SaveButtonStyle>
  );
}