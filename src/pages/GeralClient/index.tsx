import "@material/web/icon/icon.js"
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { Container, Content, FirstContent, ClientTable, TableContainer } from "./styles"
import { IncludeButton } from "../../components/IncludeButton";
import { SearchButton } from "../../components/SearchButton";
import { useContext, useState } from "react";
import { ClientContext } from "../../contexts/ClientContext";
import { Pagination } from "../../components/Pagination";

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
              <IncludeButton />
            </div>

            <div>
              <SearchButton placeholder="Pesquisar cliente" />
            </div>
          </FirstContent>

          <TableContainer>
            <ClientTable>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}></th>
                  <th style={{ width: '25%' }}>Nome</th>
                  <th style={{ width: '15%' }}>
                    <div className="entrada">
                      Cadastro
                      <md-icon>arrow_drop_down</md-icon>
                    </div>
                  </th>
                  <th style={{ width: '15%' }}>CPF</th>
                  <th style={{ width: '15%' }}>Celular</th>
                  <th style={{ width: '15%' }}>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(client => {
                  return (
                    <tr key={client.id}>
                      <td width="15%">
                        <span className="butons">
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
                      <td width="15%">{client.name}</td>
                      <td width="25%">{dataFormatter.format(new Date(client.registerAt))}</td>
                      <td width="15%">{client.cpf}</td>
                      <td width="15%">{client.cellphone_number}</td>
                      <td width="15%">{client.telephone_number}</td>
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
