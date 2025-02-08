import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { IncludeButton } from "../../components/IncludeButton"
import { SearchButton } from "../../components/SearchButton"
import { FilterSituationSelect } from "../../components/FilterSituationSelect"

import { Container, Content, FirstContent } from "./styles"


export function GeralServiceOrder() {
  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>

          <FirstContent>
            <div className="left-content">
              <h1>Ordem de Serviço</h1>
              <IncludeButton />
            </div>

            <div>
              <SearchButton placeholder="Nº O.S. ou nome do cliente" />
            </div>
          </FirstContent>
        
          <FilterSituationSelect />
        </main>

      </Content>
    </Container>
  );
}
