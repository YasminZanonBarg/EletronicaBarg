import "@material/web/icon/icon.js"

import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { SaveButton } from "../../components/SaveButton"
import { TextField } from "../../components/TextField"
import { ReportChart } from "../../components/ReportChart"

import { Container, Content, HeaderContainer, ReportContainer } from "./styles"

export function Report() {

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
          <HeaderContainer>          
            <div>
              <h1>Relatórios</h1>
            </div>
            
            <span>
              <div>
                <TextField id="de" label="Data Inicial" type="date"/>
              </div>
              <div>
                <TextField id="para" label="Data Final" type="date"/>
              </div>
              <div className="save_button">
                <SaveButton />
              </div>
            </span>
          </HeaderContainer>

          <ReportContainer>
            
            <ReportChart title="Total de Consertos">
              <p>21</p>
            </ReportChart>

            <ReportChart title="Consertos Aprovados">
              <p>18</p>
              <p>Taxa de 85,71%</p>
            </ReportChart>

            <ReportChart title="Valor Total">
              <p>R$ 5.400</p>
            </ReportChart>

            <ReportChart title="Valor Médio por Conserto">
              <p>R$ 300</p>
            </ReportChart>
          </ReportContainer>

          
        </main>

      </Content>
    </Container>
  );
}
