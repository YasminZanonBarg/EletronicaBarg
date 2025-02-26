import "@material/web/icon/icon.js"

import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { Container, Content } from "./styles"
import { SaveButton } from "../../components/SaveButton"
import { TextField } from "../../components/TextField"

export function Report() {

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
          <h1>Relatórios</h1>
          <TextField id="born_date" label="Data Nascimento" type="date"/>
          <SaveButton />
        </main>

      </Content>
    </Container>
  );
}
