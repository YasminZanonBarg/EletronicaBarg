import "@material/web/icon/icon.js"
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { IncludeButton } from "../../components/IncludeButton"
import { SearchButton } from "../../components/SearchButton"
import { FilterSituationSelect } from "../../components/FilterSituationSelect"
import { Container, Content, FirstContent, ServiceOrderTable, TableContainer } from "./styles"
import { ServiceOrderContext } from "../../contexts/ServiceOrderContext"
import { useContext } from "react"

export function GeralServiceOrder() {
  const { serviceOrder } = useContext(ServiceOrderContext)
  const dataFormatter = new Intl.DateTimeFormat('pt-BR')

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

          <TableContainer>
            <ServiceOrderTable>
              <thead>
                  <tr>
                    <th width="15%"></th>
                    <th width="15%">Número O.S.</th>
                    <th width="15%">
                      <div className="entrada">
                        Entrada
                        <md-icon>arrow_drop_down</md-icon>
                      </div>
                    </th>
                    <th width="27.5%">Situação</th>
                    <th width="27.5%">Cliente</th>
                  </tr>
                </thead>
                <tbody>
                    {serviceOrder.map(serviceOrder => {
                        return (
                            <tr key={serviceOrder.id}>
                                <td width="15%">
                                  <span>
                                    <button type="submit">
                                      <md-icon>edit</md-icon>
                                    </button>
                                    <button type="submit">
                                      <md-icon>delete</md-icon>
                                    </button>
                                    <button type="submit">
                                      <md-icon>error</md-icon>
                                    </button>
                                  </span>
                                </td>
                                <td width="15%">{serviceOrder.so_number}</td>
                                <td width="15%">{dataFormatter.format( new Date (serviceOrder.createdAt))}</td>
                                <td width="27,5%">{serviceOrder.state}</td>
                                <td width="27,5%">{serviceOrder.client}</td>
                            </tr>
                        )
                    })}
                </tbody>
              </ServiceOrderTable>
            </TableContainer>

        </main>

      </Content>
    </Container>
  );
}
