import "@material/web/icon/icon.js"
import '@material/web/button/outlined-button.js'
import { IncludeButtonContainer } from "./styles"

interface IncludeButtonProps {
    onClick: () => void;
}

export function IncludeButton({ onClick }: IncludeButtonProps) {
    return (
        <IncludeButtonContainer as="button" onClick={onClick}>
            <span>
                <md-icon>add</md-icon>
                Incluir
            </span>
        </IncludeButtonContainer>
    )
}