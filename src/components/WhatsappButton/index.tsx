import { WhatsAppButtonStyles } from './styles'
import IconWhatsApp from '../../assets/whatsapp_icon.png'

type WhatsAppButtonProps = {
  phoneNumber?: string
  type?: "button" | "submit" | "reset" 
};

export function WhatsAppButton({ phoneNumber, type = "button" }: WhatsAppButtonProps) { 
  const handleClick = () => {
    if (!phoneNumber) {
      alert('Número de telefone não disponível');
      return
    }

    const whatsappUrl = `https://wa.me/55${phoneNumber}`;
    window.open(whatsappUrl, '_blank')
  }

  return (
    <WhatsAppButtonStyles type={type} onClick={handleClick}>
      WhatsApp
      <img src={IconWhatsApp} alt="Ícone Eletrônica Barg" />
    </WhatsAppButtonStyles>
  )
}
