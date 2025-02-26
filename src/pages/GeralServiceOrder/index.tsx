import "@material/web/icon/icon.js"
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { IncludeButton } from "../../components/IncludeButton"
import { SearchButton } from "../../components/SearchButton"
import { FilterSituationSelect } from "../../components/FilterSituationSelect"
import { Pagination } from "../../components/Pagination"
import { Container, Content, FirstContent, ServiceOrderTable, TableContainer, Status } from "./styles"
import { ServiceOrderContext } from "../../contexts/ServiceOrderContext"
import { useContext, useState } from "react"
import DeleteItemServiceOrderModal from "../../components/DeleteItemServiceOrderModal"


export function GeralServiceOrder() {
  const { serviceOrder } = useContext(ServiceOrderContext);
  const dataFormatter = new Intl.DateTimeFormat('pt-BR');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10
  const totalPages = Math.ceil(serviceOrder.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = serviceOrder.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
          <FirstContent>
            <div className="left-content">
              <h1>Ordem de Serviço</h1>
              <IncludeButton url="http://localhost:5173/GeralServiceOrder/Register" />
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
                  <th style={{ width: '15%' }}></th>
                  <th style={{ width: '15%' }}>Número O.S.</th>
                  <th style={{ width: '15%' }}>
                    <div className="entrada">
                      Entrada
                      <md-icon>arrow_drop_down</md-icon>
                    </div>
                  </th>
                  <th style={{ width: '27.5%' }}>Situação</th>
                  <th style={{ width: '27.5%' }}>Cliente</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(serviceOrder => {
                  return (
                    <tr key={serviceOrder.id}>
                      <td width="15%">
                        <span className="butons">
                          <button type="submit">
                            <md-icon>edit</md-icon>
                          </button>
                          <DeleteItemServiceOrderModal />
                          <button type="submit">
                            <md-icon>error</md-icon>
                          </button>
                        </span>
                      </td>
                      <td width="15%">{serviceOrder.so_number}</td>
                      <td width="15%">{dataFormatter.format(new Date(serviceOrder.createdAt))}</td>
                      <td width="27.5%">
                        {serviceOrder.state === 'Aguardando orçamento' && (
                          <Status statusColor="aguardando_orcamento">Aguardando orçamento</Status>
                        )}
                        {serviceOrder.state === 'Pendente aprovação' && (
                          <Status statusColor="pendente_aprovacao">Pendente aprovação</Status>
                        )}
                        {serviceOrder.state === 'Conserto negado' && (
                          <Status statusColor="conserto_negado">Conserto negado</Status>
                        )}
                        {serviceOrder.state === 'Pendente conserto' && (
                          <Status statusColor="pendente_conserto">Pendente conserto</Status>
                        )}
                        {serviceOrder.state === 'Consertado' && (
                          <Status statusColor="consertado">Consertado</Status>
                        )}
                        {serviceOrder.state === 'Consertado e retirado' && (
                          <Status statusColor="consertado_retirado">Consertado e retirado</Status>
                        )}
                        {serviceOrder.state === 'Sem conserto e retirado' && (
                          <Status statusColor="sem_conserto_retirado">Sem conserto e retirado</Status>
                        )}
                      </td>
                      <td width="27,5%">{serviceOrder.client}</td>
                    </tr>
                  )
                })}
              </tbody>
            </ServiceOrderTable>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </TableContainer>
        </main>
      </Content>
    </Container>
  );
}




