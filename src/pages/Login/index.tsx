import "@material/web/textfield/outlined-text-field.js"
import "@material/web/icon/icon.js"
import "@material/web/iconbutton/icon-button.js"
import "@material/web/button/filled-button.js"

import {
  Container,
  ImageContainer,
  TextContainer,
  OutlinedTextFieldStyled,
  FilledButtonStyled,
} from "./styles"

import backgroundLogin from "../../assets/background_login.png"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { createLogin } from "../../http/create-login"
import { useAuth } from "../../auth/AuthContext" 

const createLoginForm = z.object({
  nomeUsuario: z.string(),
  senha: z.string()
})

type CreateLoginForm = z.infer<typeof createLoginForm>

export function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth() 

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<CreateLoginForm>({
    resolver: zodResolver(createLoginForm),
  })

  async function handleCreateLogin(data: CreateLoginForm) {
    setError(null)

    try {
      const response = await createLogin({
        nomeUsuario: data.nomeUsuario,
        senha: data.senha,
      })

      console.log("Login OK:", response)
      login()
      navigate("/GeralServiceOrder")
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Erro ao fazer login")
      }
    } finally {
      reset()
    }
  }

  return (
    <Container>
      <TextContainer>
        <div>
          <h1>Eletrônica</h1>
          <h1>Barg</h1>
        </div>

        <form onSubmit={handleSubmit(handleCreateLogin)}>
          <OutlinedTextFieldStyled
            label="Usuário"
            required
            {...register("nomeUsuario")}
          />

          <OutlinedTextFieldStyled
            label="Senha"
            type={showPassword ? "text" : "password"}
            required
            {...register("senha")}
          >
            <md-icon-button
              class="icon-button"
              toggle
              slot="trailing-icon"
              onClick={(e) => {
                e.preventDefault()
                setShowPassword((prev) => !prev)
              }}
            >
              <md-icon>{showPassword ? "visibility_off" : "visibility"}</md-icon>
            </md-icon-button>
          </OutlinedTextFieldStyled>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <FilledButtonStyled type="submit" label="Entrar">
            Entrar
          </FilledButtonStyled>
        </form>
      </TextContainer>

      <ImageContainer>
        <img src={backgroundLogin} alt="Login background" />
      </ImageContainer>
    </Container>
  )
}