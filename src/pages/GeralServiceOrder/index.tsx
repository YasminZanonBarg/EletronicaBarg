import "@material/web/icon/icon.js"
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { IncludeButton } from "../../components/IncludeButton"
import { SearchButton } from "../../components/SearchButton"
import { FilterSituationSelect } from "../../components/FilterSituationSelect"
import { Pagination } from "../../components/Pagination"
import DeleteItemServiceOrderModal from "../../components/DeleteItemServiceOrderModal"
import { Container, Content, FirstContent, ServiceOrderTable, TableContainer, Status } from "./styles"
import { useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getServiceOrder } from "../../http/get-service-order"


export function GeralServiceOrder() {
  const [currentPage, setCurrentPage] = useState(1)
  const queryClient = useQueryClient()

  const {data} = useQuery({
    queryKey: ['get-service-order'],
    queryFn: getServiceOrder,
    staleTime: 1000 * 60, // 60 segundos
  })

  if (!data) {
    return null
  }

  const dataFormatter = new Intl.DateTimeFormat('pt-BR');

  const itemsPerPage = 10
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handleDeleteSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['get-service-order'] })    
  }

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
                          <DeleteItemServiceOrderModal
                            serviceOrderId={serviceOrder.id}
                            onDeleteSuccess={handleDeleteSuccess}
                          />
                          <button type="submit">
                            <md-icon>error</md-icon>
                          </button>
                        </span>
                      </td>
                      <td width="15%">{serviceOrder.numeroOrdemServico}</td>
                      <td width="15%">{dataFormatter.format(new Date(serviceOrder.dataEntrada))}</td>
                      <td width="27.5%">
                        {serviceOrder.situacao === 'Aguardando orçamento' && (
                          <Status statusColor="aguardando_orcamento">Aguardando orçamento</Status>
                        )}
                        {serviceOrder.situacao === 'Pendente aprovação' && (
                          <Status statusColor="pendente_aprovacao">Pendente aprovação</Status>
                        )}
                        {serviceOrder.situacao === 'Conserto negado' && (
                          <Status statusColor="conserto_negado">Conserto negado</Status>
                        )}
                        {serviceOrder.situacao === 'Pendente conserto' && (
                          <Status statusColor="pendente_conserto">Pendente conserto</Status>
                        )}
                        {serviceOrder.situacao === 'Consertado' && (
                          <Status statusColor="consertado">Consertado</Status>
                        )}
                        {serviceOrder.situacao === 'Consertado e retirado' && (
                          <Status statusColor="consertado_retirado">Consertado e retirado</Status>
                        )}
                        {serviceOrder.situacao === 'Sem conserto e retirado' && (
                          <Status statusColor="sem_conserto_retirado">Sem conserto e retirado</Status>
                        )}
                      </td>
                      <td width="27,5%">{serviceOrder.nomeCliente}</td>
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