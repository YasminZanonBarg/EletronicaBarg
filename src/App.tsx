import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { ServiceOrderProvider } from "./contexts/ServiceOrderContext"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <ServiceOrderProvider>
          <Router />
        </ServiceOrderProvider>
      </BrowserRouter>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}