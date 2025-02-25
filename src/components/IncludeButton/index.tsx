import "@material/web/icon/icon.js"
import '@material/web/button/outlined-button.js'

import { IncludeButtonContainer } from "./styles"

interface IncludeButtonProps {
    url: string;
}

export function IncludeButton({ url }: IncludeButtonProps) {
    return(
        <IncludeButtonContainer href={url}>
            <span>
                <md-icon>add</md-icon>
                Incluir
            </span>
        </IncludeButtonContainer>
    )
}
