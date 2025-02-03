import "@material/web/textfield/outlined-text-field.js"
import "@material/web/icon/icon.js"
import "@material/web/iconbutton/icon-button.js"
import '@material/web/button/filled-button.js'

import { Container, ImageContainer, TextContainer } from "./styles"

import backgroundLogin from '../../assets/background_login.png'


export function Login() {
    return(
        <Container>

            <TextContainer>
                <div>
                    <h1>Eletrônica</h1>
                    <h1>Barg</h1>
                </div>

                <form>
                    <md-outlined-text-field
                        label="Username"
                        error
                        error-text="Username is not available"
                        required
                    >
                    <md-icon slot="trailing-icon">error</md-icon>
                    </md-outlined-text-field>

                    <md-outlined-text-field label="Password" type="password">
                    <md-icon-button toggle slot="trailing-icon">
                        <md-icon>visibility</md-icon>
                        <md-icon slot="selected">visibility_off</md-icon>
                    </md-icon-button>
                    </md-outlined-text-field>
                </form>
                            
                <md-filled-button>Entrar</md-filled-button>
            </TextContainer>
            
            <ImageContainer>
                <img src={ backgroundLogin } alt="" />
            </ImageContainer>

        </Container>
    )
}
