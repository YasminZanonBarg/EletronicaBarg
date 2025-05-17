import "@material/web/icon/icon.js"
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { IncludeButton } from "../../components/IncludeButton"
import { SearchButton } from "../../components/SearchButton"
import { FilterSituationSelect } from "../../components/FilterSituationSelect"
import { Pagination } from "../../components/Pagination"
import DeleteItemServiceOrderModal from "../../components/DeleteItemServiceOrderModal"
import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getServiceOrder } from "../../http/get-service-order"
import { updateFlagUrgenciaRequest } from "../../http/update-flag-urgencia" 
import { useNavigate } from "react-router-dom"

import {
  Container,
  Content,
  FirstContent,
  ServiceOrderTable,
  TableContainer,
  Status,
} from "./styles"

export function GeralServiceOrder() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  const queryClient = useQueryClient()

  const navigate = useNavigate() 

  const { data } = useQuery({
    queryKey: ["get-service-order"],
    queryFn: getServiceOrder,
    staleTime: 1000 * 60,
  })

  const mutation = useMutation({
    mutationFn: updateFlagUrgenciaRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-service-order"] })
    },
  })

  if (!data) return null

  const dataFormatter = new Intl.DateTimeFormat("pt-BR")
  const itemsPerPage = 10

  const filteredData = data.filter((item) => {
    const searchLower = searchText.toLowerCase()
    const matchesSearch =
      item.nomeCliente.toLowerCase().includes(searchLower) ||
      item.numeroOrdemServico.toString().includes(searchLower)

    const matchesStatus =
      filterStatus === "" || item.situacao === filterStatus

    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const handleDeleteSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["get-service-order"] })
  }

  const handleSearch = (value: string) => {
    setSearchText(value)
    setCurrentPage(1)
  }

  const handleFilterChange = (status: string) => {
    setFilterStatus(status)
    setCurrentPage(1)
  }

  const handleEdit = (serviceOrderId: string) => {
    navigate(`/GeralServiceOrder/Edit?id=${serviceOrderId}`); 
  }

  const handleUpdateFlagUrgencia = async (serviceOrderId: string) => {
    mutation.mutate({ id: serviceOrderId })
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
              <IncludeButton onClick={() => navigate("/GeralServiceOrder/Register")} />
            </div>

            <div>
              <SearchButton
                placeholder="Nº O.S. ou nome do cliente"
                onSearch={handleSearch}
              />
            </div>
          </FirstContent>

          <FilterSituationSelect onChange={handleFilterChange} />

          <TableContainer>
            <ServiceOrderTable>
              <thead>
                <tr>
                  <th style={{ width: "15%" }}></th>
                  <th style={{ width: "15%" }}>Número O.S.</th>
                  <th style={{ width: "15%" }}>
                    <div className="entrada">
                      Entrada
                      <md-icon>arrow_drop_down</md-icon>
                    </div>
                  </th>
                  <th style={{ width: "27.5%" }}>Situação</th>
                  <th style={{ width: "27.5%" }}>Cliente</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((serviceOrder) => (
                  <tr key={serviceOrder.id}>
                    <td width="15%">
                      <span className="butons">
                        <button
                          type="button"
                          onClick={() => handleEdit(serviceOrder.id)} // Atualizado para usar navigate
                        >
                          <md-icon>edit</md-icon>
                        </button>
                        <DeleteItemServiceOrderModal
                          serviceOrderId={serviceOrder.id}
                          onDeleteSuccess={handleDeleteSuccess}
                        />
                        <button type="button" onClick={() => handleUpdateFlagUrgencia(serviceOrder.id)}>
                          <md-icon style={{ color: serviceOrder.flagUrgencia ? "#825656" : "" }}>
                            error
                          </md-icon>
                        </button>
                      </span>
                    </td>
                    <td width="15%">{serviceOrder.numeroOrdemServico}</td>
                    <td width="15%">
                      {dataFormatter.format(new Date(serviceOrder.dataEntrada))}
                    </td>
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
                    <td width="27.5%">{serviceOrder.nomeCliente}</td>
                  </tr>
                ))}
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
  )
}