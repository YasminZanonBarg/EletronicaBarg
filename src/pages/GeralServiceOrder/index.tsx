import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { IncludeButton } from "../../components/IncludeButton"
import { SearchButton } from "../../components/SearchButton"

import { Container, Content } from "./styles"


export function GeralServiceOrder() {
  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
        <h1>Ordem de Serviço</h1>
        <IncludeButton />
        <SearchButton placeholder="Nº O.S. ou nome do cliente" />

        </main>

      </Content>
    </Container>
  );
}
