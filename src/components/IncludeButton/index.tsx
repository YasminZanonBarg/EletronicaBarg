import "@material/web/icon/icon.js"
import '@material/web/button/outlined-button.js'

import { IncludeButtonContainer } from "./styles"


export function IncludeButton() {
    return(
        <IncludeButtonContainer href="http://localhost:5173/RegisterServiceOrder">
            <span>
                <md-icon>add</md-icon>
                Incluir
            </span>
        </IncludeButtonContainer>
    )
} 