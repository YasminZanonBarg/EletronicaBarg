import "@material/web/icon/icon.js"

import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { Container, Content } from "./styles"

export function GeralClient() {

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>

        </main>

      </Content>
    </Container>
  );
}
