import "@material/web/icon/icon.js"

import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { SectionWrapper } from "../../components/SectionWrapper";

import { AddressSection, ContactSection, Container, Content, PersonalDataSection, SectionButtons } from "./styles"
import { TextField } from "../../components/TextField";

export function RegisterClient() {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0]; 

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
          <SectionWrapper title="DADOS PESSOAIS">
            <form>
              <PersonalDataSection>
                <div className="first_part">
                  <TextField 
                    id="register_date" 
                    label="Data Cadastro" 
                    type="date" 
                    defaultValue={formattedDate}
                    editable={false}  
                  /> 
                  <TextField id="person_type" label="Tipo Pessoa" /> 
                  <TextField id="genere" label="Sexo" />
                  <TextField id="born_date" label="Data Nascimento" type="date"/>
                </div>

                <div className="second_part">
                  <div className="name">
                    <TextField id="name" label="Nome Completo" />
                  </div>
                  <div className="cpf">
                    <TextField id="cpf" label="CPF" type="number"/>
                  </div>
                  <div className="rg">
                    <TextField id="rf" label="RG" type="number"/>
                  </div>
                </div>

                <div className="third_part">
                  <div className="filiation">
                    <TextField id="filiation" label="Filiação" multiline />
                  </div>

                  <div className="observation">
                    <TextField id="observation" label="Observação" multiline />
                    <button className="clear-button">
                      <md-icon>error</md-icon>
                    </button>
                  </div>
                </div>


              </PersonalDataSection>
            </form>
          </SectionWrapper>

          <SectionWrapper title="ENDEREÇO">
            <form>
              <AddressSection>
                <div className="first_part">
                  <div className="cep">
                    <TextField id="cep" label="CEP" type="number"/>
                  </div>
                  <div className="city">
                    <TextField id="city" label="Cidade" />
                  </div>
                  <div className="neighborhood">
                    <TextField id="neighborhood" label="Bairro" />
                  </div>
                </div>

                <div className="second_part">
                  <div className="street">
                    <TextField id="street" label="Logradouro" />
                  </div>
                  <div className="house_number">
                    <TextField id="house_number" label="Nº" type="number" />
                  </div>
                  <div className="complement">
                    <TextField id="complement" label="Complemento" />
                  </div>
                </div>
              </AddressSection>
            </form>
          </SectionWrapper>

          <SectionWrapper title="CONTATO">
            <form>
              <ContactSection>
                <div className="first_part">
                  <TextField id="cellphone_1" label="Celular (1)" type="tel"/>
                  <TextField id="cellphone_2" label="Celular (2)" type="tel"/>
                  <TextField id="telephone_1" label="Telefone (1)" type="tel"/>
                  <TextField id="telephone_2" label="Telefone (2)" type="tel"/>
                </div>
              </ContactSection>
            </form>
          </SectionWrapper>

          <SectionButtons>
            <div className="right_buttons">
              <button className="save_button">Salvar</button>
              <button className="simple_button">Sair</button>
            </div>
          </SectionButtons>
        </main>

      </Content>
    </Container>
  );
}
