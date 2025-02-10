import IconEletronicaBarg from '../../assets/icon_eletronica_barg.png'
import NameEletronicaBarg from '../../assets/name_eletronica_barg.png'
import { HeaderContainer } from "./styles"

export function Header() {
    return(
        <HeaderContainer>
            <img src={IconEletronicaBarg} alt="Ícone Eletrônica Barg" width={26}/>
            <img src={NameEletronicaBarg} alt="Nome Eletrônica Barg" />
        </HeaderContainer>
    )
}

