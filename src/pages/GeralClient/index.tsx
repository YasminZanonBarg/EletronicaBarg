import "@material/web/icon/icon.js"
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { Container, Content, FirstContent, ClientTable, TableContainer } from "./styles"
import { IncludeButton } from "../../components/IncludeButton";
import { SearchButton } from "../../components/SearchButton";
import { useContext, useState } from "react";
import { ClientContext } from "../../contexts/ClientContext";
import { Pagination } from "../../components/Pagination";
import DeleteItemClientModal from "../../components/DeleteItemClientModal"


export function GeralClient() {
  const { client } = useContext(ClientContext);
  const dataFormatter = new Intl.DateTimeFormat('pt-BR');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10
  const totalPages = Math.ceil(client.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = client.slice(indexOfFirstItem, indexOfLastItem)

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
              <SearchButton placeholder="Pesquisar cliente" />
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
                          <button type="submit">
                            <md-icon>edit</md-icon>
                          </button>
                          <DeleteItemClientModal />
                          <button type="submit">
                            <md-icon>warning</md-icon>
                          </button>
                        </span>
                      </td>
                      <td width="20%">{client.name}</td>
                      <td width="16%">{dataFormatter.format(new Date(client.registerAt))}</td>
                      <td width="16%">{client.cpf}</td>
                      <td width="16%">{client.cellphone_number}</td>
                      <td width="16%">{client.telephone_number}</td>
                    </tr>
                  )
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
