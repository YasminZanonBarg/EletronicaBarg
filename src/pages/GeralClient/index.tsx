import "@material/web/icon/icon.js"
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { Container, Content, FirstContent, ClientTable, TableContainer } from "./styles"
import { IncludeButton } from "../../components/IncludeButton"
import { SearchButton } from "../../components/SearchButton"
import { useState } from "react"
import { Pagination } from "../../components/Pagination"
import DeleteItemClientModal from "../../components/DeleteItemClientModal"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getClients } from "../../http/get-clients"
import { useNavigate } from "react-router-dom"


export function GeralClient() {
  const navigate = useNavigate() 
  const queryClient = useQueryClient()

  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const { data } = useQuery({
      queryKey: ['clients'],
      queryFn: getClients,
      staleTime: 1000 * 60, 
  })

  if (!data) return null

  const dataFormatter = new Intl.DateTimeFormat('pt-BR');
  
  const filteredClients = data.filter(client => client.cpf.includes(searchTerm));

  const itemsPerPage = 10
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredClients.slice(indexOfFirstItem, indexOfLastItem)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleEdit = (clientId: string) => {
    navigate(`/GeralClient/Edit?id=${clientId}`); 
  }

  const handleDeleteSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["clients"] })
  }

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
          <FirstContent>
            <div className="left-content">
              <h1>Clientes</h1>
              <IncludeButton url="http://localhost:5173/GeralClient/Register" />
            </div>

            <div>
              <SearchButton 
                placeholder="Pesquisar cliente" 
                onSearch={handleSearch}  
              />
            </div>
          </FirstContent>

          <TableContainer>
            <ClientTable>
              <thead>
                <tr>
                  <th style={{ width: '16%' }}></th>
                  <th style={{ width: '20%' }}>Nome</th>
                  <th style={{ width: '16%' }}>
                    <div className="entrada">
                      Cadastro
                      <md-icon>arrow_drop_down</md-icon>
                    </div>
                  </th>
                  <th style={{ width: '16%' }}>CPF</th>
                  <th style={{ width: '16%' }}>Celular</th>
                  <th style={{ width: '16%' }}>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(client => {
                  return (
                    <tr key={client.id}>
                      <td width="16%">
                        <span className="butons">
                          <button
                            type="button"
                            onClick={() => handleEdit(client.id)}
                          >
                            <md-icon>edit</md-icon>
                          </button>
                          <DeleteItemClientModal
                            clientId={client.id}
                            onDeleteSuccess={handleDeleteSuccess}
                          />
                          <button type="submit">
                            <md-icon>warning</md-icon>
                          </button>
                        </span>
                      </td>
                      <td width="20%">{client.nomeCompleto}</td>
                      <td width="16%">{dataFormatter.format(new Date(client.dataCadastro))}</td>
                      <td width="16%">{client.cpf}</td>
                      <td width="16%">{client.telefone1 ?? "-"}</td>
                      <td width="16%">{client.telefone2 ?? "-"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </ClientTable>

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