import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

import { ClientProvider } from "./contexts/ClientContext"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
          <ClientProvider>
            <Router />
          </ClientProvider>
      </BrowserRouter>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}